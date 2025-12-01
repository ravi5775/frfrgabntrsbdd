import { Link } from "react-router-dom";

interface ServiceCardProps {
  id: string;
  icon: string;
  title: string;
  description: string;
}

const ServiceCard = ({ id, icon, title, description }: ServiceCardProps) => {
  return (
    <Link to={`/service/${id}`}>
      <div className="relative bg-card rounded-2xl p-6 sm:p-8 lg:p-10 border border-white/5 transition-all duration-300 hover:-translate-y-3 hover:border-primary/30 hover:shadow-glow group overflow-hidden cursor-pointer h-full">
        <div className="absolute top-0 left-0 right-0 h-[3px] bg-gradient-primary scale-x-0 transition-transform duration-300 group-hover:scale-x-100" />
        
        <div className="w-14 h-14 sm:w-16 sm:h-16 lg:w-20 lg:h-20 bg-gradient-primary rounded-xl lg:rounded-2xl flex items-center justify-center text-2xl sm:text-3xl lg:text-4xl mb-4 sm:mb-6 shadow-glow">
          {icon}
        </div>
        
        <h3 className="text-xl sm:text-2xl font-semibold text-white mb-3 sm:mb-4">{title}</h3>
        <p className="text-foreground/60 leading-relaxed mb-4 sm:mb-6 text-sm sm:text-base">{description}</p>
        
        <span className="text-primary font-semibold inline-flex items-center gap-2 transition-all duration-300 group-hover:gap-4 text-sm sm:text-base">
          Explore Program →
        </span>
      </div>
    </Link>
  );
};

import { servicesData } from "@/data/servicesData";

const ServicesSection = () => {
  const services = servicesData.map(service => ({
    id: service.id,
    icon: service.icon,
    title: service.title,
    description: service.description
  }));

  return (
    <section id="services" className="py-16 sm:py-20 lg:py-24 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10 sm:mb-12 lg:mb-16">
          <div className="text-primary text-xs sm:text-sm font-semibold uppercase tracking-[2px] mb-3 sm:mb-4">
            Our Domains
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-3 sm:mb-4">
            Career-Focused Training Programs
          </h2>
          <p className="text-base sm:text-lg lg:text-xl text-muted-foreground max-w-3xl mx-auto px-2">
            Expert-led training to become industry-ready professionals
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 lg:gap-10 mt-8 sm:mt-10 lg:mt-12">
          {services.map((service, index) => (
            <ServiceCard key={index} {...service} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
