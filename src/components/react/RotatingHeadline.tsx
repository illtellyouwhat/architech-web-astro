import { useState, useEffect } from 'react';

interface RotatingHeadlineProps {
  words?: string[];
  interval?: number;
}

export default function RotatingHeadline({
  words = ["company", "reports", "team", "product", "analytics"],
  interval = 2500
}: RotatingHeadlineProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const rotationInterval = setInterval(() => {
      setIsVisible(false);

      setTimeout(() => {
        setCurrentIndex((prev) => (prev + 1) % words.length);
        setIsVisible(true);
      }, 500); // Match transition duration
    }, interval);

    return () => clearInterval(rotationInterval);
  }, [words.length, interval]);

  // Generate aria-label with all words for accessibility
  const ariaLabel = `Your ${words.join(', or ')} needs data`;

  return (
    <span
      className="inline-block min-w-[200px] text-center"
      aria-label={ariaLabel}
    >
      <span
        className={`inline-block transition-opacity duration-500 ${
          isVisible ? 'opacity-100' : 'opacity-0'
        }`}
      >
        {words[currentIndex]}
      </span>
    </span>
  );
}
