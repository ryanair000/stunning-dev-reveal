
const Contact = () => {
  return (
    <section id="contact" className="py-32 bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center animate-fade-in">
          <h2 className="text-4xl font-light text-gray-900 mb-16">
            Contact
          </h2>
          
          <div className="space-y-8">
            <div>
              <p className="text-lg text-gray-600 font-light mb-4">
                Let's work together
              </p>
              <a 
                href="mailto:hello@developer.com" 
                className="text-2xl text-gray-900 font-light hover:text-gray-600 transition-colors duration-300"
              >
                hello@developer.com
              </a>
            </div>
            
            <div className="flex justify-center space-x-8 pt-8">
              <a 
                href="https://github.com" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="text-gray-400 hover:text-gray-900 transition-colors duration-300 font-light"
              >
                GitHub
              </a>
              <a 
                href="https://linkedin.com" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="text-gray-400 hover:text-gray-900 transition-colors duration-300 font-light"
              >
                LinkedIn
              </a>
            </div>
          </div>
        </div>

        <div className="text-center mt-32 pt-16 border-t border-gray-200 animate-fade-in">
          <p className="text-gray-400 font-light text-sm">
            © 2024 John Developer
          </p>
        </div>
      </div>
    </section>
  );
};

export default Contact;
