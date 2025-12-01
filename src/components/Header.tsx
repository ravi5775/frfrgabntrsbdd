import { useState, useEffect } from "react";

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    // Map 'programs' to 'services' section (Career-Focused Training Programs)
    const targetId = id === 'programs' ? 'services' : id;
    const element = document.getElementById(targetId);
    if (element) {
      const headerOffset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth"
      });
    }
  };

  return (
    <header
      className={`fixed w-full top-0 z-50 transition-all duration-300 ${
        isScrolled ? "bg-black/95 shadow-lg" : "bg-black/95"
      } backdrop-blur-lg border-b border-white/5`}
    >
      <nav className="max-w-7xl mx-auto px-8 py-5 flex justify-between items-center">
        <div className="text-2xl font-bold bg-gradient-primary bg-clip-text text-transparent">
          SKILLVANCE TECHNOLOGIES
        </div>
        <ul className="hidden md:flex gap-10 list-none">
          {["home", "programs", "verify", "contact"].map((item) => (
            <li key={item}>
              <button
                onClick={() => scrollToSection(item)}
                className="text-foreground/80 hover:text-primary font-medium text-[0.95rem] relative group transition-colors"
              >
                {item === "home" ? "Home" : 
                 item === "programs" ? "Careers & Internships" :
                 item === "verify" ? "Verify Certificate" :
                 "Contact Us"}
                <span className="absolute bottom-[-5px] left-0 w-0 h-[2px] bg-gradient-primary transition-all duration-300 group-hover:w-full" />
              </button>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
};

export default Header;
