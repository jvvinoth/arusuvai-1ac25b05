import { useEffect, useRef, useState } from 'react';
import { siteContent } from '../lib/siteContent';

export default function MenuSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.15 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section
      id="menu"
      ref={sectionRef}
      className="bg-background py-24 md:py-32"
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        {/* Section Header */}
        <div className="text-center mb-16 md:mb-20">
          <p
            className={`text-sm uppercase tracking-widest text-secondary mb-4 transition-all duration-800 ${
              isVisible
                ? 'opacity-100 translate-y-0'
                : 'opacity-0 translate-y-10'
            }`}
          >
            {siteContent.menu.label}
          </p>
          <h2
            className={`font-heading text-4xl md:text-5xl lg:text-6xl font-semibold text-primary max-w-3xl mx-auto leading-tight tracking-tight transition-all duration-800 delay-100 ${
              isVisible
                ? 'opacity-100 translate-y-0'
                : 'opacity-0 translate-y-10'
            }`}
          >
            {siteContent.menu.heading}
          </h2>
        </div>

        {/* Menu Grid - Bento Style */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10">
          {siteContent.menu.dishes.map((dish, index) => (
            <div
              key={index}
              className={`group transition-all duration-800 ${
                isVisible
                  ? 'opacity-100 translate-y-0'
                  : 'opacity-0 translate-y-10'
              }`}
              style={{ transitionDelay: `${0.2 + index * 0.12}s` }}
            >
              <div className="bg-surface rounded-3xl overflow-hidden hover:shadow-xl transition-shadow duration-300">
                {/* Image */}
                <div className="relative aspect-[4/3] overflow-hidden">
                  <img
                    src={dish.image}
                    alt={dish.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  {/* Badge */}
                  {dish.badge && (
                    <div className="absolute top-4 right-4 bg-secondary text-white text-xs uppercase tracking-wider px-3 py-1.5 rounded-full">
                      {dish.badge}
                    </div>
                  )}
                </div>

                {/* Content */}
                <div className="p-6 md:p-8">
                  <h3 className="font-heading text-2xl md:text-3xl font-semibold text-primary mb-3">
                    {dish.name}
                  </h3>
                  <p className="text-base text-text-muted leading-relaxed">
                    {dish.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
