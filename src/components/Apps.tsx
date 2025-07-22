import React from "react";
import { apps } from "@/data/apps";

const Apps = () => {
  return (
    <section id="apps" className="py-20 lg:py-32 bg-background">
      <div className="max-w-6xl mx-auto px-6 sm:px-8 lg:px-12">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl lg:text-5xl font-bold text-foreground mb-6">
            Apps I'm Proficient In
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Tools and applications I use to boost productivity and creativity
          </p>
        </div>
        {/* Apps Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6 max-w-5xl mx-auto">
          {apps.map((app, idx) => (
            <div
              key={app.name}
              className="group relative bg-card/50 backdrop-blur-sm border border-border/50 rounded-2xl p-6 hover:bg-card/80 hover:border-border hover:shadow-lg hover:shadow-primary/5 transition-all duration-300 hover:-translate-y-1"
              style={{
                animationDelay: `${idx * 100}ms`,
              }}
            >
              {/* App Icon */}
              <div className="flex items-center justify-center w-12 h-12 mx-auto mb-4 text-3xl group-hover:scale-110 transition-transform duration-300">
                {app.icon}
              </div>
              
              {/* App Name */}
              <h3 className="text-sm font-semibold text-foreground text-center mb-2 group-hover:text-primary transition-colors duration-300">
                {app.name}
              </h3>
              
              {/* App Description - Hidden by default, shown on hover */}
              <div className="absolute inset-x-0 bottom-full mb-2 opacity-0 group-hover:opacity-100 transition-all duration-300 pointer-events-none group-hover:pointer-events-auto z-10">
                <div className="bg-card border border-border rounded-lg p-3 shadow-lg mx-2">
                  <p className="text-xs text-muted-foreground leading-relaxed">
                    {app.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Apps;