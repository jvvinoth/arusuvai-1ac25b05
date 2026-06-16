import { useEffect, useRef, useState } from 'react';
import { siteContent } from '../lib/siteContent';

export default function AboutSection() {
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
      id="about"
      ref={sectionRef}
      className="bg-surface py-24 md:py-32"
    >
      <div className="max-w-6xl mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 lg:gap-16">
          {/* Left Column - Label & Heading */}
          <div className="lg:col-span-2">
            <div
              className={`transition-all duration-800 ${
                isVisible
                  ? 'opacity-100 translate-y-0'
                  : 'opacity-0 translate-y-10'
              }`}
              style={{ transitionDelay: '0s' }}
            >
              <p className="text-sm uppercase tracking-widest text-secondary mb-4">
                {siteContent.about.label}
              </p>
              <h2 className="font-heading text-4xl md:text-5xl lg:text-6xl font-semibold text-primary leading-tight tracking-tight">
                {siteContent.about.heading}
              </h2>
            </div>

            {/* Decorative Line */}
            <div
              className={`hidden lg:block w-px h-24 bg-border mt-12 transition-all duration-800 delay-200 ${
                isVisible ? 'opacity-100' : 'opacity-0'
              }`}
            />
          </div>

          {/* Right Column - Body Text */}
          <div className="lg:col-span-3 space-y-6">
            {siteContent.about.paragraphs.map((paragraph, index) => (
              <p
                key={index}
                className={`text-base md:text-lg text-text leading-relaxed transition-all duration-800 ${
                  isVisible
                    ? 'opacity-100 translate-y-0'
                    : 'opacity-0 translate-y-10'
                }`}
                style={{ transitionDelay: `${0.1 + index * 0.1}s` }}
              >
                {paragraph}
              </p>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
