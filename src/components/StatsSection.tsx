import { useEffect, useRef, useState } from "react";

interface StatCardProps {
  icon: string;
  target: number;
  label: string;
  suffix?: string;
}

const StatCard = ({ icon, target, label, suffix = "" }: StatCardProps) => {
  const [count, setCount] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !isVisible) {
          setIsVisible(true);
        }
      },
      { threshold: 0.5 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, [isVisible]);

  useEffect(() => {
    if (!isVisible) return;

    const duration = 2000;
    const increment = target / (duration / 16);
    let current = 0;

    const timer = setInterval(() => {
      current += increment;
      if (current >= target) {
        setCount(target);
        clearInterval(timer);
      } else {
        setCount(Math.floor(current));
      }
    }, 16);

    return () => clearInterval(timer);
  }, [isVisible, target]);

  return (
    <div
      ref={ref}
      className="relative bg-card p-6 sm:p-8 lg:p-12 rounded-xl sm:rounded-2xl border border-white/5 text-center overflow-hidden transition-all duration-300 hover:-translate-y-2 hover:border-primary/30 hover:shadow-glow group"
    >
      <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-primary" />
      <div className="text-3xl sm:text-4xl lg:text-5xl mb-3 sm:mb-4">{icon}</div>
      <div className="text-4xl sm:text-5xl lg:text-6xl font-bold bg-gradient-primary bg-clip-text text-transparent mb-2">
        {count}{suffix}
      </div>
      <div className="text-sm sm:text-base lg:text-lg text-muted-foreground uppercase tracking-wider font-medium">
        {label}
      </div>
    </div>
  );
};

const StatsSection = () => {
  return (
    <div className="bg-background py-12 sm:py-16 lg:py-20 border-t border-b border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 lg:gap-12">
        <StatCard icon="📊" target={6} label="Domains Offered" />
        <StatCard icon="😊" target={100} label="% Client Satisfaction" suffix="%" />
        <StatCard icon="🏆" target={100} label="% Hands-On Training" suffix="%" />
        <StatCard icon="🎯" target={100} label="% Industry-Ready Skills" suffix="%" />
      </div>
    </div>
  );
};

export default StatsSection;
