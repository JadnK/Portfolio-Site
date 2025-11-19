import { Github, Linkedin, Mail, Instagram } from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const socials = [
    { icon: Github, href: 'https://github.com/JadnK', label: 'GitHub' },
    { icon: Linkedin, href: 'https://www.linkedin.com/in/jaden-kasche-96ba54369/', label: 'LinkedIn' },
    { icon: Instagram, href: 'https://www.instagram.com/jaden._.701/', label: 'Instagram' },
  ];

  return (
    <footer className="relative bg-gray-950 border-t border-purple-500/20 py-16 px-6 overflow-hidden">
      {/* soft glow bg */}
      <div className="absolute inset-0 pointer-events-none opacity-30">
        <div className="absolute -top-10 left-20 w-72 h-72 bg-purple-600/30 blur-[120px]" />
        <div className="absolute bottom-0 right-20 w-96 h-96 bg-fuchsia-600/20 blur-[150px]" />
      </div>

      <div className="relative container mx-auto max-w-6xl">
        <div className="grid md:grid-cols-3 gap-12 mb-12">

          {/* Brand */}
          <div>
            <h3 className="text-2xl font-bold bg-gradient-to-r from-purple-400 to-purple-600 bg-clip-text text-transparent mb-4">
              Jaden Kasche
            </h3>
            <p className="text-gray-400 text-sm leading-relaxed max-w-xs">
              Anwendungsentwickler mit Leidenschaft für cleanen Code, modernes Design und spannende digitale Projekte.
            </p>
          </div>

          {/* Friends */}
          <div>
            <h4 className="text-white font-semibold mb-3">Freunde</h4>
            <div className="space-y-2">
              <a
                href="https://lekl7.de/"
                target="_blank"
                rel="noopener noreferrer"
                className="block text-gray-400 hover:text-purple-400 transition-colors text-sm"
              >
                Leon
              </a>
              <a
                href="https://jaunger.de/"
                target="_blank"
                rel="noopener noreferrer"
                className="block text-gray-400 hover:text-purple-400 transition-colors text-sm"
              >
                Jan
              </a>
            </div>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-white font-semibold mb-3">Kontakt</h4>

            <a
              href="mailto:info@jadenk.de"
              className="flex items-center gap-2 text-gray-400 hover:text-purple-400 transition-colors mb-5 text-sm"
            >
              <Mail size={17} className="opacity-80" />
              info@jadenk.de
            </a>

            {/* social icons */}
            <div className="flex gap-4">
              {socials.map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.label}
                  className="w-11 h-11 flex items-center justify-center 
                  bg-gray-900/60 backdrop-blur-xl rounded-lg border border-purple-500/20 
                  text-gray-400 transition-all duration-300 hover:text-white 
                  hover:border-purple-400 hover:bg-purple-600/30 hover:scale-110 shadow-sm"
                >
                  <social.icon size={18} />
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom line */}
        <div className="pt-8 border-t border-purple-500/20 text-center">
          <p className="text-gray-500 text-sm">
            © {currentYear} Jaden Kasche
          </p>
        </div>
      </div>
    </footer>
  );
}
