import ogdLogo from "@/assets/ogd-logo.svg";

const PartnershipsSection = () => {
  return (
    <section id="partnerships" className="py-12 sm:py-16 lg:py-20 bg-card/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-8 sm:mb-10 lg:mb-12">
          <div className="text-primary text-xs sm:text-sm font-semibold uppercase tracking-[2px] mb-3">
            Our Partners
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-foreground mb-3 sm:mb-4">
            Trusted Partnerships & Certifications
          </h2>
          <p className="text-sm sm:text-base lg:text-lg text-muted-foreground max-w-2xl mx-auto">
            We collaborate with leading organizations to provide industry-recognized certifications and quality training
          </p>
        </div>

        <div className="flex flex-wrap justify-center items-center gap-8 sm:gap-12 lg:gap-16">
          <div className="bg-background rounded-xl sm:rounded-2xl p-6 sm:p-8 border border-border/30 hover:border-primary/30 transition-all duration-300 hover:shadow-glow">
            <img 
              src={ogdLogo} 
              alt="Government Open Data Platform" 
              className="h-12 sm:h-16 lg:h-20 w-auto object-contain"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default PartnershipsSection;
