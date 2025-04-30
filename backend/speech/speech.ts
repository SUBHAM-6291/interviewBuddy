import { toast } from 'react-toastify';

export const speakText = (text: string, onEnd?: () => void) => {
  if (!('speechSynthesis' in window)) {
    toast.error('Yeh browser bol nahi sakta.');
    return;
  }

  window.speechSynthesis.cancel();

  const utterance = new SpeechSynthesisUtterance(text);
  utterance.lang = 'en-US';
  utterance.rate = 1;
  utterance.volume = 1;

  const voices = window.speechSynthesis.getVoices();
  const maleVoice = voices.find(
    (voice) => voice.lang === 'en-US' && voice.name.toLowerCase().includes('male')
  ) || voices.find((voice) => voice.lang === 'en-US');

  if (maleVoice) {
    utterance.voice = maleVoice;
  }

  if (onEnd) {
    utterance.onend = onEnd;
  }

  window.speechSynthesis.speak(utterance);
};

export const stopSpeech = () => {
  if ('speechSynthesis' in window) {
    window.speechSynthesis.cancel();
  }
};

export const loadVoices = (): Promise<SpeechSynthesisVoice[]> => {
  return new Promise((resolve) => {
    const voices = window.speechSynthesis.getVoices();
    if (voices.length > 0) {
      resolve(voices);
    } else {
      window.speechSynthesis.onvoiceschanged = () => {
        resolve(window.speechSynthesis.getVoices());
      };
    }
  });
};