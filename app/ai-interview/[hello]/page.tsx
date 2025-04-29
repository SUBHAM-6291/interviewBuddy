'use client';

import React, { useState, useEffect } from 'react';
import { useRouter, useParams } from 'next/navigation';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { toast } from 'react-toastify';
import { prepSections } from '@/components/dashboard_route/data/prepSections';
import { useAuth } from '@/backend/speech/auth';
import { speakText, stopSpeech, loadVoices } from '@/backend/speech/speech';
import { fetchQuizQuestions } from '@/backend/speech/utils/api';

enum GameStatus {
  INACTIVE = 'INACTIVE',
  CONNECTING = 'CONNECTING',
  ACTIVE = 'ACTIVE',
  FINISHED = 'FINISHED',
}

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
  amount: string;
}

const positiveFeedback = [
  'Excellent work! You answered correctly.',
  'Well done! Your response is accurate.',
  'Great job! Youre on the right track.',
  'Correct! Keep up the strong performance.',
  'Nicely done! Your answer is spot on.',
];

const negativeFeedback = [
  'Incorrect. Please review and try again.',
  'Not quite. Consider revisiting this topic.',
  'That’s not correct. Keep practicing!',
  'Missed it this time. Study this area further.',
  'Incorrect answer. Try again next time.',
];

const AIInterviewQuizPage: React.FC = () => {
  const router = useRouter();
  const { slug } = useParams();
  const category = Array.isArray(slug) ? slug[0]?.toLowerCase() : (slug || 'software').toLowerCase();

  const { userId, userName } = useAuth();
  const [gameStatus, setGameStatus] = useState<GameStatus>(GameStatus.INACTIVE);
  const [timeLeft, setTimeLeft] = useState<number>(30);
  const [questions, setQuestions] = useState<QuizQuestion[]>([]);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState<number>(0);
  const [score, setScore] = useState<number>(0);
  const [selectedAnswer, setSelectedAnswer] = useState<string | null>(null);

  const selectedSection = prepSections.find((section) => section.id === category) || prepSections[0];

  const getInitialParams = (): InterviewParams => {
    return {
      type: 'technical',
      role: selectedSection.title.replace(' Interview Prep', ''),
      level: 'mid',
      techstack: selectedSection.description
        .split(' ')[selectedSection.description.split(' ').length - 3]
        .replace(',', ''),
      amount: '10',
    };
  };

  const [interviewParams, setInterviewParams] = useState<InterviewParams>(getInitialParams());

  useEffect(() => {
    loadVoices();
  }, []);

  useEffect(() => {
    let timer: NodeJS.Timeout | null = null;
    if (gameStatus === GameStatus.ACTIVE && timeLeft > 0) {
      timer = setInterval(() => {
        setTimeLeft((prev) => prev - 1);
      }, 1000);
    } else if (timeLeft === 0) {
      handleAnswerSubmit(null);
    }
    return () => {
      if (timer) clearInterval(timer);
    };
  }, [gameStatus, timeLeft]);

  useEffect(() => {
    return () => stopSpeech();
  }, []);

  const validateForm = (): boolean => {
    if (!interviewParams.role.trim()) {
      toast.error('Job role is required.');
      return false;
    }
    if (!interviewParams.techstack.trim()) {
      toast.error('Tech stack is required.');
      return false;
    }
    const amount = parseInt(interviewParams.amount, 10);
    if (isNaN(amount) || amount < 10 || amount > 50) {
      toast.error('Number of questions must be between 10 and 50.');
      return false;
    }
    return true;
  };

  const handleGameToggle = async () => {
    if (!userId || !userName) {
      toast.error('Please sign in to start the quiz.');
      return;
    }

    if (gameStatus === GameStatus.ACTIVE) {
      setGameStatus(GameStatus.FINISHED);
      setTimeLeft(0);
      const percentage = (score / questions.length) * 100;
      const feedback =
        percentage >= 80
          ? 'Excellent performance! You’ve mastered this quiz.'
          : 'Good effort! Continue practicing to improve.';
      speakText(`Quiz completed. Your score is ${score} out of ${questions.length}. ${feedback}`);
      toast.info(`Score: ${score}/${questions.length}. ${feedback}`);
      setTimeout(() => {
        stopSpeech();
        router.push('/dashboard');
      }, 3000);
    } else {
      if (!validateForm()) return;
      setGameStatus(GameStatus.CONNECTING);
      try {
        const payload = {
          ...interviewParams,
          amount: parseInt(interviewParams.amount, 10),
          userid: userId,
        };
        const questions = await fetchQuizQuestions(payload);
        setQuestions(questions);
        setGameStatus(GameStatus.ACTIVE);
        setTimeLeft(30);
        speakText(
          `Welcome, ${userName}. Your quiz on ${selectedSection.title} is starting now. Here is your first question: ${questions[0].question}`
        );
      } catch (error) {
        setGameStatus(GameStatus.INACTIVE);
      }
    }
  };

  const handleAnswerSubmit = (answer: string | null) => {
    const currentQuestion = questions[currentQuestionIndex];
    const isCorrect = answer && answer.toLowerCase() === currentQuestion.correctAnswer.toLowerCase();
    const feedback = isCorrect
      ? positiveFeedback[Math.floor(Math.random() * positiveFeedback.length)]
      : negativeFeedback[Math.floor(Math.random() * negativeFeedback.length)];

    speakText(feedback);
    toast[isCorrect ? 'success' : 'error'](feedback);

    if (isCorrect) {
      setScore((prev) => prev + 1);
    }

    if (currentQuestionIndex < questions.length - 1) {
      setCurrentQuestionIndex((prev) => prev + 1);
      setTimeLeft(30);
      setSelectedAnswer(null);
      speakText(`Next question: ${questions[currentQuestionIndex + 1].question}`);
    } else {
      setGameStatus(GameStatus.FINISHED);
      setTimeLeft(0);
      const percentage = (score / questions.length) * 100;
      const finalFeedback =
        percentage >= 80
          ? 'Excellent performance! You’ve mastered this quiz.'
          : 'Good effort! Continue practicing to improve.';
      speakText(`Quiz completed. Your score is ${score} out of ${questions.length}. ${finalFeedback}`);
      toast.info(`Score: ${score}/${questions.length}. ${finalFeedback}`);
      setTimeout(() => {
        stopSpeech();
        router.push('/dashboard');
      }, 3000);
    }
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInterviewParams({ ...interviewParams, [e.target.name]: e.target.value });
  };

  const handleSelectChange = (name: keyof InterviewParams, value: string) => {
    setInterviewParams({ ...interviewParams, [name]: value });
  };

  const handleRoleChange = (value: string) => {
    const section = prepSections.find((s) => s.id === value);
    if (section) {
      setInterviewParams({
        ...interviewParams,
        role: section.title.replace(' Interview Prep', ''),
        techstack: section.description.split(' ')[section.description.split(' ').length - 3].replace(',', ''),
      });
    }
  };

  if (!userId || !userName) {
    return <div className="min-h-screen flex items-center justify-center">Loading...</div>;
  }

  return (
    <div className="min-h-screen bg-background flex flex-col items-center justify-center p-4">
      {gameStatus === GameStatus.FINISHED ? (
        <Card className="max-w-4xl w-full text-center">
          <CardHeader>
            <CardTitle>Quiz Completed</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-lg">Your score: {score}/{questions.length}</p>
            <p className="text-lg mt-2">
              {score / questions.length >= 0.8
                ? 'Excellent performance! You’ve mastered this quiz.'
                : 'Good effort! Continue practicing to improve.'}
            </p>
            <p className="text-sm mt-2">Redirecting to dashboard...</p>
          </CardContent>
        </Card>
      ) : (
        <>
          <Card className="max-w-4xl w-full">
            <CardHeader>
              <CardTitle>{selectedSection.title}</CardTitle>
              <p className="text-sm text-muted-foreground">{selectedSection.description}</p>
            </CardHeader>
            <CardContent>
              {gameStatus === GameStatus.ACTIVE && questions.length > 0 ? (
                <>
                  <p className="mb-4">
                    Question {currentQuestionIndex + 1}: {questions[currentQuestionIndex].question}
                  </p>
                  <p className="text-sm text-green-500 mb-4">Time remaining: {timeLeft}s</p>
                  <div className="mb-4">
                    <Label>Select an answer:</Label>
                    <div className="grid grid-cols-1 gap-2 mt-2">
                      {questions[currentQuestionIndex].options.map((option, index) => (
                        <Button
                          key={index}
                          variant={selectedAnswer === option ? 'default' : 'outline'}
                          onClick={() => setSelectedAnswer(option)}
                          disabled={selectedAnswer !== null}
                        >
                          {option}
                        </Button>
                      ))}
                    </div>
                  </div>
                  {selectedAnswer && (
                    <Button onClick={() => handleAnswerSubmit(selectedAnswer)}>Submit Answer</Button>
                  )}
                </>
              ) : (
                <div>
                  <h2 className="text-xl font-semibold mb-4">Configure Quiz Parameters</h2>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="role">Job Role</Label>
                      <Select
                        value={
                          prepSections.find(
                            (s) => s.title.replace(' Interview Prep', '') === interviewParams.role
                          )?.id
                        }
                        onValueChange={handleRoleChange}
                      >
                        <SelectTrigger>
                          <SelectValue placeholder="Select role" />
                        </SelectTrigger>
                        <SelectContent>
                          {prepSections.map((section) => (
                            <SelectItem key={section.id} value={section.id}>
                              {section.title.replace(' Interview Prep', '')}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </div>
                    <div>
                      <Label htmlFor="type">Question Type</Label>
                      <Select
                        name="type"
                        value={interviewParams.type}
                        onValueChange={(value) => handleSelectChange('type', value)}
                      >
                        <SelectTrigger>
                          <SelectValue placeholder="Select type" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="technical">Technical</SelectItem>
                          <SelectItem value="behavioral">Behavioral</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    <div>
                      <Label htmlFor="level">Experience Level</Label>
                      <Select
                        name="level"
                        value={interviewParams.level}
                        onValueChange={(value) => handleSelectChange('level', value)}
                      >
                        <SelectTrigger>
                          <SelectValue placeholder="Select level" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="junior">Junior</SelectItem>
                          <SelectItem value="mid">Mid</SelectItem>
                          <SelectItem value="senior">Senior</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    <div>
                      <Label htmlFor="techstack">Tech Stack</Label>
                      <Input
                        id="techstack"
                        name="techstack"
                        value={interviewParams.techstack}
                        onChange={handleInputChange}
                        placeholder="e.g., React, JavaScript"
                      />
                    </div>
                    <div>
                      <Label htmlFor="amount">Number of Questions (10-50)</Label>
                      <Input
                        id="amount"
                        name="amount"
                        type="number"
                        value={interviewParams.amount}
                        onChange={handleInputChange}
                        placeholder="e.g., 10"
                        min="10"
                        max="50"
                      />
                    </div>
                  </div>
                </div>
              )}
            </CardContent>
          </Card>
          <Button
            variant={gameStatus === GameStatus.ACTIVE ? 'destructive' : 'default'}
            onClick={handleGameToggle}
            className="mt-6"
            disabled={gameStatus === GameStatus.CONNECTING}
          >
            {gameStatus === GameStatus.ACTIVE
              ? 'End Quiz'
              : gameStatus === GameStatus.CONNECTING
              ? 'Connecting...'
              : selectedSection.cta}
          </Button>
        </>
      )}
    </div>
  );
};

export default AIInterviewQuizPage;