"use client";

import { useEffect, useState } from 'react';
import type { NodeJS } from 'node';
import { cn } from '@/lib/utils';

interface EntryAnimationWrapperProps {
  children: React.ReactNode;
  className?: string;
  delay?: number; // delay in ms for initial load
}

export function EntryAnimationWrapper({ children, className, delay = 0 }: EntryAnimationWrapperProps) {
  const [isVisible, setIsVisible] = useState(false);
  // State to track if the initial animation cycle (after delay) has started/completed.
  // This helps prevent re-animation on the very first 'visible' event if it fires before initial delay.
  const [initialAnimationTriggered, setInitialAnimationTriggered] = useState(false);

  // Initial animation on mount after the specified delay
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
      setInitialAnimationTriggered(true); // Mark that the initial animation sequence has been triggered
    }, delay);
    return () => clearTimeout(timer);
  }, [delay]); // Only depends on `delay` for initial setup

  // Handle tab visibility changes to re-trigger animation
  useEffect(() => {
    let reTriggerTimerId: NodeJS.Timeout | undefined;

    const handleVisibilityChange = () => {
      // Check if the document is visible and if the initial animation has already been triggered
      if (document.visibilityState === 'visible' && initialAnimationTriggered) {
        // Reset isVisible to false to allow the opacity transition to re-run
        setIsVisible(false);
        
        // Use a short timeout to ensure the DOM updates and the CSS transition re-triggers
        // This delay allows the browser to process the opacity-0 state before transitioning to opacity-100
        reTriggerTimerId = setTimeout(() => {
          setIsVisible(true);
        }, 50); // 50ms is a small delay, usually sufficient
      }
    };

    document.addEventListener('visibilitychange', handleVisibilityChange);

    // Clean up the event listener and any pending timer on component unmount
    return () => {
      document.removeEventListener('visibilitychange', handleVisibilityChange);
      if (reTriggerTimerId) {
        clearTimeout(reTriggerTimerId);
      }
    };
  }, [initialAnimationTriggered]); // Re-subscribe if initialAnimationTriggered changes (it changes once)

  return (
    <div
      className={cn(
        "transition-opacity duration-1000 ease-in-out",
        isVisible ? "opacity-100" : "opacity-0",
        className
      )}
    >
      {children}
    </div>
  );
}
