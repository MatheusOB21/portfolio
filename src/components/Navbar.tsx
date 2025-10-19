import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";

const menuItems = [
  { label: "Início", href: "#home" },
  { label: "Sobre", href: "#about" },
  { label: "Habilidades", href: "#skills" },
  { label: "Projetos", href: "#projects" },
  { label: "Contato", href: "#contact" }
];

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-smooth ${
      isScrolled ? "bg-background/80 backdrop-blur-lg shadow-card" : "bg-transparent"
    }`}>
      <div className="container max-w-6xl mx-auto px-4">
        <div className="flex items-center justify-center h-20">
          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-1">
            {menuItems.map((item) => (
              <Button
                key={item.href}
                variant="ghost"
                size="lg"
                className="text-lg"
                asChild
              >
                <a href={item.href}>{item.label}</a>
              </Button>
            ))}
          </div>
          
          {/* Mobile Menu Button */}
          <Button
            variant="ghost"
            size="icon"
            className="md:hidden"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X /> : <Menu />}
          </Button>
        </div>
        
        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden py-4 border-t border-border">
            <div className="flex flex-col gap-2">
              {menuItems.map((item) => (
                <Button
                  key={item.href}
                  variant="ghost"
                  asChild
                  onClick={() => setIsOpen(false)}
                >
                  <a href={item.href}>{item.label}</a>
                </Button>
              ))}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};
