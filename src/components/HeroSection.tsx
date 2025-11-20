const HeroSection = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-subtle pt-20">
      {/* Animated background orbs */}
      <div className="absolute top-[-50%] right-[-10%] w-[60%] h-[150%] bg-primary/15 rounded-full blur-[120px] animate-float" />
      <div className="absolute bottom-[-30%] left-[-10%] w-[50%] h-full bg-secondary/15 rounded-full blur-[120px] animate-float-reverse" />
      
      <div className="relative z-10 max-w-5xl mx-auto px-8 text-center">
        <h1 className="text-6xl md:text-7xl font-bold mb-6 leading-tight">
          Welcome to <span className="bg-gradient-primary bg-clip-text text-transparent">Skillvance Technologies</span>
        </h1>
        <p className="text-2xl text-primary font-medium mb-6">
          Advancing Skills, Building Futures
        </p>
        <p className="text-xl text-foreground/80 mb-10 max-w-3xl mx-auto leading-relaxed">
          We are a leading skill development and corporate training company empowering students and professionals with hands-on experience, real-world projects, and industry-ready expertise.
        </p>
        <div
          className="inline-block bg-gradient-primary text-white px-12 py-4 rounded-full font-semibold text-lg transition-all duration-300 hover:scale-105 hover:shadow-glow-hover relative overflow-hidden group"
        >
          <span className="relative z-10">Get Started Today</span>
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-500" />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
