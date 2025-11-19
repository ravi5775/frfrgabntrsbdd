const FutureAimsSection = () => {
  return (
    <section id="careers" className="py-24 bg-background">
      <div className="max-w-7xl mx-auto px-8">
        <div className="text-center mb-16">
          <div className="text-primary text-sm font-semibold uppercase tracking-[2px] mb-4">
            Future Vision
          </div>
          <h2 className="text-5xl font-bold text-white mb-4">
            Our Future Aims & Goals
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Building tomorrow's workforce today
          </p>
        </div>

        <div className="relative bg-gradient-to-br from-primary/5 to-secondary/5 rounded-3xl p-16 border border-primary/20 overflow-hidden">
          <div className="absolute top-[-50%] right-[-20%] w-[60%] h-[150%] bg-secondary/10 rounded-full blur-[120px] animate-pulse-slow" />
          
          <div className="relative z-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-black/50 p-8 rounded-xl border border-white/10 backdrop-blur">
              <h3 className="text-primary text-2xl mb-4 font-semibold">🌍 Global Expansion</h3>
              <p className="text-foreground/70 leading-relaxed">
                Expand our reach to 50+ countries, making quality skill development accessible to millions of students worldwide by 2027.
              </p>
            </div>
            
            <div className="bg-black/50 p-8 rounded-xl border border-white/10 backdrop-blur">
              <h3 className="text-primary text-2xl mb-4 font-semibold">🤝 Corporate Collaborations</h3>
              <p className="text-foreground/70 leading-relaxed">
                Build strategic partnerships with leading tech companies to provide enhanced learning experiences and real-world project opportunities.
              </p>
            </div>
            
            <div className="bg-black/50 p-8 rounded-xl border border-white/10 backdrop-blur">
              <h3 className="text-primary text-2xl mb-4 font-semibold">💡 Innovation Labs</h3>
              <p className="text-foreground/70 leading-relaxed">
                Establish cutting-edge innovation labs where students can work on breakthrough technologies and entrepreneurial ventures.
              </p>
            </div>
            
            <div className="bg-black/50 p-8 rounded-xl border border-white/10 backdrop-blur">
              <h3 className="text-primary text-2xl mb-4 font-semibold">🎓 Advanced Programs</h3>
              <p className="text-foreground/70 leading-relaxed">
                Launch specialized advanced programs in emerging technologies like Quantum Computing, Blockchain, and Extended Reality.
              </p>
            </div>
            
            <div className="bg-black/50 p-8 rounded-xl border border-white/10 backdrop-blur">
              <h3 className="text-primary text-2xl mb-4 font-semibold">📚 Knowledge Repository</h3>
              <p className="text-foreground/70 leading-relaxed">
                Create a comprehensive online learning library with 10,000+ hours of expert content, tutorials, and resources.
              </p>
            </div>
            
            <div className="bg-black/50 p-8 rounded-xl border border-white/10 backdrop-blur">
              <h3 className="text-primary text-2xl mb-4 font-semibold">🏆 Excellence Awards</h3>
              <p className="text-foreground/70 leading-relaxed">
                Recognize and reward top-performing students with scholarships, internships at Fortune 500 companies, and startup funding.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FutureAimsSection;
