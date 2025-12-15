import { useState, useEffect } from 'react';
import { useIntersectionObserver } from '../../hooks/useIntersectionObserver';
import { Settings, Brain, Database } from 'lucide-react';

interface ServiceCardProps {
  icon: string;
  title: string;
  description: string;
  features: string[];
  learnMoreUrl?: string;
  ctaText?: string;
}

const iconMap: Record<string, any> = {
  'lucide:settings': Settings,
  'lucide:brain': Brain,
  'lucide:database': Database,
};

export default function ServiceCard({
  icon,
  title,
  description,
  features,
  learnMoreUrl = '#contact',
  ctaText,
}: ServiceCardProps) {
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
        shadow-md hover:shadow-lg cursor-pointer
        transition-all duration-300 ease-in-out
        ${shouldExpand ? 'py-8' : 'py-6'} px-6
      `}
      onMouseEnter={() => !isMobile && setIsExpanded(true)}
      onMouseLeave={() => !isMobile && setIsExpanded(false)}
    >
      {/* Icon - Always visible */}
      <div className="mb-4">
        {icon.startsWith('lucide:') && iconMap[icon] ? (
          (() => {
            const IconComponent = iconMap[icon];
            return <IconComponent className="h-11 w-11 text-gray-600" strokeWidth={1.5} />;
          })()
        ) : (
          <div className="text-4xl">{icon}</div>
        )}
      </div>

      {/* Title - Always visible */}
      <h3 className={`text-2xl font-semibold text-gray-900 leading-tight ${shouldExpand ? 'mb-3' : ''}`}>
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
          <>
            {/* Description */}
            <p className="text-base text-gray-600 leading-relaxed mb-4">
              {description}
            </p>

            {/* Features List */}
            <ul className="text-sm text-gray-600 space-y-2 mb-4">
              {features.map((feature, index) => (
                <li key={index}>• {feature}</li>
              ))}
            </ul>

            {/* CTA Button */}
            <a
              href={learnMoreUrl}
              className="inline-flex items-center gap-2 px-4 py-2 text-sm font-medium text-gray-900 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors duration-200"
            >
              {ctaText || (() => {
                if (title.includes('Process Automation')) return 'See automation case studies';
                if (title.includes('AI')) return 'See AI case studies';
                if (title.includes('Data Integration')) return 'See integration case studies';
                return 'Learn more';
              })()} →
            </a>
          </>
        )}
      </div>
    </article>
  );
}
