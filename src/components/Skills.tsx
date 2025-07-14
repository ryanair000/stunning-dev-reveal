
const Skills = () => {
  const skillCategories = [
    {
      title: "Frontend",
      skills: ["React", "TypeScript", "Next.js", "Tailwind CSS"],
      color: "from-blue-500/10 to-cyan-500/10"
    },
    {
      title: "Backend", 
      skills: ["Node.js", "PostgreSQL", "MongoDB", "Express"],
      color: "from-green-500/10 to-emerald-500/10"
    },
    {
      title: "Tools",
      skills: ["AWS", "Docker", "Git", "Figma"],
      color: "from-purple-500/10 to-pink-500/10"
    }
  ];

  return (
    <section id="skills" className="py-24 lg:py-32 bg-muted/30">
      <div className="max-w-6xl mx-auto px-6 sm:px-8 lg:px-12">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl lg:text-5xl font-bold text-foreground mb-6">
            Skills & Technologies
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Here are the technologies and tools I use to bring ideas to life
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8">
          {skillCategories.map((category, categoryIndex) => (
            <div 
              key={category.title}
              className="bg-background rounded-xl p-8 shadow-sm border border-border/50 hover:shadow-md transition-all duration-300 animate-fade-in"
              style={{ animationDelay: `${categoryIndex * 200}ms` }}
            >
              <div className={`w-12 h-12 rounded-lg bg-gradient-to-br ${category.color} flex items-center justify-center mb-6`}>
                <div className="w-6 h-6 bg-primary/20 rounded"></div>
              </div>
              
              <h3 className="text-xl font-semibold text-foreground mb-6">
                {category.title}
              </h3>
              
              <div className="space-y-3">
                {category.skills.map((skill, skillIndex) => (
                  <div 
                    key={skill}
                    className="flex items-center justify-between p-3 bg-muted/50 rounded-lg hover:bg-muted/70 transition-colors"
                    style={{ animationDelay: `${(categoryIndex * 200) + (skillIndex * 100)}ms` }}
                  >
                    <span className="text-foreground font-medium">{skill}</span>
                    <div className="w-2 h-2 bg-primary rounded-full"></div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
