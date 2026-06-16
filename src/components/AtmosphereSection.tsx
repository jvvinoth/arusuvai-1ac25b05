import { useEffect, useRef, useState } from 'react';
import { siteContent } from '../lib/siteContent';

export default function AtmosphereSection() {
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
      id="atmosphere"
      ref={sectionRef}
      className="bg-surface py-24 md:py-32"
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        {/* Section Header */}
        <div className="max-w-4xl mb-16 md:mb-20">
          <p
            className={`text-sm uppercase tracking-widest text-secondary mb-4 transition-all duration-800 ${
              isVisible
                ? 'opacity-100 translate-y-0'
                : 'opacity-0 translate-y-10'
            }`}
          >
            {siteContent.atmosphere.label}
          </p>
          <h2
            className={`font-heading text-4xl md:text-5xl lg:text-6xl font-semibold text-primary mb-6 leading-tight tracking-tight transition-all duration-800 delay-100 ${
              isVisible
                ? 'opacity-100 translate-y-0'
                : 'opacity-0 translate-y-10'
            }`}
          >
            {siteContent.atmosphere.heading}
          </h2>
          <p
            className={`text-base md:text-lg text-text-muted leading-relaxed max-w-2xl transition-all duration-800 delay-200 ${
              isVisible
                ? 'opacity-100 translate-y-0'
                : 'opacity-0 translate-y-10'
            }`}
          >
            {siteContent.atmosphere.description}
          </p>
        </div>

        {/* Image Gallery - Asymmetric Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {/* Large Featured Image */}
          <div
            className={`md:col-span-2 lg:row-span-2 transition-all duration-800 delay-300 ${
              isVisible
                ? 'opacity-100 translate-y-0'
                : 'opacity-0 translate-y-10'
            }`}
          >
            <div className="relative aspect-[16/10] md:aspect-[16/12] rounded-2xl overflow-hidden shadow-lg">
              <img
                src={siteContent.atmosphere.images[0].url}
                alt={siteContent.atmosphere.images[0].alt}
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
              />
            </div>
          </div>

          {/* Two Smaller Images */}
          {siteContent.atmosphere.images.slice(1).map((image, index) => (
            <div
              key={index}
              className={`transition-all duration-800 ${
                isVisible
                  ? 'opacity-100 translate-y-0'
                  : 'opacity-0 translate-y-10'
              }`}
              style={{ transitionDelay: `${0.4 + index * 0.12}s` }}
            >
              <div className="relative aspect-[4/3] rounded-2xl overflow-hidden shadow-lg">
                <img
                  src={image.url}
                  alt={image.alt}
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
