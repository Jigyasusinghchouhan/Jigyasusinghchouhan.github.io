
"use client";

import { useState, useEffect, type CSSProperties } from 'react';
import { cn } from '@/lib/utils';

interface TypingAnimationProps {
  texts: string[];
  typingSpeed?: number; // Milliseconds per character
  deletingSpeed?: number; // Milliseconds per character
  pauseDuration?: number; // Milliseconds to pause after typing/deleting
  className?: string;
  style?: CSSProperties;
}

export function TypingAnimation({
  texts,
  typingSpeed = 150,
  deletingSpeed = 100,
  pauseDuration = 1000,
  className,
  style,
}: TypingAnimationProps) {
  const [textIndex, setTextIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [displayedText, setDisplayedText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    if (!texts || texts.length === 0) return;

    const currentText = texts[textIndex];

    const handleTyping = () => {
      if (!isDeleting) {
        if (charIndex < currentText.length) {
          setDisplayedText((prev) => prev + currentText[charIndex]);
          setCharIndex((prev) => prev + 1);
        } else {
          // Finished typing, pause then start deleting
          setTimeout(() => setIsDeleting(true), pauseDuration);
        }
      } else {
        if (charIndex > 0) {
          setDisplayedText((prev) => prev.substring(0, prev.length - 1));
          setCharIndex((prev) => prev - 1);
        } else {
          // Finished deleting, move to next text
          setIsDeleting(false);
          setTextIndex((prev) => (prev + 1) % texts.length);
        }
      }
    };

    const speed = isDeleting ? deletingSpeed : typingSpeed;
    const timer = setTimeout(handleTyping, speed);

    return () => clearTimeout(timer);
  }, [charIndex, textIndex, isDeleting, texts, typingSpeed, deletingSpeed, pauseDuration]);

  return (
    <span
      className={cn("text-2xl font-semibold text-foreground/90 h-8 block", className)}
      style={style}
      aria-live="polite"
      aria-label={`Currently displaying: ${displayedText}`}
    >
      {displayedText}
      <span className="animate-pulse">|</span> {/* Blinking cursor */}
    </span>
  );
}
