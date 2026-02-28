import { z } from 'zod';
import { generateText } from 'ai';
import { google } from '@ai-sdk/google';
import { adminDb } from '@/backend/firebase/admin';
import { NextResponse } from 'next/server';

const schema = z.object({
  type: z.enum(['technical', 'behavioral'], { message: 'Type must be "technical" or "behavioral"' }),
  role: z.string().min(1, 'Role is required'),
  level: z.enum(['junior', 'mid', 'senior'], { message: 'Level must be "junior", "mid", or "senior"' }),
  techstack: z.string().min(1, 'Tech stack is required'),
  amount: z.number().min(10).max(50, 'Amount must be between 10 and 50'),
  userid: z.string().min(1, 'User ID is required'),
});

export async function POST(request: Request) {
  let body; // Store body outside to access in catch block
  try {
    body = await request.json();
    console.log('Request body:', body);

    const { success, data, error } = schema.safeParse(body);
    if (!success) {
      return NextResponse.json({ success: false, error: error.message }, { status: 400 });
    }

    const { type, role, level, techstack, amount, userid } = data;

    // Role Validation Logic
    const roleTechstackMap: { [key: string]: string[] } = {
      'Frontend Engineer': ['React', 'JavaScript', 'HTML', 'CSS'],
      'Data Scientist': ['Python', 'pandas', 'scikit-learn'],
      'Cybersecurity Specialist': ['Network Security', 'Encryption', 'OWASP'],
      'Software Engineer': ['React', 'Node.js', 'Java', 'Python'],
    };

    const expectedTech = roleTechstackMap[role];
    if (expectedTech) {
      const techstackArray = techstack.split(',').map((t: string) => t.trim().toLowerCase());
      const hasMatchingTech = expectedTech.some((t) => techstackArray.includes(t.toLowerCase()));
      if (!hasMatchingTech) {
        return NextResponse.json(
          {
            success: false,
            error: `Tech stack "${techstack}" does not align with role "${role}". Expected tech: ${expectedTech.join(', ')}`,
          },
          { status: 400 }
        );
      }
    }

    // AI Generation
    const { text } = await generateText({
      model: google('gemini-2.5-flash'), // Upgraded for better JSON performance
      prompt: `
        Generate exactly ${amount} ${type} multiple-choice questions for a job interview.
        Role: ${role}, Level: ${level}, Tech Stack: ${techstack}.
        
        Requirements:
        - Exactly 4 options per question.
        - Exactly 1 correct answer that exists within the options array.
        - No markdown formatting, no symbols like * or /, suitable for voice reading.
        
        Return ONLY a JSON array:
        [
          {
            "question": "string",
            "options": ["string", "string", "string", "string"],
            "correctAnswer": "string"
          }
        ]
      `,
    });

    // Clean response (Gemini sometimes wraps in ```json blocks)
    const cleanedText = text.replace(/```json|```/g, '').trim();
    
    let questions;
    try {
      questions = JSON.parse(cleanedText);
      
      // Structural Validation
      const isValid = Array.isArray(questions) && 
                      questions.length === amount &&
                      questions.every(q => 
                        q.question && 
                        Array.isArray(q.options) && 
                        q.options.length === 4 && 
                        q.options.includes(q.correctAnswer)
                      );

      if (!isValid) throw new Error("AI returned incorrect JSON structure");

    } catch (e) {
      console.error('Parsing Error:', e, 'Raw AI Text:', text);
      return NextResponse.json(
        { success: false, error: 'AI failed to generate a valid question format. Please try again.' },
        { status: 500 }
      );
    }

    // Firestore Logic
    if (!adminDb) {
      throw new Error('Firestore is not initialized');
    }

    const interview = {
      role,
      type,
      level,
      techstack: techstack.split(',').map((tech: string) => tech.trim()),
      questions,
      userId: userid,
      createdAt: new Date().toISOString(),
    };

    const docRef = await adminDb.collection('interviews').add(interview);

    return NextResponse.json({ success: true, interviewId: docRef.id, questions }, { status: 200 });

  } catch (error: any) {
    // Check if the error is specifically the API key
    const isApiKeyError = error.message?.includes('API key');
    
    console.error('CRITICAL ERROR in POST /api/interviews:', {
      message: error.message,
      requestBody: body, // Safe access to pre-parsed body
    });

    return NextResponse.json(
      { 
        success: false, 
        error: isApiKeyError ? 'AI Configuration Error: Please check API Key' : error.message 
      }, 
      { status: 500 }
    );
  }
}