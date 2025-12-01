import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';

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

const InternshipsSection = () => {
  const [internships, setInternships] = useState<Internship[]>([]);

  useEffect(() => {
    loadInternships();
  }, []);

  const loadInternships = () => {
    const stored = localStorage.getItem('internships');
    if (stored) {
      const allInternships = JSON.parse(stored);
      // Only show active internships
      setInternships(allInternships.filter((i: Internship) => i.active));
    }
  };

  return (
    <section id="internships" className="py-16 sm:py-20 lg:py-24 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10 sm:mb-12 lg:mb-16">
          <div className="text-primary text-xs sm:text-sm font-semibold uppercase tracking-[2px] mb-3 sm:mb-4">
            Internships & Careers
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-3 sm:mb-4">
            Corporate-Style Internship Programs
          </h2>
          <p className="text-base sm:text-lg lg:text-xl text-muted-foreground max-w-3xl mx-auto px-2">
            Gain real-world experience with our immersive internship opportunities
          </p>
        </div>

        {internships.length > 0 && (
          <div className="mb-12 sm:mb-16 space-y-6">
            <h3 className="text-2xl sm:text-3xl font-bold text-white text-center mb-6 sm:mb-8">
              Available Internships
            </h3>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-6">
              {internships.map((internship) => (
                <div
                  key={internship.id}
                  className="bg-card/50 backdrop-blur p-6 sm:p-8 rounded-xl border border-white/10 hover:border-primary/30 transition-all"
                >
                  <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-2 mb-4">
                    <div>
                      <h4 className="text-xl sm:text-2xl font-bold text-white mb-2">{internship.title}</h4>
                      <Badge variant="secondary" className="mb-2">{internship.category}</Badge>
                    </div>
                  </div>
                  
                  <p className="text-foreground/70 mb-4 leading-relaxed text-sm sm:text-base">
                    {internship.description}
                  </p>

                  {internship.duration && (
                    <p className="text-sm text-muted-foreground mb-2">
                      <span className="text-primary font-semibold">Duration:</span> {internship.duration}
                    </p>
                  )}

                  <p className="text-sm text-muted-foreground mb-4">
                    <span className="text-primary font-semibold">Available Seats:</span> {internship.availableSeats} / {internship.totalSeats}
                  </p>

                  {internship.skills.length > 0 && (
                    <div className="mb-4">
                      <p className="text-sm text-primary font-semibold mb-2">Skills Required:</p>
                      <div className="flex flex-wrap gap-2">
                        {internship.skills.map((skill, idx) => (
                          <Badge key={idx} variant="outline" className="text-xs">
                            {skill}
                          </Badge>
                        ))}
                      </div>
                    </div>
                  )}

                  {internship.googleFormLink && (
                    <Button
                      className="w-full mt-4"
                      onClick={() => window.open(internship.googleFormLink, '_blank')}
                    >
                      Apply Now
                    </Button>
                  )}
                </div>
              ))}
            </div>
          </div>
        )}

        <div className="relative bg-gradient-to-br from-primary/5 to-secondary/5 rounded-2xl sm:rounded-3xl p-8 sm:p-12 lg:p-16 border border-primary/20 overflow-hidden">
          <div className="absolute top-[-50%] right-[-20%] w-[60%] h-[150%] bg-secondary/10 rounded-full blur-[120px] animate-pulse-slow" />
          
          <div className="relative z-10">
            <h3 className="text-primary text-2xl sm:text-3xl mb-8 sm:mb-10 text-center font-semibold">
              Join Our Team & Grow Your Career
            </h3>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6 lg:gap-8">
              <div className="bg-black/50 p-6 sm:p-8 rounded-xl border border-white/10 backdrop-blur">
                <h3 className="text-primary text-xl sm:text-2xl mb-3 sm:mb-4 font-semibold">🎓 Student Internships</h3>
                <p className="text-foreground/70 leading-relaxed text-sm sm:text-base">
                  Hands-on training programs designed for students to gain practical experience in their chosen domain. Work on real projects with industry mentors.
                </p>
              </div>
              
              <div className="bg-black/50 p-6 sm:p-8 rounded-xl border border-white/10 backdrop-blur">
                <h3 className="text-primary text-xl sm:text-2xl mb-3 sm:mb-4 font-semibold">💼 Career Opportunities</h3>
                <p className="text-foreground/70 leading-relaxed text-sm sm:text-base">
                  Join Skillvance as a mentor, trainer, or team member. Help shape the future of skill development and make an impact on students' lives.
                </p>
              </div>
              
              <div className="bg-black/50 p-6 sm:p-8 rounded-xl border border-white/10 backdrop-blur">
                <h3 className="text-primary text-xl sm:text-2xl mb-3 sm:mb-4 font-semibold">🚀 Project-Based Learning</h3>
                <p className="text-foreground/70 leading-relaxed text-sm sm:text-base">
                  Every internship includes multiple real-world projects, ensuring you build a strong portfolio that stands out to employers.
                </p>
              </div>
              
              <div className="bg-black/50 p-6 sm:p-8 rounded-xl border border-white/10 backdrop-blur">
                <h3 className="text-primary text-xl sm:text-2xl mb-3 sm:mb-4 font-semibold">📜 Certification & Recognition</h3>
                <p className="text-foreground/70 leading-relaxed text-sm sm:text-base">
                  Receive industry-recognized certificates upon completion, validating your skills and boosting your professional credibility.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default InternshipsSection;
