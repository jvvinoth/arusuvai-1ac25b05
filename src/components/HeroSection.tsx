import { useEffect, useRef } from 'react';
import { siteContent } from '../lib/siteContent';

export default function HeroSection() {
  const imageRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (imageRef.current) {
        const scrolled = window.scrollY;
        imageRef.current.style.transform = `translateY(${scrolled * 0.3}px)`;
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToMenu = () => {
    const menuSection = document.querySelector('#menu');
    if (menuSection) {
      menuSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <section className="min-h-screen bg-background flex items-center relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 md:px-12 w-full py-20">
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 lg:gap-16 items-center">
          {/* Left Column - Content */}
          <div className="lg:col-span-3 space-y-8 hero-content">
            {/* Badge */}
            <div
              className="inline-block bg-surface text-secondary text-xs uppercase tracking-widest px-4 py-1.5 rounded-full"
              style={{
                animation: 'fadeInUp 0.8s ease-out 0.3s forwards',
                opacity: 0,
              }}
            >
              {siteContent.hero.badge}
            </div>

            {/* Headline */}
            <h1
              className="font-heading text-5xl md:text-6xl lg:text-8xl font-semibold text-primary leading-[0.95] tracking-tight"
              style={{
                animation: 'fadeInUp 0.8s ease-out 0.4s forwards',
                opacity: 0,
              }}
            >
              {siteContent.hero.headline}
            </h1>

            {/* Subtext */}
            <p
              className="text-lg md:text-xl text-text-muted max-w-xl leading-relaxed"
              style={{
                animation: 'fadeInUp 0.8s ease-out 0.6s forwards',
                opacity: 0,
              }}
            >
              {siteContent.hero.subtext}
            </p>

            {/* CTA Button */}
            <div
              style={{
                animation: 'fadeInUp 0.8s ease-out 0.8s forwards',
                opacity: 0,
              }}
            >
              <button
                onClick={scrollToMenu}
                className="bg-accent text-white px-8 py-4 text-base font-medium rounded-full hover:bg-secondary hover:scale-[1.02] hover:shadow-lg transition-all duration-300"
              >
                {siteContent.hero.cta}
              </button>
            </div>
          </div>

          {/* Right Column - Hero Image */}
          <div
            className="lg:col-span-2 relative"
            style={{
              animation: 'fadeInScale 1s ease-out 0.4s forwards',
              opacity: 0,
            }}
          >
            <div ref={imageRef} className="transition-transform duration-100 ease-out">
              <div className="relative aspect-[4/5] rounded-3xl overflow-hidden shadow-[0_25px_60px_rgba(0,0,0,0.12)]">
                <img
                  src={siteContent.hero.image}
                  alt="Signature dish at Arusuvai"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
