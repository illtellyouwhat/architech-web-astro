import { useState, useEffect } from 'react';
import { useIntersectionObserver } from '../../hooks/useIntersectionObserver';
import { Scale, Heart, Newspaper, ShoppingCart, GraduationCap, Factory } from 'lucide-react';

interface IndustryCardProps {
  icon: string;
  title: string;
  items: string[];
  ctaLink: string;
}

const iconMap: Record<string, any> = {
  'lucide:scale': Scale,
  'lucide:heart': Heart,
  'lucide:newspaper': Newspaper,
  'lucide:shopping-cart': ShoppingCart,
  'lucide:graduation-cap': GraduationCap,
  'lucide:factory': Factory,
};

export default function IndustryCard({
  icon,
  title,
  items,
  ctaLink,
}: IndustryCardProps) {
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

  const IconComponent = iconMap[icon];

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
        {IconComponent ? (
          <IconComponent className="h-11 w-11 text-gray-600" strokeWidth={1} />
        ) : (
          <div className="h-11 w-11 bg-gray-200 rounded-lg flex items-center justify-center">
            <span className="text-gray-900 text-xl">?</span>
          </div>
        )}
      </div>

      {/* Title - Always visible */}
      <h3 className={`text-xl font-semibold text-gray-900 leading-tight ${shouldExpand ? 'mb-4' : ''}`}>
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
            {/* Description - Bullet List */}
            <ul className="space-y-2 text-gray-600 mb-6">
              {items.map((item, index) => (
                <li key={index} className="flex items-start gap-2">
                  <span className="text-gray-900 flex-shrink-0 mt-0.5">✓</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>

            {/* CTA Link */}
            <a
              href={ctaLink}
              className="inline-flex items-center font-medium text-gray-900 hover:text-gray-700 transition-colors"
            >
              See case studies
              {IconComponent && <IconComponent className="ml-2 h-4 w-4" />}
            </a>
          </>
        )}
      </div>
    </article>
  );
}
