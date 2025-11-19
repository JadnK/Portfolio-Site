export default function Skills() {
  const skillCategories = [
    {
      category: 'Frontend',
      skills: [
        { name: 'React', level: 20 },
        { name: 'TypeScript', level: 25 },
        { name: 'Tailwind CSS', level: 55 },
        { name: 'JavaScript', level: 75 },
        { name: 'HTML', level: 90 },
      ],
    },
    {
      category: 'Backend',
      skills: [
        { name: 'Node.js', level: 35 },
        { name: 'Python', level: 70 },
        { name: 'Java', level: 85 },
        { name: 'PHP', level: 40 },
        { name: 'REST APIs', level: 50 },
      ],
    },
    {
      category: 'Tools & More',
      skills: [
        { name: 'Git', level: 60 },
        { name: 'Docker', level: 45 },
        { name: 'Figma', level: 70 },
        { name: 'VS Code', level: 90 },
        { name: 'IntelijI', level: 95 },
      ],
    },
  ];

  return (
    <section id="skills" className="py-20 px-6 bg-gray-800/50">
      <div className="container mx-auto max-w-6xl">
        <h2 className="text-4xl md:text-5xl font-bold mb-4 text-center bg-gradient-to-r from-purple-400 to-purple-600 bg-clip-text text-transparent">
          Skills & Technologien
        </h2>
        <p className="text-center text-gray-400 mb-12 max-w-2xl mx-auto">
          Mein Tech-Stack wächst ständig. Hier sind die Tools und Technologien,
          mit denen ich am liebsten arbeite und die ich drauf habe.
        </p>

        <div className="grid md:grid-cols-3 gap-8">
          {skillCategories.map((category, index) => (
            <div
              key={index}
              className="bg-gray-900/50 rounded-xl p-6 border border-purple-500/20 hover:border-purple-500/40 transition-colors"
            >
              <h3 className="text-2xl font-bold text-purple-400 mb-6">
                {category.category}
              </h3>

              <div className="space-y-5">
                {category.skills.map((skill, skillIndex) => (
                  <div key={skillIndex}>
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-gray-300 font-medium">{skill.name}</span>
                      <span className="text-purple-400 text-sm">{skill.level}%</span>
                    </div>
                    <div className="h-2 bg-gray-800 rounded-full overflow-hidden">
                      <div
                        className="h-full bg-gradient-to-r from-purple-500 to-purple-600 rounded-full transition-all duration-1000 ease-out"
                        style={{ width: `${skill.level}%` }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <p className="text-gray-400 mb-6">
            Und ich lerne ständig was Neues dazu. Aktuell beschäftige ich mich mit:
          </p>
          <div className="flex flex-wrap justify-center gap-3">
            {['TypeScript', 'C#', 'C++', 'Darts.js', 'Spring Boot'].map((learning, index) => (
              <span
                key={index}
                className="px-4 py-2 bg-purple-500/10 text-purple-400 rounded-lg border border-purple-500/30 font-medium"
              >
                {learning}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
