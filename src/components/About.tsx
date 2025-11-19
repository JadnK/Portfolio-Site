import { Code2, Briefcase, GraduationCap } from 'lucide-react';

export default function About() {
  return (
    <section
      id="about"
      className="py-24 px-6 relative overflow-hidden bg-gradient-to-b from-gray-900 to-gray-800"
    >
      {/* Subtle background glow */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-20 right-20 w-72 h-72 rounded-full bg-purple-600/20 blur-[140px]" />
        <div className="absolute bottom-10 left-10 w-96 h-96 rounded-full bg-fuchsia-600/10 blur-[180px]" />
      </div>

      <div className="relative container mx-auto max-w-6xl">
        <h2 className="text-4xl md:text-5xl font-bold mb-16 text-center bg-gradient-to-r from-purple-400 to-purple-600 bg-clip-text text-transparent drop-shadow-lg">
          Über mich
        </h2>

        <div className="grid md:grid-cols-2 gap-16 items-center">

          {/* PROFILE IMAGE */}
          <div className="relative group">
            <div className="aspect-square rounded-3xl overflow-hidden border border-purple-500/30 shadow-xl shadow-purple-900/20 transform transition-all duration-500 group-hover:scale-[1.03] group-hover:shadow-2xl group-hover:shadow-purple-700/30">
              <img
                src="../data/images/Jaden_Kasche.png"
                alt="Jaden Kasche"
                className="w-full h-full object-cover opacity-[0.88] group-hover:opacity-100 transition-opacity duration-500"
              />
            </div>

            {/* Glow behind image */}
            <div className="absolute -bottom-6 -right-6 w-40 h-40 bg-purple-600/30 rounded-full blur-3xl pointer-events-none" />
          </div>

          {/* TEXT */}
          <div className="space-y-6 text-gray-300 leading-relaxed">
            <p className="text-lg">
              Moin! Ich bin Jaden, 18 Jahre alt und im dritten Lehrjahr meiner Ausbildung zum
              Anwendungsentwickler beim SWR. Wenn ich nicht gerade Code schreibe, tüftle ich an
              neuen Projekten oder fahre ein wenig Motorrad.
            </p>

            <p className="text-lg">
              Ich liebe es, wenn aus einer Idee etwas entsteht, das Menschen
              wirklich nutzen wollen.
            </p>

            {/* INFO CARDS */}
            <div className="space-y-4 pt-4">

              {/* Card */}
              <div className="flex items-start gap-4 p-5 bg-white/5 backdrop-blur-xl rounded-xl border border-white/10 shadow-md shadow-black/20 hover:shadow-purple-700/20 transition-all duration-300">
                <GraduationCap className="text-purple-400 mt-1 flex-shrink-0" size={26} />
                <div>
                  <h3 className="font-semibold text-white mb-1">Beruf</h3>
                  <p className="text-gray-400">Ausbildung Anwendungsentwickler, 3. Lehrjahr</p>
                </div>
              </div>

              {/* Card */}
              <div className="flex items-start gap-4 p-5 bg-white/5 backdrop-blur-xl rounded-xl border border-white/10 shadow-md shadow-black/20 hover:shadow-purple-700/20 transition-all duration-300">
                <Briefcase className="text-purple-400 mt-1 flex-shrink-0" size={26} />
                <div>
                  <h3 className="font-semibold text-white mb-1">Betrieb</h3>
                  <p className="text-gray-400">Südwestrundfunk (SWR)</p>
                </div>
              </div>

              {/* Card */}
              <div className="flex items-start gap-4 p-5 bg-white/5 backdrop-blur-xl rounded-xl border border-white/10 shadow-md shadow-black/20 hover:shadow-purple-700/20 transition-all duration-300">
                <Code2 className="text-purple-400 mt-1 flex-shrink-0" size={26} />
                <div>
                  <h3 className="font-semibold text-white mb-1">Focus</h3>
                  <p className="text-gray-400">Full-Stack Development</p>
                </div>
              </div>

            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
