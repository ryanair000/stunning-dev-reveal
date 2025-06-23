
const Projects = () => {
  const projects = [
    {
      title: "E-Commerce Platform",
      description: "Full-stack solution with React and Node.js",
      year: "2024"
    },
    {
      title: "Task Management App",
      description: "Collaborative tool with real-time updates",
      year: "2023"
    },
    {
      title: "Weather Dashboard",
      description: "Location-based forecasts and analytics",
      year: "2023"
    }
  ];

  return (
    <section id="projects" className="py-32 bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl font-light text-gray-900 mb-16">
            Work
          </h2>
        </div>

        <div className="space-y-16">
          {projects.map((project, index) => (
            <div 
              key={project.title}
              className="border-b border-gray-100 pb-16 last:border-b-0 animate-fade-in"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="flex justify-between items-start mb-4">
                <h3 className="text-2xl font-light text-gray-900">
                  {project.title}
                </h3>
                <span className="text-gray-400 font-light">
                  {project.year}
                </span>
              </div>
              
              <p className="text-gray-600 font-light">
                {project.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
