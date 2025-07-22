import { useState } from "react";
import { format } from "date-fns";
import { CalendarIcon, Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Label } from "@/components/ui/label";
import { Checkbox } from "@/components/ui/checkbox";
import { Calendar } from "@/components/ui/calendar";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import ScrollProgress from "@/components/ScrollProgress";

const QuoteForm = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [company, setCompany] = useState("");
  const [projectType, setProjectType] = useState("");
  const [budget, setBudget] = useState("");
  const [timeline, setTimeline] = useState("");
  const [date, setDate] = useState<Date | undefined>(undefined);
  const [message, setMessage] = useState("");
  const [services, setServices] = useState<string[]>([]);
  const [submitted, setSubmitted] = useState(false);

  const handleServiceToggle = (value: string) => {
    setServices(
      services.includes(value)
        ? services.filter(item => item !== value)
        : [...services, value]
    );
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real app, you would send this data to your backend
    console.log({
      name,
      email,
      phone,
      company,
      projectType,
      budget,
      timeline,
      date,
      services,
      message
    });
    
    // Show success message
    setSubmitted(true);
    
    // Reset form after 5 seconds
    setTimeout(() => {
      setName("");
      setEmail("");
      setPhone("");
      setCompany("");
      setProjectType("");
      setBudget("");
      setTimeline("");
      setDate(undefined);
      setServices([]);
      setMessage("");
      setSubmitted(false);
    }, 5000);
  };

  return (
    <div className="min-h-screen bg-background flex flex-col">
      <ScrollProgress />
      <Navigation />
      
      <main className="flex-grow pt-28 pb-16">
        <div className="max-w-4xl mx-auto px-6 sm:px-8 lg:px-12">
          <div className="text-center mb-12">
            <h1 className="text-4xl lg:text-5xl font-bold text-foreground mb-6">Get a Free Quote</h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Tell me about your project and I'll provide a detailed quote tailored to your specific needs.
            </p>
          </div>
          
          {submitted ? (
            <div className="bg-primary/10 border border-primary/30 rounded-lg p-8 text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/20 mb-6">
                <Check className="h-8 w-8 text-primary" />
              </div>
              <h2 className="text-2xl font-bold text-foreground mb-4">Quote Request Received!</h2>
              <p className="text-muted-foreground mb-6">
                Thank you for submitting your project details. I'll review your requirements and get back to you within 24-48 hours with a personalized quote.
              </p>
              <Button onClick={() => setSubmitted(false)}>Submit Another Request</Button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-8 bg-card rounded-xl p-8 border border-border/50 shadow-sm">
              <div className="grid md:grid-cols-2 gap-6">
                {/* Personal Information */}
                <div className="space-y-4">
                  <div>
                    <Label htmlFor="name">Full Name *</Label>
                    <Input 
                      id="name" 
                      value={name} 
                      onChange={(e) => setName(e.target.value)} 
                      placeholder="Your name"
                      required
                    />
                  </div>
                  
                  <div>
                    <Label htmlFor="email">Email Address *</Label>
                    <Input 
                      id="email" 
                      type="email"
                      value={email} 
                      onChange={(e) => setEmail(e.target.value)} 
                      placeholder="your.email@example.com"
                      required
                    />
                  </div>
                  
                  <div>
                    <Label htmlFor="phone">Phone Number</Label>
                    <Input 
                      id="phone" 
                      type="tel"
                      value={phone} 
                      onChange={(e) => setPhone(e.target.value)} 
                      placeholder="(123) 456-7890"
                    />
                  </div>
                  
                  <div>
                    <Label htmlFor="company">Company/Organization</Label>
                    <Input 
                      id="company" 
                      value={company} 
                      onChange={(e) => setCompany(e.target.value)} 
                      placeholder="Your company name"
                    />
                  </div>
                </div>
                
                {/* Project Information */}
                <div className="space-y-4">
                  <div>
                    <Label htmlFor="project-type">Project Type *</Label>
                    <Select value={projectType} onValueChange={setProjectType} required>
                      <SelectTrigger id="project-type">
                        <SelectValue placeholder="Select project type" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="website">Website Development</SelectItem>
                        <SelectItem value="web-app">Web Application</SelectItem>
                        <SelectItem value="e-commerce">E-commerce Store</SelectItem>
                        <SelectItem value="mobile-app">Mobile Application</SelectItem>
                        <SelectItem value="enterprise">Enterprise Solution</SelectItem>
                        <SelectItem value="other">Other</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  
                  <div>
                    <Label htmlFor="budget">Estimated Budget *</Label>
                    <Select value={budget} onValueChange={setBudget} required>
                      <SelectTrigger id="budget">
                        <SelectValue placeholder="Select budget range" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="under-1000">Under $1,000</SelectItem>
                        <SelectItem value="1000-3000">$1,000 - $3,000</SelectItem>
                        <SelectItem value="3000-5000">$3,000 - $5,000</SelectItem>
                        <SelectItem value="5000-10000">$5,000 - $10,000</SelectItem>
                        <SelectItem value="10000-plus">$10,000+</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  
                  <div>
                    <Label htmlFor="timeline">Project Timeline *</Label>
                    <Select value={timeline} onValueChange={setTimeline} required>
                      <SelectTrigger id="timeline">
                        <SelectValue placeholder="Select timeline" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="asap">As soon as possible</SelectItem>
                        <SelectItem value="1-month">Within 1 month</SelectItem>
                        <SelectItem value="1-3-months">1-3 months</SelectItem>
                        <SelectItem value="3-6-months">3-6 months</SelectItem>
                        <SelectItem value="flexible">Flexible</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  
                  <div>
                    <Label htmlFor="date">Desired Start Date</Label>
                    <Popover>
                      <PopoverTrigger asChild>
                        <Button
                          variant="outline"
                          className="w-full justify-start text-left font-normal"
                          id="date"
                        >
                          <CalendarIcon className="mr-2 h-4 w-4" />
                          {date ? format(date, "PPP") : <span>Pick a date</span>}
                        </Button>
                      </PopoverTrigger>
                      <PopoverContent className="w-auto p-0">
                        <Calendar
                          mode="single"
                          selected={date}
                          onSelect={setDate}
                          initialFocus
                        />
                      </PopoverContent>
                    </Popover>
                  </div>
                </div>
              </div>
              
              {/* Services Needed */}
              <div>
                <Label className="block mb-3">Services Needed</Label>
                <div className="grid sm:grid-cols-2 gap-3">
                  {[
                    { id: "design", label: "UI/UX Design" },
                    { id: "frontend", label: "Frontend Development" },
                    { id: "backend", label: "Backend Development" },
                    { id: "database", label: "Database Design" },
                    { id: "cms", label: "Content Management" },
                    { id: "ecommerce", label: "E-commerce Integration" },
                    { id: "seo", label: "SEO Optimization" },
                    { id: "maintenance", label: "Maintenance & Support" }
                  ].map((service) => (
                    <div key={service.id} className="flex items-center space-x-2">
                      <Checkbox 
                        id={service.id}
                        checked={services.includes(service.id)}
                        onCheckedChange={() => handleServiceToggle(service.id)}
                      />
                      <Label htmlFor={service.id} className="cursor-pointer">{service.label}</Label>
                    </div>
                  ))}
                </div>
              </div>
              
              {/* Project Details */}
              <div>
                <Label htmlFor="message">Project Details *</Label>
                <Textarea
                  id="message"
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  placeholder="Please describe your project, goals, and any specific requirements..."
                  className="min-h-[150px]"
                  required
                />
              </div>
              
              <div className="pt-4">
                <Button type="submit" size="lg" className="w-full sm:w-auto">
                  Submit Quote Request
                </Button>
              </div>
            </form>
          )}
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default QuoteForm; 