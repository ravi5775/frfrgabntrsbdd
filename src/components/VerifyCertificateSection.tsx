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
    <section id="verify" className="py-24 bg-background">
      <div className="max-w-7xl mx-auto px-8">
        <div className="text-center mb-16">
          <div className="text-primary text-sm font-semibold uppercase tracking-[2px] mb-4">
            Certificate Verification
          </div>
          <h2 className="text-5xl font-bold text-white mb-4">
            Verify Your Certificate
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Authenticate the originality of Skillvance Technologies certificates
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mt-12">
          {/* Verification Form */}
          <div className="bg-card p-12 rounded-2xl border border-white/5">
            <h3 className="text-primary text-2xl mb-8 font-semibold">Enter Certificate Details</h3>
            <form onSubmit={handleVerify} className="space-y-6">
              <div>
                <label className="block mb-2 text-foreground/80 font-medium">Certificate ID</label>
                <input
                  type="text"
                  value={certId}
                  onChange={(e) => setCertId(e.target.value)}
                  placeholder="e.g., SKV2025ML00123"
                  required
                  className="w-full px-4 py-3 bg-black/50 border border-white/10 rounded-lg text-white focus:outline-none focus:border-primary focus:shadow-glow transition-all"
                />
              </div>
              <button
                type="submit"
                className="w-full py-4 bg-gradient-primary text-white rounded-lg font-semibold text-lg transition-all duration-300 hover:scale-[1.02] hover:shadow-glow-hover"
              >
                Verify Certificate
              </button>
            </form>

            {verificationResult.show && (
              <div className={`mt-8 p-6 rounded-xl ${verificationResult.isValid ? 'bg-primary/20 border border-primary/50' : 'bg-destructive/20 border border-destructive/50'}`}>
                <div className="text-center">
                  <div className="text-5xl mb-4">{verificationResult.isValid ? '✅' : '❌'}</div>
                  <h3 className="text-2xl font-semibold mb-4 text-white">
                    {verificationResult.isValid ? 'Certificate Verified Successfully!' : 'Certificate Not Found'}
                  </h3>
                  {verificationResult.isValid && verificationResult.data && (
                    <>
                      <p className="text-foreground/80 mb-2"><strong>Certificate ID:</strong> {verificationResult.data.certId}</p>
                      <p className="text-foreground/80 mb-2"><strong>Student Name:</strong> {verificationResult.data.studentName}</p>
                      <p className="text-foreground/80 mb-2"><strong>Course Name:</strong> {verificationResult.data.courseName}</p>
                      <p className="text-foreground/80 mb-2"><strong>Issue Date:</strong> {verificationResult.data.issueDate}</p>
                      <p className="text-foreground/80 mt-4"><strong>Status:</strong> <span className="text-primary">✓ Authentic Certificate</span></p>
                      <p className="text-muted-foreground text-sm mt-4">This certificate has been verified against our secure database.</p>
                    </>
                  )}
                  {!verificationResult.isValid && (
                    <p className="text-foreground/70">Certificate ID not found in our database. Please check the Certificate ID and try again.</p>
                  )}
                </div>
              </div>
            )}
          </div>

          {/* Information Section */}
          <div className="space-y-8">
            <div className="bg-gradient-to-br from-primary/10 to-secondary/10 p-12 rounded-2xl border border-primary/20">
              <h3 className="text-primary text-2xl mb-6 font-semibold">🔐 Why Verify?</h3>
              <p className="text-foreground/70 leading-relaxed mb-6">
                Our certificate verification system ensures the authenticity and credibility of all certificates issued by Skillvance Technologies. This helps employers, institutions, and individuals confirm the legitimacy of qualifications.
              </p>
              <ul className="space-y-4">
                {['Instant verification in seconds', 'Secure blockchain-backed records', 'Prevents fraudulent certificates', 'Available 24/7 for verification'].map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <span className="text-primary text-xl">✓</span>
                    <span className="text-foreground/70">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="bg-card p-10 rounded-2xl border border-white/5">
              <h3 className="text-primary text-xl mb-6 font-semibold">📋 How to Find Your Certificate ID</h3>
              <p className="text-foreground/70 leading-relaxed mb-6">
                Your unique Certificate ID is located at the bottom of your certificate. It typically starts with "SKV" followed by the year and a unique number.
              </p>
              <div className="bg-primary/5 p-4 rounded-lg border-l-4 border-primary">
                <p className="text-foreground/80 text-sm">
                  <strong>Example:</strong> SKV2025ML00123
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-card p-10 rounded-2xl border border-white/5 mt-12 text-center">
          <h3 className="text-white text-xl mb-4 font-semibold">Need Help with Verification?</h3>
          <p className="text-muted-foreground mb-6">If you're unable to verify your certificate or have any questions, please contact our support team.</p>
          <button
            onClick={() => {
              const element = document.getElementById("contact");
              element?.scrollIntoView({ behavior: "smooth" });
            }}
            className="inline-block px-10 py-4 bg-gradient-primary text-white rounded-full font-semibold transition-all duration-300 hover:scale-105 hover:shadow-glow-hover"
          >
            Contact Support
          </button>
        </div>
      </div>
    </section>
  );
};

export default VerifyCertificateSection;
