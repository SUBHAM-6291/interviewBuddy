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
  try {
    const body = await request.json();
    console.log('Request body:', body);
    const { success, data, error } = schema.safeParse(body);
    if (!success) {
      return NextResponse.json({ success: false, error: error.message }, { status: 400 });
    }

    const { type, role, level, techstack, amount, userid } = data;

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

    const { text } = await generateText({
      model: google('gemini-1.5-flash'),
      prompt: `
        Generate exactly ${amount} ${type} multiple-choice questions for a job interview.
        The job role is "${role}" (e.g., Cybersecurity Specialist, Frontend Engineer, Data Scientist).
        The job experience level is "${level}" (junior, mid, or senior).
        The tech stack is: "${techstack}" (e.g., Network Security, Encryption, OWASP for Cybersecurity Specialist; React, JavaScript, HTML, CSS for Frontend Engineer; Python, pandas, scikit-learn for Data Scientist).
        Each question must have:
        - Exactly four answer options.
        - One correct answer and three incorrect distractors.
        - Clear, concise wording suitable for a voice assistant (avoid symbols like *, /, or complex formatting).
        Return the response as a valid JSON array, like this:
        [
          {
            "question": "Question text",
            "options": ["Option 1", "Option 2", "Option 3", "Option 4"],
            "correctAnswer": "Option 1"
          }
        ]
        Rules:
        - Output ONLY valid JSON. Do not include markdown (e.g., \`\`\`json), comments, or extra text.
        - Use double quotes for all strings and escape special characters properly.
        - Ensure questions are practical and relevant to the role and tech stack (e.g., OWASP, encryption for Cybersecurity Specialist; React, JavaScript for Frontend Engineer; machine learning, pandas for Data Scientist).
        - Ensure exactly ${amount} questions, each with 4 options and 1 correct answer matching one of the options.
      `,
    });

 
    const cleanedText = text.replace(/```json\n|\n```/g, '').trim();
    console.log('Cleaned Gemini response:', cleanedText);

   
    let questions;
    try {
      questions = JSON.parse(cleanedText);
      if (
        !Array.isArray(questions) ||
        questions.length !== amount ||
        questions.some(
          (q) =>
            !q.question ||
            !q.options ||
            !Array.isArray(q.options) ||
            q.options.length !== 4 ||
            !q.correctAnswer ||
            !q.options.includes(q.correctAnswer)
        )
      ) {
        throw new Error(
          `Invalid question format: Must be an array of ${amount} questions, each with a question, 4 options, and a correctAnswer matching one option.`
        );
      }
    } catch (e) {
      console.error('Error parsing Gemini response:', e, 'Cleaned text:', cleanedText);
      return NextResponse.json(
        { success: false, error: 'Failed to generate valid questions from Gemini AI' },
        { status: 500 }
      );
    }

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
    console.error('Error in POST /api/interviews:', {
      message: error.message,
      stack: error.stack,
      requestBody: await request.json().catch(() => 'Invalid JSON'),
    });
    return NextResponse.json({ success: false, error: error.message }, { status: 500 });
  }
}