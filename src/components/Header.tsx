import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { siteContent } from '../lib/siteContent';

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 60);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
      setIsMobileMenuOpen(false);
    }
  };

  const handleReserve = () => {
    const whatsappUrl = `https://wa.me/${siteContent.visit.reservation.whatsappNumber.replace(/\s+/g, '')}?text=${encodeURIComponent(siteContent.visit.reservation.whatsappMessage)}`;
    window.open(whatsappUrl, '_blank');
  };

  return (
    <>
      <header
        className={`sticky top-0 z-50 transition-all duration-300 ${
          isScrolled
            ? 'bg-background/95 backdrop-blur-xl shadow-[0_1px_20px_rgba(0,0,0,0.04)]'
            : 'bg-transparent'
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 md:px-12 h-20 md:h-24 flex items-center justify-between">
          {/* Logo */}
          <button
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className="font-heading text-2xl md:text-3xl font-semibold text-primary hover:text-accent transition-colors duration-200"
          >
            {siteContent.nav.brand}
          </button>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            {siteContent.nav.links.map((link) => (
              <button
                key={link.href}
                onClick={() => scrollToSection(link.href)}
                className="text-sm uppercase tracking-wider text-text-muted hover:text-accent transition-colors duration-200"
              >
                {link.label}
              </button>
            ))}
          </nav>

          {/* CTA Button */}
          <button
            onClick={handleReserve}
            className="hidden md:block bg-accent text-white px-6 py-2.5 rounded-full text-sm font-medium hover:bg-secondary hover:scale-[1.02] transition-all duration-200"
          >
            {siteContent.nav.cta}
          </button>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(true)}
            className="md:hidden p-2 text-primary"
            aria-label="Open menu"
          >
            <Menu size={24} />
          </button>
        </div>
      </header>

      {/* Mobile Menu Overlay */}
      {isMobileMenuOpen && (
        <div className="fixed inset-0 bg-background z-[100] flex flex-col items-center justify-center">
          <button
            onClick={() => setIsMobileMenuOpen(false)}
            className="absolute top-6 right-6 p-2 text-primary"
            aria-label="Close menu"
          >
            <X size={28} />
          </button>

          <nav className="flex flex-col items-center gap-8">
            {siteContent.nav.links.map((link, index) => (
              <button
                key={link.href}
                onClick={() => scrollToSection(link.href)}
                className="text-3xl font-heading text-primary hover:text-accent transition-colors duration-200"
                style={{
                  animation: `fadeInUp 0.5s ease-out ${index * 0.08}s forwards`,
                  opacity: 0,
                }}
              >
                {link.label}
              </button>
            ))}
            <button
              onClick={handleReserve}
              className="bg-accent text-white px-8 py-3 rounded-full text-lg font-medium hover:bg-secondary transition-all duration-200 mt-4"
              style={{
                animation: `fadeInUp 0.5s ease-out ${siteContent.nav.links.length * 0.08}s forwards`,
                opacity: 0,
              }}
            >
              {siteContent.nav.cta}
            </button>
          </nav>
        </div>
      )}
    </>
  );
}
