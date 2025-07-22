
import { useState, useEffect } from "react";

const ScrollProgress = () => {
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
      const progress = (window.scrollY / totalHeight) * 100;
      setScrollProgress(Math.min(progress, 100));
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="fixed top-0 left-0 w-full h-1 bg-muted z-[100]" style={{ transform: 'translateZ(0)' }}>
      <div 
        className="h-full"
        style={{ 
          width: `${scrollProgress}%`,
          backgroundColor: 'black',
          transform: 'translateZ(0)',
          willChange: 'width'
        }}
      />
    </div>
  );
};

export default ScrollProgress;
