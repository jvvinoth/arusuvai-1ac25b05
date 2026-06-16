import { Mail, Phone, Instagram, Facebook } from 'lucide-react';
import { siteContent } from '../lib/siteContent';

export default function Footer() {
  return (
    <footer className="bg-primary text-background py-16 md:py-20">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Brand */}
          <div className="lg:col-span-2">
            <h3 className="font-heading text-3xl md:text-4xl font-semibold mb-4">
              {siteContent.nav.brand}
            </h3>
            <p className="text-background/80 text-lg leading-relaxed max-w-md">
              {siteContent.footer.tagline}
            </p>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-sm uppercase tracking-widest text-background/60 mb-4">
              Contact
            </h4>
            <div className="space-y-3">
              <a
                href={`mailto:${siteContent.footer.contact.email}`}
                className="flex items-center gap-3 text-background/90 hover:text-accent transition-colors duration-200"
              >
                <Mail size={18} />
                <span className="text-sm">{siteContent.footer.contact.email}</span>
              </a>
              <a
                href={`tel:${siteContent.footer.contact.phone.replace(/\s+/g, '')}`}
                className="flex items-center gap-3 text-background/90 hover:text-accent transition-colors duration-200"
              >
                <Phone size={18} />
                <span className="text-sm">{siteContent.footer.contact.phone}</span>
              </a>
            </div>
          </div>

          {/* Social */}
          <div>
            <h4 className="text-sm uppercase tracking-widest text-background/60 mb-4">
              Follow Us
            </h4>
            <div className="space-y-3">
              {siteContent.footer.social.map((social, index) => (
                <a
                  key={index}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 text-background/90 hover:text-accent transition-colors duration-200"
                >
                  {social.platform === 'Instagram' && <Instagram size={18} />}
                  {social.platform === 'Facebook' && <Facebook size={18} />}
                  <span className="text-sm">{social.handle}</span>
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-background/20 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-sm text-background/70">
              {siteContent.footer.legal}
            </p>
            <div className="flex gap-6">
              {siteContent.nav.links.map((link) => (
                <button
                  key={link.href}
                  onClick={() => {
                    const element = document.querySelector(link.href);
                    if (element) {
                      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
                    }
                  }}
                  className="text-sm text-background/70 hover:text-accent transition-colors duration-200"
                >
                  {link.label}
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
