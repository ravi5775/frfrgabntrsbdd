import { useEffect, useRef, useState } from "react";

interface ProgressCardProps {
  icon: string;
  title: string;
  label: string;
  percentage: number;
}

const ProgressCard = ({ icon, title, label, percentage }: ProgressCardProps) => {
  const [width, setWidth] = useState(0);
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
    if (isVisible) {
      setTimeout(() => setWidth(percentage), 100);
    }
  }, [isVisible, percentage]);

  return (
    <div
      ref={ref}
      className="bg-card border border-white/[0.08] rounded-2xl p-8 relative overflow-hidden"
    >
      <h3 className="text-white text-xl mb-6 flex items-center gap-2 font-semibold">
        <span>{icon}</span> {title}
      </h3>
      <div className="text-muted-foreground text-sm mb-2">{label}</div>
      <div className="bg-white/5 h-3 rounded-full overflow-hidden mb-4">
        <div
          className="h-full bg-gradient-primary rounded-full transition-all duration-[2s] ease-out"
          style={{ width: `${width}%` }}
        />
      </div>
      <p className="text-primary text-2xl font-bold text-center">{percentage}%</p>
    </div>
  );
};

const VisualizationSection = () => {
  return (
    <div className="bg-background py-20 border-t border-white/5">
      <div className="max-w-7xl mx-auto px-8">
        <div className="text-center mb-16">
          <div className="text-primary text-sm font-semibold uppercase tracking-[2px] mb-4">
            Performance Metrics
          </div>
          <h2 className="text-5xl font-bold text-white mb-4">
            Interactive Visualization Dashboard
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Real-time insights into our programs and student success
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mt-12">
          <ProgressCard
            icon="📈"
            title="Program Completion Rate"
            label="Student Success Metrics"
            percentage={95}
          />
          <ProgressCard
            icon="⭐"
            title="Student Satisfaction"
            label="Feedback & Reviews"
            percentage={98}
          />
          <ProgressCard
            icon="🎯"
            title="Training Excellence"
            label="Quality Assurance"
            percentage={100}
          />
          <ProgressCard
            icon="💡"
            title="Skill Development"
            label="Practical Learning"
            percentage={92}
          />
        </div>
      </div>
    </div>
  );
};

export default VisualizationSection;
