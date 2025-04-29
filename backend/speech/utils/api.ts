import { toast } from 'react-toastify';

interface QuizQuestion {
  question: string;
  options: string[];
  correctAnswer: string;
}

interface InterviewParams {
  type: 'technical' | 'behavioral';
  role: string;
  level: 'junior' | 'mid' | 'senior';
  techstack: string;
  amount: number;
  userid: string;
}

export const fetchQuizQuestions = async (payload: InterviewParams): Promise<QuizQuestion[]> => {
  try {
    const response = await fetch('/api/interviews', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(payload),
    });

    if (!response.ok) {
      throw new Error('Failed to fetch questions');
    }

    const { success, questions, error } = await response.json();
    if (!success) {
      throw new Error(error || 'Backend error');
    }

    return questions;
  } catch (error: any) {
    console.error('Error fetching quiz questions:', error);
    toast.error('Could not generate quiz questions. Please try again later.');
    throw error;
  }
};