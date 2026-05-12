import { useState } from "react";
import { Button } from "../components/ui/button";
import { Menu, X, Heart } from "lucide-react";

interface HeaderProps {
  activeSection: string;
  setActiveSection: (section: string) => void;
}

export default function Header({ activeSection, setActiveSection }: HeaderProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navItems = [
    { label: "Home", id: "home" },
    { label: "Services", id: "services" },
    { label: "About", id: "about" },
    { label: "Testimonials", id: "testimonials" },
    { label: "Contact", id: "contact" },
  ];

  const scrollToSection = (id: string) => {
    setActiveSection(id);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
    setIsMenuOpen(false);
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm border-b border-amber-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-amber-500 rounded-full flex items-center justify-center">
              <Heart className="w-5 h-5 text-white" fill="white" />
            </div>
            <div>
              <h1 className="text-lg font-semibold text-slate-800 tracking-tight">
                Marital Bliss
              </h1>
              <p className="text-xs text-amber-600 font-medium tracking-widest uppercase">
                Academy
              </p>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className={`text-sm font-medium transition-colors duration-200 ${
                  activeSection === item.id
                    ? "text-amber-600"
                    : "text-slate-600 hover:text-amber-500"
                }`}
              >
                {item.label}
              </button>
            ))}
          </nav>

          {/* CTA Button */}
          <div className="hidden md:block">
            <Button
              onClick={() => scrollToSection("contact")}
              className="bg-amber-500 hover:bg-amber-600 text-white px-6 py-2.5 rounded-full text-sm font-medium transition-all duration-200 shadow-sm hover:shadow-md"
            >
              Book a Session
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-2 text-slate-600 hover:text-amber-500 transition-colors"
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-amber-100 bg-white">
            <nav className="flex flex-col gap-3">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className={`text-left px-4 py-2 text-sm font-medium transition-colors ${
                    activeSection === item.id
                      ? "text-amber-600 bg-amber-50"
                      : "text-slate-600 hover:bg-stone-50"
                  }`}
                >
                  {item.label}
                </button>
              ))}
              <div className="px-4 pt-2">
                <Button
                  onClick={() => scrollToSection("contact")}
                  className="w-full bg-amber-500 hover:bg-amber-600 text-white py-2.5 rounded-full text-sm font-medium"
                >
                  Book a Session
                </Button>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}