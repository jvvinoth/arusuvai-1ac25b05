import { useEffect, useRef, useState } from 'react';
import { MapPin, Clock, MessageCircle } from 'lucide-react';
import { siteContent } from '../lib/siteContent';

export default function VisitSection() {
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

  const handleReservation = () => {
    const whatsappUrl = `https://wa.me/${siteContent.visit.reservation.whatsappNumber.replace(/\s+/g, '')}?text=${encodeURIComponent(siteContent.visit.reservation.whatsappMessage)}`;
    window.open(whatsappUrl, '_blank');
  };

  return (
    <section
      id="visit"
      ref={sectionRef}
      className="bg-background py-24 md:py-32"
    >
      <div className="max-w-6xl mx-auto px-6 md:px-12">
        {/* Section Header */}
        <div className="text-center mb-16 md:mb-20">
          <p
            className={`text-sm uppercase tracking-widest text-secondary mb-4 transition-all duration-800 ${
              isVisible
                ? 'opacity-100 translate-y-0'
                : 'opacity-0 translate-y-10'
            }`}
          >
            {siteContent.visit.label}
          </p>
          <h2
            className={`font-heading text-4xl md:text-5xl lg:text-6xl font-semibold text-primary max-w-3xl mx-auto leading-tight tracking-tight transition-all duration-800 delay-100 ${
              isVisible
                ? 'opacity-100 translate-y-0'
                : 'opacity-0 translate-y-10'
            }`}
          >
            {siteContent.visit.heading}
          </h2>
        </div>

        {/* Info Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12 mb-16">
          {/* Location */}
          <div
            className={`transition-all duration-800 delay-200 ${
              isVisible
                ? 'opacity-100 translate-y-0'
                : 'opacity-0 translate-y-10'
            }`}
          >
            <div className="flex items-start gap-4">
              <div className="p-3 bg-surface rounded-2xl">
                <MapPin className="text-accent" size={24} />
              </div>
              <div>
                <h3 className="font-heading text-xl font-semibold text-primary mb-2">
                  {siteContent.visit.location.title}
                </h3>
                <p className="text-base text-text-muted leading-relaxed">
                  {siteContent.visit.location.address}<br />
                  {siteContent.visit.location.city}<br />
                  {siteContent.visit.location.country}
                </p>
              </div>
            </div>
          </div>

          {/* Hours */}
          <div
            className={`transition-all duration-800 delay-300 ${
              isVisible
                ? 'opacity-100 translate-y-0'
                : 'opacity-0 translate-y-10'
            }`}
          >
            <div className="flex items-start gap-4">
              <div className="p-3 bg-surface rounded-2xl">
                <Clock className="text-accent" size={24} />
              </div>
              <div>
                <h3 className="font-heading text-xl font-semibold text-primary mb-2">
                  {siteContent.visit.hours.title}
                </h3>
                <div className="space-y-1.5">
                  {siteContent.visit.hours.schedule.map((item, index) => (
                    <div key={index} className="text-sm text-text-muted">
                      <span className="font-medium text-text">{item.days}</span>
                      <br />
                      {item.time}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Reservations */}
          <div
            className={`transition-all duration-800 delay-400 ${
              isVisible
                ? 'opacity-100 translate-y-0'
                : 'opacity-0 translate-y-10'
            }`}
          >
            <div className="flex items-start gap-4">
              <div className="p-3 bg-surface rounded-2xl">
                <MessageCircle className="text-accent" size={24} />
              </div>
              <div>
                <h3 className="font-heading text-xl font-semibold text-primary mb-2">
                  {siteContent.visit.reservation.title}
                </h3>
                <p className="text-base text-text-muted leading-relaxed mb-4">
                  {siteContent.visit.reservation.description}
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* CTA Button */}
        <div
          className={`text-center transition-all duration-800 delay-500 ${
            isVisible
              ? 'opacity-100 translate-y-0'
              : 'opacity-0 translate-y-10'
          }`}
        >
          <button
            onClick={handleReservation}
            className="inline-flex items-center gap-3 bg-accent text-white px-8 py-4 text-base font-medium rounded-full hover:bg-secondary hover:scale-[1.02] hover:shadow-lg transition-all duration-300"
          >
            <MessageCircle size={20} />
            {siteContent.visit.reservation.cta}
          </button>
        </div>
      </div>
    </section>
  );
}
