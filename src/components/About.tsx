
import { Code, Coffee, Heart } from "lucide-react";

const About = () => {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            About Me
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-600 mx-auto rounded-full"></div>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="animate-fade-in" style={{ animationDelay: "200ms" }}>
            <div className="bg-gradient-to-br from-gray-50 to-blue-50 rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                Passionate Full-Stack Developer
              </h3>
              <p className="text-gray-600 leading-relaxed mb-6">
                With over 5 years of experience in web development, I specialize in creating 
                scalable applications using modern technologies. I'm passionate about writing 
                clean, efficient code and staying up-to-date with the latest industry trends.
              </p>
              <p className="text-gray-600 leading-relaxed mb-6">
                When I'm not coding, you'll find me exploring new technologies, contributing 
                to open source projects, or sharing knowledge with the developer community.
              </p>
              
              <div className="flex items-center space-x-6 text-sm text-gray-500">
                <div className="flex items-center space-x-2">
                  <Code className="text-blue-500" size={20} />
                  <span>Clean Code</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Coffee className="text-blue-500" size={20} />
                  <span>Coffee Lover</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Heart className="text-blue-500" size={20} />
                  <span>Problem Solver</span>
                </div>
              </div>
            </div>
          </div>

          <div className="animate-fade-in" style={{ animationDelay: "400ms" }}>
            <div className="grid grid-cols-2 gap-6">
              <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border border-gray-100">
                <div className="text-3xl font-bold text-blue-600 mb-2">50+</div>
                <div className="text-gray-600">Projects Completed</div>
              </div>
              
              <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border border-gray-100">
                <div className="text-3xl font-bold text-purple-600 mb-2">5+</div>
                <div className="text-gray-600">Years Experience</div>
              </div>
              
              <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border border-gray-100">
                <div className="text-3xl font-bold text-green-600 mb-2">30+</div>
                <div className="text-gray-600">Happy Clients</div>
              </div>
              
              <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border border-gray-100">
                <div className="text-3xl font-bold text-orange-600 mb-2">24/7</div>
                <div className="text-gray-600">Support</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
