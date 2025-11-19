import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import StatsSection from "@/components/StatsSection";
import AboutSection from "@/components/AboutSection";
import ServicesSection from "@/components/ServicesSection";
import InternshipsSection from "@/components/InternshipsSection";
import VisualizationSection from "@/components/VisualizationSection";
import VerifyCertificateSection from "@/components/VerifyCertificateSection";
import FutureAimsSection from "@/components/FutureAimsSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <HeroSection />
      <StatsSection />
      <AboutSection />
      <ServicesSection />
      <InternshipsSection />
      <VisualizationSection />
      <VerifyCertificateSection />
      <FutureAimsSection />
      <ContactSection />
      <Footer />
    </div>
  );
};

export default Index;
