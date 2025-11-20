import { useState, useEffect } from 'react';
import { useIntersectionObserver } from '../../hooks/useIntersectionObserver';

interface ServiceCardProps {
  icon: string;
  title: string;
  description: string;
  features: string[];
  learnMoreUrl?: string;
}

export default function ServiceCard({
  icon,
  title,
  description,
  features,
  learnMoreUrl = '#contact',
}: ServiceCardProps) {
  const [isExpanded, setIsExpanded] = useState(false);
  const { ref, isIntersecting, isMobile } = useIntersectionObserver();

  // Auto-expand on mobile when scrolled into view
  useEffect(() => {
    if (isMobile && isIntersecting) {
      setIsExpanded(true);
    }
  }, [isMobile, isIntersecting]);

  return (
    <article
      ref={ref}
      className="group flex h-full flex-col overflow-hidden rounded-2xl border border-gray-100 bg-white shadow-sm transition hover:-translate-y-1 hover:shadow-lg"
      onMouseEnter={() => !isMobile && setIsExpanded(true)}
      onMouseLeave={() => !isMobile && setIsExpanded(false)}
    >
      {/* Header - Always visible */}
      <div className="border-b border-gray-50 p-8">
        <div className="mb-4 text-4xl">{icon}</div>
        <h3 className="text-xl font-medium text-gray-900">{title}</h3>
        <p className="mt-3 text-gray-600">{description}</p>
      </div>

      {/* Features - Expandable section */}
      <div
        className={`overflow-hidden transition-all duration-500 ease-in-out ${
          isExpanded ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        <div className="flex flex-1 flex-col justify-between p-8">
          <ul className="space-y-3 text-sm text-gray-600">
            {features.map((feature, index) => (
              <li
                key={index}
                className={`flex items-start gap-3 transition-opacity ${
                  isExpanded ? 'opacity-100' : 'opacity-0'
                }`}
                style={{
                  transitionDelay: isExpanded ? `${index * 50}ms` : '0ms',
                }}
              >
                <span className="text-blue-600 flex-shrink-0">✓</span>
                <span>{feature}</span>
              </li>
            ))}
          </ul>

          {/* Learn More button */}
          <a
            href={learnMoreUrl}
            className={`mt-6 inline-flex items-center gap-2 text-sm font-medium text-gray-700 transition-all hover:text-gray-900 ${
              isExpanded ? 'opacity-100' : 'opacity-0'
            }`}
            style={{
              transitionDelay: isExpanded
                ? `${features.length * 50 + 100}ms`
                : '0ms',
            }}
          >
            Learn more
            <svg
              className="h-4 w-4"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9 5l7 7-7 7"
              />
            </svg>
          </a>
        </div>
      </div>
    </article>
  );
}
