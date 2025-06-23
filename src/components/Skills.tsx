
const Skills = () => {
  const skills = [
    "React", "TypeScript", "Next.js", "Node.js", 
    "PostgreSQL", "MongoDB", "AWS", "Docker"
  ];

  return (
    <section id="skills" className="py-32 bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center animate-fade-in">
          <h2 className="text-4xl font-light text-gray-900 mb-16">
            Skills
          </h2>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {skills.map((skill, index) => (
              <div 
                key={skill}
                className="text-gray-600 font-light text-lg animate-fade-in"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                {skill}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
