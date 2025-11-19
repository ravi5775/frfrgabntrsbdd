import { useState, useEffect } from 'react';
import { toast } from 'sonner';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

export interface Certificate {
  id: string;
  certId: string;
  studentName: string;
  courseName: string;
  issueDate: string;
  createdAt: string;
}

const CertificatesManager = () => {
  const [certificates, setCertificates] = useState<Certificate[]>([]);
  const [formData, setFormData] = useState({
    certId: '',
    studentName: '',
    courseName: '',
    issueDate: '',
  });
  const [charCount, setCharCount] = useState(0);
  const [editingId, setEditingId] = useState<string | null>(null);

  useEffect(() => {
    loadCertificates();
  }, []);

  const loadCertificates = () => {
    const stored = localStorage.getItem('certificates');
    if (stored) {
      setCertificates(JSON.parse(stored));
    }
  };

  const saveCertificates = (data: Certificate[]) => {
    localStorage.setItem('certificates', JSON.stringify(data));
    setCertificates(data);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (formData.certId.length > 30) {
      toast.error('Certificate ID must be 30 characters or less');
      return;
    }

    if (editingId) {
      // Update existing certificate
      const updatedCertificates = certificates.map((cert) =>
        cert.id === editingId
          ? { ...cert, ...formData }
          : cert
      );
      saveCertificates(updatedCertificates);
      toast.success('Certificate updated successfully!');
      setEditingId(null);
    } else {
      // Add new certificate
      const newCertificate: Certificate = {
        ...formData,
        id: Date.now().toString(),
        createdAt: new Date().toISOString(),
      };
      saveCertificates([...certificates, newCertificate]);
      toast.success('Certificate added successfully!');
    }
    
    setFormData({
      certId: '',
      studentName: '',
      courseName: '',
      issueDate: '',
    });
    setCharCount(0);
  };

  const handleEdit = (cert: Certificate) => {
    setFormData({
      certId: cert.certId,
      studentName: cert.studentName,
      courseName: cert.courseName,
      issueDate: cert.issueDate,
    });
    setCharCount(cert.certId.length);
    setEditingId(cert.id);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleCancelEdit = () => {
    setFormData({
      certId: '',
      studentName: '',
      courseName: '',
      issueDate: '',
    });
    setCharCount(0);
    setEditingId(null);
  };

  const handleDelete = (id: string) => {
    saveCertificates(certificates.filter((c) => c.id !== id));
    toast.success('Certificate deleted successfully!');
  };

  const handleExportCSV = () => {
    const headers = ['Certificate ID', 'Student Name', 'Course Name', 'Issue Date'];
    const rows = certificates.map((cert) => [
      cert.certId,
      cert.studentName,
      cert.courseName,
      cert.issueDate,
    ]);
    
    const csv = [headers, ...rows].map((row) => row.join(',')).join('\n');
    const blob = new Blob([csv], { type: 'text/csv' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = 'certificates.csv';
    link.click();
    toast.success('CSV exported successfully!');
  };

  return (
    <div className="space-y-8">
      <Card className="bg-card border-white/10">
        <CardHeader>
          <CardTitle className="text-primary">
            {editingId ? 'Edit Certificate' : 'Add Certificate'}
          </CardTitle>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <Label htmlFor="certId">Certificate ID *</Label>
              <Input
                id="certId"
                value={formData.certId}
                onChange={(e) => {
                  setFormData({ ...formData, certId: e.target.value });
                  setCharCount(e.target.value.length);
                }}
                placeholder="e.g., SKV2025ML00123"
                maxLength={30}
                required
                className="mt-2"
              />
              <p className="text-xs text-muted-foreground mt-1">
                {charCount}/30 characters
              </p>
            </div>

            <div>
              <Label htmlFor="studentName">Student Name *</Label>
              <Input
                id="studentName"
                value={formData.studentName}
                onChange={(e) => setFormData({ ...formData, studentName: e.target.value })}
                required
                className="mt-2"
              />
            </div>

            <div>
              <Label htmlFor="courseName">Course Name *</Label>
              <Input
                id="courseName"
                value={formData.courseName}
                onChange={(e) => setFormData({ ...formData, courseName: e.target.value })}
                required
                className="mt-2"
              />
            </div>

            <div>
              <Label htmlFor="issueDate">Issue Date *</Label>
              <Input
                id="issueDate"
                type="date"
                value={formData.issueDate}
                onChange={(e) => setFormData({ ...formData, issueDate: e.target.value })}
                placeholder="dd-mm-yyyy"
                required
                className="mt-2"
              />
            </div>

            <div className="flex gap-2">
              <Button type="submit" className="flex-1">
                {editingId ? 'Update Certificate' : 'Add Certificate'}
              </Button>
              {editingId && (
                <Button type="button" variant="outline" onClick={handleCancelEdit}>
                  Cancel
                </Button>
              )}
            </div>
          </form>
        </CardContent>
      </Card>

      <Card className="bg-card border-white/10">
        <CardHeader className="flex flex-row items-center justify-between">
          <CardTitle className="text-primary">
            Stored Certificates ({certificates.length})
          </CardTitle>
          {certificates.length > 0 && (
            <Button onClick={handleExportCSV} variant="outline" size="sm">
              Export CSV
            </Button>
          )}
        </CardHeader>
        <CardContent>
          {certificates.length === 0 ? (
            <p className="text-muted-foreground text-center py-8">No certificates yet</p>
          ) : (
            <div className="space-y-4">
              {certificates.map((cert) => (
                <div
                  key={cert.id}
                  className="bg-background/50 p-6 rounded-lg border border-white/10 flex items-start justify-between"
                >
                  <div className="space-y-2">
                    <div>
                      <span className="text-sm text-muted-foreground">Certificate ID:</span>
                      <p className="text-white font-semibold">{cert.certId}</p>
                    </div>
                    <div>
                      <span className="text-sm text-muted-foreground">Student:</span>
                      <p className="text-foreground">{cert.studentName}</p>
                    </div>
                    <div>
                      <span className="text-sm text-muted-foreground">Course:</span>
                      <p className="text-foreground">{cert.courseName}</p>
                    </div>
                    <div>
                      <span className="text-sm text-muted-foreground">Issue Date:</span>
                      <p className="text-foreground">{cert.issueDate}</p>
                    </div>
                  </div>
                  <div className="flex gap-2">
                    <Button
                      variant="outline"
                      size="sm"
                      onClick={() => handleEdit(cert)}
                    >
                      Edit
                    </Button>
                    <Button
                      variant="destructive"
                      size="sm"
                      onClick={() => handleDelete(cert.id)}
                    >
                      Delete
                    </Button>
                  </div>
                </div>
              ))}
            </div>
          )}
        </CardContent>
      </Card>
    </div>
  );
};

export default CertificatesManager;
