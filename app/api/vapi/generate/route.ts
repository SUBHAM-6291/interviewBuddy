import { generateText } from "ai";
import { google } from "@ai-sdk/google";
import { adminDb } from "@/backend/firebase/admin";

export async function POST(request: Request) {
  try {
    const { type, role, level, techstack, amount, userid } = await request.json();
    const { text: questions } = await generateText({
      model: google("gemini-2.0-flash-001"),
      prompt: `Prepare questions for a job interview.
        The job role is ${role}.
        The job experience level is ${level}.
        The tech stack used in the job is: ${techstack}.
        The focus between behavioural and technical questions should lean towards: ${type}.
        The amount of questions required is: ${amount}.
        Please return only the questions, without any additional text.
        The questions are going to be read by a voice assistant so do not use slash or asterisk or any other special characters which might break the voice assistant.
        Return the questions formatted like this:
        ["Question 1", "Question 2", "Question 3"]
        
        Thank you!
      `,
    });

    const interview = {
      role,
      type,
      level,
      techstack: techstack.split(","),
      questions: JSON.parse(questions),
      userId: userid,
      finalized: true,
      createdAt: new Date().toISOString(),
    };

    if (!adminDb) {
      throw new Error("Firestore is not initialized");
    }

    await adminDb.collection("interviews").add(interview);

    return Response.json({ success: true }, { status: 200 });
  } catch (error: any) {
    console.error("Error in POST /api/interviews:", {
      message: error.message,
      stack: error.stack,
      requestBody: await request.json().catch(() => "Invalid JSON"),
    });
    return Response.json(
      { success: false, error: error.message },
      { status: 500 }
    );
  }
}

export async function GET() {
  return Response.json({ success: true, data: "Thank you!" }, { status: 200 });
}