'use client';

import { useEffect, useState } from 'react';

interface Props {
  words: string[];
  speed?: number;
  delay?: number;
}

const MorphingText = ({ 
  words, 
  speed = 100,
  delay = 2000 
}: Props) => {
  const [currentWord, setCurrentWord] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const timeout = setTimeout(() => {
      const currentFullWord = words[currentIndex];
      
      if (!isDeleting) {
        if (currentWord.length < currentFullWord.length) {
          setCurrentWord(currentFullWord.slice(0, currentWord.length + 1));
        } else {
          setTimeout(() => setIsDeleting(true), delay);
        }
      } else {
        if (currentWord.length > 0) {
          setCurrentWord(currentWord.slice(0, currentWord.length - 1));
        } else {
          setIsDeleting(false);
          setCurrentIndex((prev) => (prev + 1) % words.length);
        }
      }
    }, speed);

    return () => clearTimeout(timeout);
  }, [currentWord, currentIndex, isDeleting, words, speed, delay]);

  return (
    <div className="relative text-3x">
      of{' '}
      <span className="text-pink-500">
        {currentWord}
        <span className="absolute animate-blink">|</span>
      </span>
    </div>
  );
};

export default MorphingText;