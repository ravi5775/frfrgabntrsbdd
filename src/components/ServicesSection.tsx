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
      <div className="relative bg-card rounded-2xl p-10 border border-white/5 transition-all duration-300 hover:-translate-y-3 hover:border-primary/30 hover:shadow-glow group overflow-hidden cursor-pointer">
        <div className="absolute top-0 left-0 right-0 h-[3px] bg-gradient-primary scale-x-0 transition-transform duration-300 group-hover:scale-x-100" />
        
        <div className="w-20 h-20 bg-gradient-primary rounded-2xl flex items-center justify-center text-4xl mb-6 shadow-glow">
          {icon}
        </div>
        
        <h3 className="text-2xl font-semibold text-white mb-4">{title}</h3>
        <p className="text-foreground/60 leading-relaxed mb-6">{description}</p>
        
        <span className="text-primary font-semibold inline-flex items-center gap-2 transition-all duration-300 group-hover:gap-4">
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
    <section id="services" className="py-24 bg-background">
      <div className="max-w-7xl mx-auto px-8">
        <div className="text-center mb-16">
          <div className="text-primary text-sm font-semibold uppercase tracking-[2px] mb-4">
            Our Domains
          </div>
          <h2 className="text-5xl font-bold text-white mb-4">
            Career-Focused Training Programs
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Expert-led training to become industry-ready professionals
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 mt-12">
          {services.map((service, index) => (
            <ServiceCard key={index} {...service} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
