
import { Badge } from "@/components/ui/badge";

const Skills = () => {
  const skillCategories = [
    {
      title: "Frontend",
      skills: ["React", "TypeScript", "Tailwind CSS", "Next.js", "Vue.js", "HTML5", "CSS3", "JavaScript"],
      color: "bg-blue-100 text-blue-800 border-blue-200"
    },
    {
      title: "Backend",
      skills: ["Node.js", "Python", "Express", "PostgreSQL", "MongoDB", "Redis", "GraphQL", "REST APIs"],
      color: "bg-green-100 text-green-800 border-green-200"
    },
    {
      title: "Tools & DevOps",
      skills: ["Git", "Docker", "AWS", "Vercel", "Webpack", "Jest", "Cypress", "GitHub Actions"],
      color: "bg-purple-100 text-purple-800 border-purple-200"
    },
    {
      title: "Design",
      skills: ["Figma", "Adobe XD", "UI/UX", "Responsive Design", "Accessibility", "Design Systems"],
      color: "bg-orange-100 text-orange-800 border-orange-200"
    }
  ];

  return (
    <section id="skills" className="py-20 bg-gradient-to-br from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Skills & Technologies
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-600 mx-auto rounded-full"></div>
          <p className="text-xl text-gray-600 mt-6 max-w-3xl mx-auto">
            Here are the technologies and tools I use to bring ideas to life
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {skillCategories.map((category, index) => (
            <div 
              key={category.title}
              className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 animate-fade-in"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <h3 className="text-xl font-bold text-gray-900 mb-4 text-center">
                {category.title}
              </h3>
              
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill) => (
                  <Badge 
                    key={skill}
                    variant="secondary"
                    className={`${category.color} hover:scale-105 transition-transform duration-200 cursor-default`}
                  >
                    {skill}
                  </Badge>
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
