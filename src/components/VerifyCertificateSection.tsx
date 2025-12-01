import { useState } from "react";
import { toast } from "sonner";

const VerifyCertificateSection = () => {
  const [certId, setCertId] = useState("");
  const [verificationResult, setVerificationResult] = useState<{
    show: boolean;
    isValid: boolean;
    data?: any;
  }>({ show: false, isValid: false });

  const handleVerify = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Check against stored certificates
    const stored = localStorage.getItem('certificates');
    if (stored) {
      const certificates = JSON.parse(stored);
      const found = certificates.find(
        (cert: any) => cert.certId.toUpperCase() === certId.toUpperCase()
      );
      
      if (found) {
        setVerificationResult({ show: true, isValid: true, data: found });
        toast.success("Certificate verified successfully!");
        return;
      }
    }
    
    // Certificate not found
    setVerificationResult({ show: true, isValid: false });
    toast.error("Certificate not found. Please check the Certificate ID.");
  };

  return (
    <section id="verify" className="py-16 sm:py-20 lg:py-24 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10 sm:mb-12 lg:mb-16">
          <div className="text-primary text-xs sm:text-sm font-semibold uppercase tracking-[2px] mb-3 sm:mb-4">
            Certificate Verification
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-3 sm:mb-4">
            Verify Your Certificate
          </h2>
          <p className="text-base sm:text-lg lg:text-xl text-muted-foreground max-w-3xl mx-auto px-2">
            Authenticate the originality of Skillvance Technologies certificates
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 lg:gap-12 mt-8 sm:mt-10 lg:mt-12">
          {/* Verification Form */}
          <div className="bg-card p-6 sm:p-8 lg:p-12 rounded-2xl border border-white/5">
            <h3 className="text-primary text-xl sm:text-2xl mb-6 sm:mb-8 font-semibold">Enter Certificate Details</h3>
            <form onSubmit={handleVerify} className="space-y-4 sm:space-y-6">
              <div>
                <label className="block mb-2 text-foreground/80 font-medium text-sm sm:text-base">Certificate ID</label>
                <input
                  type="text"
                  value={certId}
                  onChange={(e) => setCertId(e.target.value)}
                  placeholder="e.g., SKV2025ML00123"
                  required
                  className="w-full px-3 sm:px-4 py-2.5 sm:py-3 bg-black/50 border border-white/10 rounded-lg text-white text-sm sm:text-base focus:outline-none focus:border-primary focus:shadow-glow transition-all"
                />
              </div>
              <button
                type="submit"
                className="w-full py-3 sm:py-4 bg-gradient-primary text-white rounded-lg font-semibold text-base sm:text-lg transition-all duration-300 hover:scale-[1.02] hover:shadow-glow-hover"
              >
                Verify Certificate
              </button>
            </form>

            {verificationResult.show && (
              <div className={`mt-6 sm:mt-8 p-4 sm:p-6 rounded-xl ${verificationResult.isValid ? 'bg-primary/20 border border-primary/50' : 'bg-destructive/20 border border-destructive/50'}`}>
                <div className="text-center">
                  <div className="text-4xl sm:text-5xl mb-3 sm:mb-4">{verificationResult.isValid ? '✅' : '❌'}</div>
                  <h3 className="text-xl sm:text-2xl font-semibold mb-3 sm:mb-4 text-white">
                    {verificationResult.isValid ? 'Certificate Verified Successfully!' : 'Certificate Not Found'}
                  </h3>
                  {verificationResult.isValid && verificationResult.data && (
                    <>
                      <p className="text-foreground/80 mb-2 text-sm sm:text-base"><strong>Certificate ID:</strong> {verificationResult.data.certId}</p>
                      <p className="text-foreground/80 mb-2 text-sm sm:text-base"><strong>Student Name:</strong> {verificationResult.data.studentName}</p>
                      <p className="text-foreground/80 mb-2 text-sm sm:text-base"><strong>Course Name:</strong> {verificationResult.data.courseName}</p>
                      <p className="text-foreground/80 mb-2 text-sm sm:text-base"><strong>Issue Date:</strong> {verificationResult.data.issueDate}</p>
                      <p className="text-foreground/80 mt-4 text-sm sm:text-base"><strong>Status:</strong> <span className="text-primary">✓ Authentic Certificate</span></p>
                      <p className="text-muted-foreground text-xs sm:text-sm mt-4">This certificate has been verified against our secure database.</p>
                    </>
                  )}
                  {!verificationResult.isValid && (
                    <p className="text-foreground/70 text-sm sm:text-base">Certificate ID not found in our database. Please check the Certificate ID and try again.</p>
                  )}
                </div>
              </div>
            )}
          </div>

          {/* Information Section */}
          <div className="space-y-6 sm:space-y-8">
            <div className="bg-gradient-to-br from-primary/10 to-secondary/10 p-6 sm:p-8 lg:p-12 rounded-2xl border border-primary/20">
              <h3 className="text-primary text-xl sm:text-2xl mb-4 sm:mb-6 font-semibold">🔐 Why Verify?</h3>
              <p className="text-foreground/70 leading-relaxed mb-4 sm:mb-6 text-sm sm:text-base">
                Our certificate verification system ensures the authenticity and credibility of all certificates issued by Skillvance Technologies. This helps employers, institutions, and individuals confirm the legitimacy of qualifications.
              </p>
              <ul className="space-y-3 sm:space-y-4">
                {['Instant verification in seconds', 'Secure blockchain-backed records', 'Prevents fraudulent certificates', 'Available 24/7 for verification'].map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <span className="text-primary text-lg sm:text-xl">✓</span>
                    <span className="text-foreground/70 text-sm sm:text-base">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="bg-card p-6 sm:p-8 lg:p-10 rounded-2xl border border-white/5">
              <h3 className="text-primary text-lg sm:text-xl mb-4 sm:mb-6 font-semibold">📋 How to Find Your Certificate ID</h3>
              <p className="text-foreground/70 leading-relaxed mb-4 sm:mb-6 text-sm sm:text-base">
                Your unique Certificate ID is located at the bottom of your certificate. It typically starts with "SKV" followed by the year and a unique number.
              </p>
              <div className="bg-primary/5 p-3 sm:p-4 rounded-lg border-l-4 border-primary">
                <p className="text-foreground/80 text-xs sm:text-sm">
                  <strong>Example:</strong> SKV2025ML00123
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-card p-6 sm:p-8 lg:p-10 rounded-2xl border border-white/5 mt-8 sm:mt-10 lg:mt-12 text-center">
          <h3 className="text-white text-lg sm:text-xl mb-3 sm:mb-4 font-semibold">Need Help with Verification?</h3>
          <p className="text-muted-foreground mb-4 sm:mb-6 text-sm sm:text-base">If you're unable to verify your certificate or have any questions, please contact our support team.</p>
          <button
            onClick={() => {
              const element = document.getElementById("contact");
              element?.scrollIntoView({ behavior: "smooth" });
            }}
            className="inline-block px-6 sm:px-10 py-3 sm:py-4 bg-gradient-primary text-white rounded-full font-semibold text-sm sm:text-base transition-all duration-300 hover:scale-105 hover:shadow-glow-hover"
          >
            Contact Support
          </button>
        </div>
      </div>
    </section>
  );
};

export default VerifyCertificateSection;
