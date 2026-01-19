import { Github } from 'lucide-react';

export default function Projects() {
  const projects = [
    {
      // github: null -> "Noch nicht verfügbar"
      title: 'Portfolio Website',
      description:
        'Meine persönliche Website mit modernem Design und smoothen Animationen. Gebaut mit React, TypeScript und Tailwind.',
      image:
        'https://images.pexels.com/photos/276452/pexels-photo-276452.jpeg?auto=compress&cs=tinysrgb&w=600',
      tags: ['React', 'TypeScript', 'Tailwind'],
      github: '#',
    },
    {
      title: 'Spring Cloud',
      description:
        'Eine selfhost Cloud welche für simples Datei Sharing etc. aufgebaut wurde.',
      image:
        '../data/images/PROJECT_SpringCloud.png',
      tags: ['Java', 'Spring Boot', 'Tailwind', 'Security', 'Cloud'],
      github: 'https://github.com/jadnk/SpringCloud',
    },
    {
      title: 'Twitch Views Botter',
      description:
        'Ermöglicht bei Twitch Streamern die Anzahl der Viewer zu steigern mithilfe von Proxys.',
      image:
        '../data/images/PROJECT_ViewsBotter.png',
      tags: ['Python', 'Selenium', 'Proxys', 'Console based'],
      github: 'https://github.com/jadnk/Twitch-Views-Botter',
    },
    {
      title: 'Pi Dashboard',
      description:
        'Ein Dashboard für den Rasberry Pi um die leistung zu tracken, Uptime usw.',
      image:
        '../data/images/PROJECT_PiDashboard.png',
      tags: ['Charts.js', 'Python', 'Flask'],
      github: 'https://github.com/jadnk/PiDash', 
    },
    {
      title: 'Berichtsheftmanager',
      description:
        'Verbessere deine Berichtshefte mithilfe von KI und organisiere diese',
      image:
        '../data/images/PROJECT_Berichte.png',
      tags: ['Berichtsheft', 'NextJS', 'KI'],
      github: 'https://github.com/JadnK/Berichtsheftmanager',
    },
    {
      title: 'o-Chat',
      description:
        'Open chat site build with React and Firebase for real-time messaging and user authentication.',
      image:
        'https://placehold.co/600x400?text=o-Chat',
      tags: ['React', 'Firebase', 'Chat', 'Real-time'],
      github: null,
    },
  ];

  return (
    <section id="projects" className="py-24 px-6">
      <div className="container mx-auto max-w-7xl">
        <h2 className="text-4xl md:text-5xl font-bold mb-4 text-center bg-gradient-to-r from-purple-400 to-purple-600 bg-clip-text text-transparent">
          Meine Projekte
        </h2>

        <p className="text-center text-gray-400 mb-14 max-w-2xl mx-auto">
          Eine Auswahl meiner bisherigen Arbeiten — mit Liebe zum Detail gebaut.
        </p>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
          {projects.map((project, index) => {
            const isUnavailable = !project.github || project.github === '';

            return (
              <div
                key={index}
                className="group bg-gray-900/40 backdrop-blur-xl rounded-xl overflow-hidden border border-purple-500/20 hover:border-purple-500/40 transition-all hover:shadow-2xl hover:shadow-purple-500/20 hover:scale-[1.03]"
              >
                {/* Image */}
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-gray-950 to-transparent opacity-70"></div>
                </div>

                {/* Content */}
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-white mb-2 group-hover:text-purple-400 transition-colors">
                    {project.title}
                  </h3>

                  <p className="text-gray-400 text-sm leading-relaxed mb-4">
                    {project.description}
                  </p>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.tags.map((tag, tagIndex) => (
                      <span
                        key={tagIndex}
                        className="px-3 py-1 text-xs bg-purple-500/10 text-purple-400 rounded-full border border-purple-500/30"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  {/* Buttons */}
                  <div className="flex gap-3">
                    {isUnavailable ? (
                      <div className="px-4 py-2 bg-gray-800 text-gray-500 border border-gray-700 rounded-lg text-sm font-medium w-full text-center cursor-not-allowed">
                        Noch nicht verfügbar
                      </div>
                    ) : (
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 px-4 py-2 bg-gray-900 hover:bg-gray-700 text-gray-300 rounded-lg text-sm font-medium transition-colors border border-purple-500/20"
                      >
                        <Github size={16} />
                        Code
                      </a>
                    )}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
