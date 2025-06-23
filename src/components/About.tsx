
const About = () => {
  return (
    <section id="about" className="py-32 bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center animate-fade-in">
          <h2 className="text-4xl font-light text-gray-900 mb-16">
            About
          </h2>
          
          <div className="max-w-2xl mx-auto">
            <p className="text-lg text-gray-600 leading-relaxed mb-8 font-light">
              I create digital experiences through clean code and thoughtful design. 
              With 5+ years of experience, I specialize in React, TypeScript, and modern web technologies.
            </p>
            
            <p className="text-lg text-gray-600 leading-relaxed font-light">
              I believe in the power of simplicity and functionality working together to create meaningful solutions.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
