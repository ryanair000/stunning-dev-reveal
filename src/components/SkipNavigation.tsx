
const SkipNavigation = () => {
  const skipLinks = [
    { href: "#main", text: "Skip to main content" },
    { href: "#about", text: "Skip to about section" },
    { href: "#skills", text: "Skip to skills section" },
    { href: "#projects", text: "Skip to projects section" },
    { href: "#contact", text: "Skip to contact section" }
  ];

  return (
    <div className="sr-only focus-within:not-sr-only">
      <div className="fixed top-0 left-0 w-full bg-background border-b border-border p-4 z-50 flex flex-wrap gap-2">
        {skipLinks.map((link) => (
          <a
            key={link.href}
            href={link.href}
            className="bg-primary text-primary-foreground px-4 py-2 rounded-md text-sm font-medium hover:bg-primary/90 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 transition-colors"
            onClick={(e) => {
              e.preventDefault();
              const element = document.querySelector(link.href);
              element?.scrollIntoView({ behavior: "smooth" });
              element?.focus();
            }}
          >
            {link.text}
          </a>
        ))}
      </div>
    </div>
  );
};

export default SkipNavigation;
