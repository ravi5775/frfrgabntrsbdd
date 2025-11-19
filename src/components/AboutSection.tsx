const AboutSection = () => {
  return (
    <section id="about" className="py-24 bg-background">
      <div className="max-w-7xl mx-auto px-8">
        <div className="text-center mb-16">
          <div className="text-primary text-sm font-semibold uppercase tracking-[2px] mb-4">
            About Skillvance Technologies
          </div>
          <h2 className="text-5xl font-bold text-white mb-4">
            Detailed Overview of Our Company
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Bridging the gap between academic learning and real corporate experience
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mt-12">
          <div className="space-y-6">
            <p className="text-lg text-foreground/70 leading-relaxed">
              <strong className="text-white">Skillvance Technologies</strong> is a pioneering edtech startup dedicated to transforming the way students and professionals prepare for their careers. As an <strong className="text-white">MSME registered and certified company</strong>, we are committed to delivering quality education and training programs that meet industry standards.
            </p>
            <p className="text-lg text-foreground/70 leading-relaxed">
              Founded with a vision to bridge the critical gap between classroom theory and industry practice, we provide comprehensive corporate-style internships and skill development programs. Our mission is simple yet powerful: to empower every learner with practical, hands-on experience that makes them job-ready from day one.
            </p>
            <p className="text-lg text-foreground/70 leading-relaxed">
              We collaborate with industry experts, employ cutting-edge teaching methodologies, and focus on real-world project implementation. With a team of experienced mentors from top tech companies and a curriculum designed around current industry demands, Skillvance Technologies is your trusted partner in building a successful, future-proof career in technology.
            </p>
          </div>

          <div className="bg-gradient-to-br from-primary/10 to-secondary/10 rounded-3xl p-12 border border-primary/20 space-y-6">
            <div className="bg-black/50 p-8 rounded-xl border-l-4 border-primary backdrop-blur">
              <h3 className="text-primary text-2xl mb-2 font-semibold">🎯 Our Vision</h3>
              <p className="text-foreground/70">
                To become the leading platform for practical skill development, making quality corporate training accessible to every aspiring professional.
              </p>
            </div>
            <div className="bg-black/50 p-8 rounded-xl border-l-4 border-primary backdrop-blur">
              <h3 className="text-primary text-2xl mb-2 font-semibold">💡 Our Mission</h3>
              <p className="text-foreground/70">
                Empower students with real-world skills through immersive internships, expert mentorship, and industry-relevant projects.
              </p>
            </div>
            <div className="bg-black/50 p-8 rounded-xl border-l-4 border-primary backdrop-blur">
              <h3 className="text-primary text-2xl mb-2 font-semibold">⭐ Our Values</h3>
              <p className="text-foreground/70">
                Excellence, Innovation, Integrity, and Student Success drive everything we do.
              </p>
            </div>
            <div className="bg-black/50 p-8 rounded-xl border-l-4 border-primary backdrop-blur">
              <h3 className="text-primary text-2xl mb-2 font-semibold">✅ MSME Certified</h3>
              <p className="text-foreground/70">
                Officially registered and certified by MSME, ensuring quality standards and credibility in skill development.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
