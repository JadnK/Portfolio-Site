import { Menu, X } from 'lucide-react';
import { useState } from 'react';

interface HeaderProps {
  activeSection: string;
}

export default function Header({ activeSection }: HeaderProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setMobileMenuOpen(false);
    }
  };

  const navItems = [
    { id: 'home', label: 'Home' },
    { id: 'about', label: 'Über mich' },
    { id: 'projects', label: 'Projekte' },
    { id: 'skills', label: 'Skills' },
  ];

  return (
<header className="fixed top-0 left-0 right-0 z-[100] bg-gray-900/80 backdrop-blur-xl border-b border-purple-500/20 shadow-[0_0_20px_rgba(128,0,255,0.15)]">
  <nav className="container mx-auto px-6 py-4">
    <div className="flex items-center justify-between">

      {/* Logo */}
      <button
        onClick={() => scrollToSection('home')}
        className="text-2xl font-bold bg-gradient-to-r from-purple-400 to-fuchsia-500 bg-clip-text 
        text-transparent hover:scale-105 transition-all duration-300 drop-shadow-[0_0_10px_rgba(170,0,255,0.5)]"
      >
        JK
      </button>

      {/* Desktop Navigation */}
      <div className="hidden md:flex items-center gap-10">
        {navItems.map((item) => (
          <button
            key={item.id}
            onClick={() => scrollToSection(item.id)}
            className={`group relative text-sm font-medium transition-all duration-300 ${
              activeSection === item.id
                ? 'text-purple-400'
                : 'text-gray-300 hover:text-purple-300'
            }`}
          >
            {item.label}

            {/* Animated underline */}
            <span
              className={`absolute -bottom-1 left-0 w-full h-0.5 rounded-full bg-purple-500
              transform transition-all duration-300 origin-left
              ${activeSection === item.id ? 'scale-x-100' : 'scale-x-0 group-hover:scale-x-100'}`}
            />
          </button>
        ))}
      </div>

      {/* Mobile Button */}
      <button
        onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        className="md:hidden text-purple-400 hover:text-purple-300 transition-transform duration-300 hover:scale-110"
      >
        {mobileMenuOpen ? <X size={26} /> : <Menu size={26} />}
      </button>
    </div>

    {/* Mobile menu */}
    {mobileMenuOpen && (
      <div className="md:hidden mt-4 pb-4 space-y-3 animate-fadeIn">
        {navItems.map((item) => (
          <button
            key={item.id}
            onClick={() => scrollToSection(item.id)}
            className={`block w-full text-left px-4 py-3 rounded-lg backdrop-blur-lg transition-all duration-300 border border-purple-400/10
              ${
                activeSection === item.id
                  ? 'bg-purple-500/20 text-purple-300 shadow-[0_0_10px_rgba(170,0,255,0.3)]'
                  : 'text-gray-300 hover:bg-purple-500/10 hover:text-purple-200'
              }`}
          >
            {item.label}
          </button>
        ))}
      </div>
    )}
  </nav>
</header>

  );
}
