import { ArrowDown } from 'lucide-react';

export default function Hero() {
  const scrollToAbout = () => {
    const element = document.getElementById('about');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center px-6 pt-20 overflow-hidden"
    >
      {/* Background glow */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[700px] bg-purple-600/20 blur-[180px]" />
        <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-fuchsia-600/10 blur-[160px]" />
      </div>

      <div className="relative container mx-auto text-center">

        {/* Main Name */}
        <h1 className="text-5xl md:text-7xl font-extrabold mb-6 bg-gradient-to-r from-purple-300 via-purple-500 to-purple-700 bg-clip-text text-transparent drop-shadow-lg animate-fadeIn">
          Jaden Kasche
        </h1>

        {/* Subtitle */}
        <p className="text-xl md:text-2xl text-gray-400 mb-10 max-w-3xl mx-auto leading-relaxed animate-fadeIn opacity-90">
          Hey! Ich bin Azubi beim SWR und in der IT tätig.
        </p>

        {/* Floating Badge */}
        <div className="inline-block mb-8 px-5 py-2 bg-purple-500/10 border border-purple-500/30 rounded-full backdrop-blur-md animate-[float_4s_ease-in-out_infinite]">
          <span className="text-purple-400 text-sm font-medium">
            Anwendungsentwickler im 3. Lehrjahr
          </span>
        </div>

        {/* Buttons */}
        <div className="flex flex-wrap gap-5 justify-center mb-16 animate-fadeIn">
          <button
            onClick={() =>
              document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })
            }
            className="px-8 py-3 rounded-lg font-medium text-white bg-purple-600 hover:bg-purple-700 transition-all
            hover:scale-[1.08] shadow-lg shadow-purple-800/30 hover:shadow-purple-500/40"
          >
            Projekte ansehen
          </button>

          <button
            onClick={() =>
              document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })
            }
            className="px-8 py-3 rounded-lg font-medium text-white bg-gray-900 border border-purple-500/30 hover:bg-gray-800 transition-all 
            hover:scale-[1.08] shadow-md hover:shadow-purple-600/20"
          >
            Mehr über mich
          </button>
        </div>
        
        {/* Scroll down arrow */}
        <button
          onClick={scrollToAbout}
          className="inline-flex items-center gap-2 text-purple-400 hover:text-purple-300 transition-colors animate-bounce opacity-80 hover:opacity-100"
          aria-label="Scroll to About"
        >
          <ArrowDown size={22} />
        </button>
      </div>
    </section>
  );
}
