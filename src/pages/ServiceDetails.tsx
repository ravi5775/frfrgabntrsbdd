import { useParams, useNavigate, Link } from "react-router-dom";
import { servicesData } from "@/data/servicesData";
import { Button } from "@/components/ui/button";
import { ArrowLeft, ExternalLink, Clock, BookOpen, Briefcase, MapPin, Users } from "lucide-react";
import { useState, useEffect } from "react";

interface Internship {
  id: string;
  title: string;
  category: string;
  description: string;
  duration: string;
  totalSeats: number;
  availableSeats: number;
  skills: string[];
  googleFormLink: string;
  active: boolean;
  createdAt: string;
}

const ServiceDetails = () => {
  const { serviceId } = useParams();
  const navigate = useNavigate();
  const [internships, setInternships] = useState<Internship[]>([]);
  
  const service = servicesData.find(s => s.id === serviceId);

  useEffect(() => {
    // Load internships from localStorage
    const stored = localStorage.getItem('internships');
    if (stored) {
      const allInternships: Internship[] = JSON.parse(stored);
      // Filter internships for this service category
      const categoryInternships = allInternships.filter(
        (internship) => internship.category === serviceId && internship.active
      );
      setInternships(categoryInternships);
    }
  }, [serviceId]);

  if (!service) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-white mb-4">Service Not Found</h1>
          <Link to="/">
            <Button>Go Back Home</Button>
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-lg border-b border-white/5">
        <div className="max-w-7xl mx-auto px-8 py-4">
          <Button 
            variant="ghost" 
            onClick={() => navigate("/")}
            className="text-white hover:text-primary"
          >
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to Home
          </Button>
        </div>
      </header>

      {/* Hero Section */}
      <section className="pt-32 pb-16 px-8">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center gap-6 mb-8">
            <div className="w-24 h-24 bg-gradient-primary rounded-2xl flex items-center justify-center text-5xl shadow-glow">
              {service.icon}
            </div>
            <div>
              <h1 className="text-5xl font-bold text-white mb-4">{service.title}</h1>
              <p className="text-xl text-muted-foreground max-w-3xl">{service.fullDescription}</p>
            </div>
          </div>

          <div className="flex gap-6 mt-8">
            <div className="flex items-center gap-2 text-foreground/80">
              <Clock className="h-5 w-5 text-primary" />
              <span>Duration: {service.duration}</span>
            </div>
            <div className="flex items-center gap-2 text-foreground/80">
              <BookOpen className="h-5 w-5 text-primary" />
              <span>{service.curriculum.length} Modules</span>
            </div>
            <div className="flex items-center gap-2 text-foreground/80">
              <Briefcase className="h-5 w-5 text-primary" />
              <span>{service.careerPaths.length} Career Paths</span>
            </div>
          </div>
        </div>
      </section>

      {/* Content Sections */}
      <section className="py-16 px-8">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Skills You'll Learn */}
          <div className="bg-card rounded-2xl p-10 border border-white/5">
            <h2 className="text-3xl font-bold text-white mb-6">Skills You'll Learn</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {service.skills.map((skill, index) => (
                <div key={index} className="flex items-center gap-3 text-foreground/80">
                  <div className="w-2 h-2 bg-gradient-primary rounded-full" />
                  <span>{skill}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Career Paths */}
          <div className="bg-card rounded-2xl p-10 border border-white/5">
            <h2 className="text-3xl font-bold text-white mb-6">Career Paths</h2>
            <div className="space-y-4">
              {service.careerPaths.map((career, index) => (
                <div key={index} className="flex items-center gap-3 text-foreground/80">
                  <div className="w-8 h-8 bg-primary/10 rounded-lg flex items-center justify-center text-primary font-semibold text-sm">
                    {index + 1}
                  </div>
                  <span>{career}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Curriculum */}
      <section className="py-16 px-8 bg-background/50">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-white mb-8 text-center">Course Curriculum</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {service.curriculum.map((module, index) => (
              <div key={index} className="bg-card rounded-xl p-6 border border-white/5 hover:border-primary/30 transition-all duration-300">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-gradient-primary rounded-lg flex items-center justify-center text-white font-bold shrink-0">
                    {index + 1}
                  </div>
                  <p className="text-foreground/80 leading-relaxed">{module}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Available Internships */}
      {internships.length > 0 && (
        <section id="internships-section" className="py-16 px-8 bg-background/50">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-4xl font-bold text-white mb-8 text-center">Available Internships</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {internships.map((internship) => (
                <div key={internship.id} className="bg-card rounded-2xl p-8 border border-white/5 hover:border-primary/30 transition-all duration-300 hover:-translate-y-2 hover:shadow-glow">
                  <h3 className="text-2xl font-semibold text-white mb-3">{internship.title}</h3>
                  <p className="text-foreground/60 mb-6 leading-relaxed">{internship.description}</p>
                  
                  <div className="space-y-3 mb-6">
                    <div className="flex items-center gap-2 text-sm text-foreground/80">
                      <Clock className="h-4 w-4 text-primary" />
                      <span>{internship.duration}</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm text-foreground/80">
                      <Users className="h-4 w-4 text-primary" />
                      <span>{internship.availableSeats} of {internship.totalSeats} seats available</span>
                    </div>
                  </div>

                  {internship.skills.length > 0 && (
                    <div className="mb-6">
                      <p className="text-sm text-muted-foreground mb-2">Skills Required:</p>
                      <div className="flex flex-wrap gap-2">
                        {internship.skills.slice(0, 4).map((skill, idx) => (
                          <span key={idx} className="bg-primary/10 text-primary px-3 py-1 rounded-full text-xs">
                            {skill}
                          </span>
                        ))}
                        {internship.skills.length > 4 && (
                          <span className="bg-primary/10 text-primary px-3 py-1 rounded-full text-xs">
                            +{internship.skills.length - 4} more
                          </span>
                        )}
                      </div>
                    </div>
                  )}

                  <a 
                    href={internship.googleFormLink || service.googleFormUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block"
                  >
                    <Button className="w-full bg-gradient-primary hover:opacity-90">
                      Apply Now
                      <ExternalLink className="ml-2 h-4 w-4" />
                    </Button>
                  </a>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

    </div>
  );
};

export default ServiceDetails;
