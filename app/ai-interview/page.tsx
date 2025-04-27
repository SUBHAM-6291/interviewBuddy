'use client';

import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

const AIInterviewPage: React.FC = () => {
  const [isCalling, setIsCalling] = useState(false);
  const [callTime, setCallTime] = useState<number>(0);
  const [showTextField, setShowTextField] = useState(true);
  const [showThankYou, setShowThankYou] = useState(false);
  const router = useRouter();

  const welcomeText = 'Welcome to your AI interview! Please take a seat and prepare to showcase your skills. Let\'s get started!';
  const thankYouText = 'Thank you for completing the interview!';
  const redirectText = 'We will redirect you in just a few seconds. 🚀';

  useEffect(() => {
    if (!isCalling) {
      const utterance = new SpeechSynthesisUtterance(welcomeText);
      utterance.onend = () => setShowTextField(false);
      window.speechSynthesis.speak(utterance);
    }
    return () => window.speechSynthesis.cancel();
  }, [isCalling]);

  useEffect(() => {
    let timer: NodeJS.Timeout | null = null;
    if (isCalling) {
      timer = setInterval(() => setCallTime((prev) => prev + 1), 1000);
    } else {
      setCallTime(0);
    }
    return () => {
      if (timer) {
        clearInterval(timer);
      }
    };
  }, [isCalling]);

  const handleCallToggle = () => {
    if (isCalling) {
      setShowThankYou(true);
      window.speechSynthesis.cancel();
      const thankYouUtterance = new SpeechSynthesisUtterance(thankYouText);
      thankYouUtterance.onend = () => {
        const redirectUtterance = new SpeechSynthesisUtterance(redirectText);
        redirectUtterance.onend = () => router.push('/dashboard');
        window.speechSynthesis.speak(redirectUtterance);
      };
      window.speechSynthesis.speak(thankYouUtterance);
    }
    setIsCalling(!isCalling);
  };

  return (
    <div className="min-h-screen bg-background flex flex-col items-center justify-center p-4">
      {showThankYou ? (
        <div className="max-w-4xl w-full text-center">
          <p className="text-lg font-semibold text-gray-700">{thankYouText}</p>
          <p className="text-lg font-semibold text-gray-700 mt-2">{redirectText}</p>
        </div>
      ) : (
        <>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl w-full mb-6">
            <Card className="flex flex-col items-center">
              <CardHeader>
                <CardTitle>AI Assistant</CardTitle>
              </CardHeader>
              <CardContent className="flex flex-col items-center">
                <div
                  className={`w-16 h-16 rounded-full bg-blue-500 flex items-center justify-center transition-all ${
                    isCalling ? 'animate-pulse' : ''
                  }`}
                >
                  <div className="w-8 h-8 rounded-full bg-blue-300" />
                </div>
                <p className="text-muted-foreground mt-4">{isCalling ? 'Connected' : 'Ready to connect'}</p>
                {isCalling && (
                  <p className="text-sm text-green-500 mt-2">Call duration: {callTime}s</p>
                )}
              </CardContent>
            </Card>
            <Card className="flex flex-col items-center">
              <CardHeader>
                <CardTitle>Human Representative</CardTitle>
              </CardHeader>
              <CardContent className="flex flex-col items-center">
                <img
                  src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80"
                  alt="Human profile"
                  className="w-16 h-16 rounded-full object-cover mt-4"
                />
                <p className="text-muted-foreground mt-4">Connect with a human representative</p>
              </CardContent>
            </Card>
          </div>
          <Button
            variant={isCalling ? 'destructive' : 'default'}
            onClick={handleCallToggle}
            className="mt-6"
          >
            {isCalling ? 'Disconnect' : 'Start Interview'}
          </Button>
          {showTextField && (
            <div className="max-w-4xl w-full mt-6 text-center" aria-live="polite">
              <p className="text-sm text-muted-foreground mb-2">If you can't hear the audio, read below:</p>
              <textarea
                value={welcomeText}
                disabled
                className="w-full p-2 border rounded-md bg-gray-100 text-gray-700 resize-none h-24"
              />
            </div>
          )}
        </>
      )}
    </div>
  );
};

export default AIInterviewPage;