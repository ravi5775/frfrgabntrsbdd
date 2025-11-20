import { useState, useEffect } from 'react';
import { Facebook, Twitter, Linkedin, Instagram } from 'lucide-react';

interface SocialLink {
  enabled: boolean;
  url: string;
}

interface SocialLinks {
  facebook: SocialLink;
  twitter: SocialLink;
  linkedin: SocialLink;
  instagram: SocialLink;
}

const Footer = () => {
  const [socialLinks, setSocialLinks] = useState<SocialLinks>({
    facebook: { enabled: false, url: '' },
    twitter: { enabled: false, url: '' },
    linkedin: { enabled: false, url: '' },
    instagram: { enabled: false, url: '' },
  });

  useEffect(() => {
    const stored = localStorage.getItem('socialLinks');
    if (stored) {
      setSocialLinks(JSON.parse(stored));
    }
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: "smooth" });
  };

  const socialIcons = [
    { key: 'facebook' as const, icon: Facebook, label: 'Facebook' },
    { key: 'twitter' as const, icon: Twitter, label: 'Twitter' },
    { key: 'linkedin' as const, icon: Linkedin, label: 'LinkedIn' },
    { key: 'instagram' as const, icon: Instagram, label: 'Instagram' },
  ];

  const enabledSocials = socialIcons.filter(
    (social) => socialLinks[social.key].enabled && socialLinks[social.key].url
  );

  return (
    <footer className="bg-background border-t border-white/5 py-16">
      <div className="max-w-7xl mx-auto px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Brand Section */}
          <div>
            <div className="text-2xl font-bold bg-gradient-primary bg-clip-text text-transparent mb-4">
              SKILLVANCE TECHNOLOGIES
            </div>
            <p className="text-foreground/60 leading-relaxed mb-6">
              Advancing Skills, Building Futures. We empower students with corporate-style internships and hands-on skill development programs.
            </p>
            {enabledSocials.length > 0 && (
              <div>
                <h4 className="text-primary text-sm font-semibold mb-3">Follow Us</h4>
                <div className="flex gap-3">
                  {enabledSocials.map(({ key, icon: Icon, label }) => (
                    <a
                      key={key}
                      href={socialLinks[key].url}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={label}
                      className="w-10 h-10 bg-white/5 border border-white/10 rounded-full flex items-center justify-center text-white transition-all duration-300 hover:bg-gradient-primary hover:border-transparent hover:-translate-y-1"
                    >
                      <Icon size={18} />
                    </a>
                  ))}
                </div>
              </div>
            )}
          </div>

          {/* Our Expertise */}
          <div>
            <h3 className="text-primary text-xl mb-6 font-semibold">Our Expertise</h3>
            <ul className="space-y-3">
              {[
                { label: 'Skill Development', id: 'services' },
                { label: 'Corporate Training', id: 'services' },
                { label: 'Internship Programs', id: 'internships' },
                { label: 'Industry Mentorship', id: 'services' },
                { label: 'Project-Based Learning', id: 'services' },
                { label: 'Career Guidance', id: 'careers' },
              ].map((item) => (
                <li key={item.label}>
                  <button
                    onClick={() => scrollToSection(item.id)}
                    className="text-foreground/60 hover:text-primary transition-colors"
                  >
                    {item.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Services Offered */}
          <div>
            <h3 className="text-primary text-xl mb-6 font-semibold">Services Offered</h3>
            <ul className="space-y-3">
              {[
                'Machine Learning Engineer',
                'Data Scientist',
                'Data Analyst',
                'Web Developer',
                'Cybersecurity Engineer',
                'Blockchain Engineer',
              ].map((service) => (
                <li key={service}>
                  <button
                    onClick={() => scrollToSection('services')}
                    className="text-foreground/60 hover:text-primary transition-colors"
                  >
                    {service}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-primary text-xl mb-6 font-semibold">Quick Links</h3>
            <ul className="space-y-3">
              {[
                { label: 'Home', id: 'home' },
                { label: 'About Us', id: 'about' },
                { label: 'Careers', id: 'careers' },
                { label: 'Internships', id: 'internships' },
                { label: 'Verify Certificate', id: 'verify' },
                { label: 'Contact Us', id: 'contact' },
                { label: 'Enquire Now', id: 'contact' },
              ].map((link) => (
                <li key={link.label}>
                  <button
                    onClick={() => scrollToSection(link.id)}
                    className="text-foreground/60 hover:text-primary transition-colors"
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="pt-8 border-t border-white/5 text-center text-foreground/50">
          <p>&copy; 2025 Skillvance Technologies. All Rights Reserved. | Designed with 💙 for Future Leaders</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
