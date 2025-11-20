import { useIntersectionObserver } from '../../hooks/useIntersectionObserver';
import type { ReactNode } from 'react';

interface RevealOnScrollProps {
  children: ReactNode;
  className?: string;
}

export default function RevealOnScroll({ children, className = '' }: RevealOnScrollProps) {
  const { ref, isIntersecting, isMobile } = useIntersectionObserver();

  return (
    <div
      ref={ref}
      className={`
        ${className}
        group
        transition-opacity duration-300
        ${
          isMobile
            ? isIntersecting
              ? 'opacity-100'
              : 'opacity-0' // Mobile: scroll reveal
            : 'opacity-0 group-hover:opacity-100' // Desktop: hover reveal
        }
      `}
    >
      {children}
    </div>
  );
}
