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
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: "smooth" });
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
          {["home", "careers", "services", "internships", "verify", "contact"].map((item) => (
            <li key={item}>
              <button
                onClick={() => scrollToSection(item)}
                className="text-foreground/80 hover:text-primary font-medium text-[0.95rem] relative group transition-colors"
              >
                {item === "home" ? "Home" : 
                 item === "careers" ? "Careers" :
                 item === "services" ? "Services" :
                 item === "internships" ? "Internships" :
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
