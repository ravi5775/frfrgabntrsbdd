import { useState } from "react";
import { toast } from "sonner";

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    program: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Save message to localStorage
    const newMessage = {
      id: `msg-${Date.now()}-${Math.random().toString(36).substr(2, 9)}`,
      name: formData.name,
      email: formData.email,
      phone: formData.phone,
      program: formData.program,
      message: formData.message,
      status: 'new' as const,
      createdAt: new Date().toISOString(),
    };

    const stored = localStorage.getItem('contactMessages');
    const messages = stored ? JSON.parse(stored) : [];
    messages.push(newMessage);
    localStorage.setItem('contactMessages', JSON.stringify(messages));

    toast.success("Thank you for your enquiry! Our team will contact you within 24 hours.");
    setFormData({ name: "", email: "", phone: "", program: "", message: "" });
  };

  return (
    <section id="contact" className="py-16 sm:py-20 lg:py-24 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10 sm:mb-12 lg:mb-16">
          <div className="text-primary text-xs sm:text-sm font-semibold uppercase tracking-[2px] mb-3 sm:mb-4">
            Get In Touch
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-3 sm:mb-4">
            Contact Us & Enquire
          </h2>
          <p className="text-base sm:text-lg lg:text-xl text-muted-foreground max-w-3xl mx-auto px-2">
            Have questions? We're here to help you advance your skills
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 lg:gap-12 mt-8 sm:mt-10 lg:mt-12">
          {/* Contact Info */}
          <div className="bg-card p-6 sm:p-8 lg:p-12 rounded-2xl border border-white/5">
            <h3 className="text-primary text-xl sm:text-2xl mb-6 sm:mb-8 font-semibold">Contact Information</h3>
            
            <div className="space-y-6 sm:space-y-8">
              <div className="flex gap-4 sm:gap-6">
                <div className="w-12 h-12 sm:w-14 sm:h-14 bg-gradient-primary rounded-xl flex items-center justify-center text-xl sm:text-2xl flex-shrink-0 shadow-glow">
                  📍
                </div>
                <div>
                  <h4 className="text-primary font-semibold mb-1 sm:mb-2">Our Location</h4>
                  <p className="text-foreground/70 text-sm sm:text-base">Chittoor, Andhra Pradesh, India</p>
                </div>
              </div>

              <div className="flex gap-4 sm:gap-6">
                <div className="w-12 h-12 sm:w-14 sm:h-14 bg-gradient-primary rounded-xl flex items-center justify-center text-xl sm:text-2xl flex-shrink-0 shadow-glow">
                  📧
                </div>
                <div>
                  <h4 className="text-primary font-semibold mb-1 sm:mb-2">Email Us</h4>
                  <p className="text-foreground/70 text-sm sm:text-base">info@skillvance.com</p>
                  <p className="text-foreground/70 text-sm sm:text-base">support@skillvance.com</p>
                </div>
              </div>

              <div className="flex gap-4 sm:gap-6">
                <div className="w-12 h-12 sm:w-14 sm:h-14 bg-gradient-primary rounded-xl flex items-center justify-center text-xl sm:text-2xl flex-shrink-0 shadow-glow">
                  📞
                </div>
                <div>
                  <h4 className="text-primary font-semibold mb-1 sm:mb-2">Call Us</h4>
                  <p className="text-foreground/70 text-sm sm:text-base">+91 12345 67890</p>
                  <p className="text-foreground/70 text-sm sm:text-base">Mon - Sat: 9:00 AM - 6:00 PM</p>
                </div>
              </div>

              <div className="flex gap-4 sm:gap-6">
                <div className="w-12 h-12 sm:w-14 sm:h-14 bg-gradient-primary rounded-xl flex items-center justify-center text-xl sm:text-2xl flex-shrink-0 shadow-glow">
                  🌐
                </div>
                <div>
                  <h4 className="text-primary font-semibold mb-1 sm:mb-2">Follow Us</h4>
                  <div className="flex gap-2 sm:gap-3 mt-3 sm:mt-4">
                    {['f', 'in', 'tw', 'ig'].map((icon) => (
                      <a
                        key={icon}
                        href="#"
                        className="w-9 h-9 sm:w-10 sm:h-10 bg-white/5 border border-white/10 rounded-full flex items-center justify-center text-white text-sm transition-all duration-300 hover:bg-gradient-primary hover:border-transparent hover:-translate-y-1"
                      >
                        {icon}
                      </a>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-card p-6 sm:p-8 lg:p-12 rounded-2xl border border-white/5">
            <h3 className="text-primary text-xl sm:text-2xl mb-6 sm:mb-8 font-semibold">Send Us a Message</h3>
            <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-6">
              <div>
                <label className="block mb-2 text-foreground/80 font-medium text-sm sm:text-base">Full Name</label>
                <input
                  type="text"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  placeholder="Enter your name"
                  required
                  className="w-full px-3 sm:px-4 py-2.5 sm:py-3 bg-black/50 border border-white/10 rounded-lg text-white text-sm sm:text-base focus:outline-none focus:border-primary focus:shadow-glow transition-all"
                />
              </div>

              <div>
                <label className="block mb-2 text-foreground/80 font-medium text-sm sm:text-base">Email Address</label>
                <input
                  type="email"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  placeholder="Enter your email"
                  required
                  className="w-full px-3 sm:px-4 py-2.5 sm:py-3 bg-black/50 border border-white/10 rounded-lg text-white text-sm sm:text-base focus:outline-none focus:border-primary focus:shadow-glow transition-all"
                />
              </div>

              <div>
                <label className="block mb-2 text-foreground/80 font-medium text-sm sm:text-base">Phone Number</label>
                <input
                  type="tel"
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  placeholder="Enter your phone number"
                  required
                  className="w-full px-3 sm:px-4 py-2.5 sm:py-3 bg-black/50 border border-white/10 rounded-lg text-white text-sm sm:text-base focus:outline-none focus:border-primary focus:shadow-glow transition-all"
                />
              </div>

              <div>
                <label className="block mb-2 text-foreground/80 font-medium text-sm sm:text-base">Program Interest</label>
                <select
                  value={formData.program}
                  onChange={(e) => setFormData({ ...formData, program: e.target.value })}
                  required
                  className="w-full px-3 sm:px-4 py-2.5 sm:py-3 bg-black/50 border border-white/10 rounded-lg text-white text-sm sm:text-base focus:outline-none focus:border-primary focus:shadow-glow transition-all"
                >
                  <option value="">Select a domain</option>
                  <option value="ml">Machine Learning Engineer</option>
                  <option value="ds">Data Scientist</option>
                  <option value="da">Data Analyst</option>
                  <option value="web">Web Developer</option>
                  <option value="cyber">Cybersecurity Engineer</option>
                  <option value="blockchain">Blockchain Engineer</option>
                </select>
              </div>

              <div>
                <label className="block mb-2 text-foreground/80 font-medium text-sm sm:text-base">Your Message</label>
                <textarea
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  placeholder="Tell us about your goals and questions"
                  rows={4}
                  className="w-full px-3 sm:px-4 py-2.5 sm:py-3 bg-black/50 border border-white/10 rounded-lg text-white text-sm sm:text-base focus:outline-none focus:border-primary focus:shadow-glow transition-all resize-none"
                />
              </div>

              <button
                type="submit"
                className="w-full py-3 sm:py-4 bg-gradient-primary text-white rounded-lg font-semibold text-base sm:text-lg transition-all duration-300 hover:scale-[1.02] hover:shadow-glow-hover"
              >
                Submit Enquiry
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
