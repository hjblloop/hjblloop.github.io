'use client'

import { useState } from "react";

interface VolleyBallProps {
  onAnimationEnd?: () => void;
}

export default function VolleyBall({onAnimationEnd}: VolleyBallProps) {
  // false = left, true = right
  const [onRight, setOnRight] = useState(false);
  const [animating, setAnimating] = useState(false);

  const handleClick = () => {
    if (!animating) setAnimating(true);
  };

  const handleAnimationEnd = () => {
    setOnRight((prev) => !prev);
    setAnimating(false);
    if (onAnimationEnd) onAnimationEnd();
  };

  return (
    <div className="fixed inset-0 pointer-events-none z-0">
      <div
        className={`
          absolute w-16 h-16 rounded-full bg-white shadow-lg cursor-pointer pointer-events-auto
          ${onRight ? "right-10 bottom-10" : "left-10 bottom-10"}
          ${animating ? (onRight ? "animate-arc-left" : "animate-arc-right") : ""}
        `}
        onClick={handleClick}
        onAnimationEnd={handleAnimationEnd}
        title="Click me!">
            <div className="absolute left-1/2 top-0 w-2 h-16 bg-yellow-400 rounded-full" style={{ transform: "translateX(-50%)" }} />
            {/* Left vertical (blue) */}
            <div className="absolute left-3 top-0 w-2 h-16 bg-blue-500 rounded-full" />
            {/* Right vertical (yellow) */}
            <div className="absolute right-3 top-0 w-2 h-16 bg-blue-500 rounded-full" />
      
        </div>
      
      <style jsx>{`
        .animate-arc-right {
          animation: arc-move-right 3s cubic-bezier(0.4, 0, 0.2, 1);
        }
        .animate-arc-left {
          animation: arc-move-left 3s cubic-bezier(0.4, 0, 0.2, 1);
        }
        @keyframes arc-move-right {
          0% {
            left: 2.5rem;
            bottom: 2.5rem;
            transform: translate(0, 0);
          }
          50% {
            left: 50vw;
            bottom: 60vh;
            transform: translate(-50%, -50%) scale(1.2);
          }
          100% {
            left: calc(100vw - 6rem);
            bottom: 2.5rem;
            transform: translate(0, 0);
          }
        }
        @keyframes arc-move-left {
          0% {
            right: 2.5rem;
            bottom: 2.5rem;
            transform: translate(0, 0);
          }
          50% {
            right: 50vw;
            bottom: 60vh;
            transform: translate(50%, -50%) scale(1.2);
          }
          100% {
            right: calc(100vw - 6rem);
            bottom: 2.5rem;
            transform: translate(0, 0);
          }
        }
      `}</style>
    </div>
  );
}