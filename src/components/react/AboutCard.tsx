import { useState, useEffect } from 'react';
import { useIntersectionObserver } from '../../hooks/useIntersectionObserver';

interface AboutCardProps {
  title: string;
  description: string;
}

export default function AboutCard({
  title,
  description,
}: AboutCardProps) {
  const [isExpanded, setIsExpanded] = useState(false);
  const [hasExpanded, setHasExpanded] = useState(false);
  const { ref, isIntersecting, isMobile } = useIntersectionObserver({ threshold: 0.3 });

  // Auto-expand on mobile when scrolled into view (persistent)
  useEffect(() => {
    if (isMobile && isIntersecting && !hasExpanded) {
      setIsExpanded(true);
      setHasExpanded(true);
    }
  }, [isMobile, isIntersecting, hasExpanded]);

  // Determine if card should be expanded
  const shouldExpand = isMobile ? hasExpanded : isExpanded;

  return (
    <article
      ref={ref}
      className={`
        group flex flex-col overflow-hidden rounded-xl border border-gray-100 bg-white
        shadow-sm hover:shadow-md cursor-pointer
        transition-all duration-300 ease-in-out
        ${shouldExpand ? 'py-6' : 'py-4'} px-6
      `}
      onMouseEnter={() => !isMobile && setIsExpanded(true)}
      onMouseLeave={() => !isMobile && setIsExpanded(false)}
    >
      {/* Title - Always visible */}
      <h3 className={`text-xl font-semibold text-gray-900 leading-tight ${shouldExpand ? 'mb-3' : ''}`}>
        {title}
      </h3>

      {/* Expandable Content */}
      <div
        className={`
          transition-all duration-300 ease-in-out
          ${shouldExpand
            ? 'opacity-100 translate-y-0'
            : 'opacity-0 -translate-y-2.5 h-0 overflow-hidden'
          }
        `}
      >
        {shouldExpand && (
          <p className="text-base text-gray-600 leading-relaxed">
            {description}
          </p>
        )}
      </div>
    </article>
  );
}
