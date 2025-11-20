import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import InternshipsManager from '@/components/admin/InternshipsManager';
import SocialLinksManager from '@/components/admin/SocialLinksManager';
import CertificatesManager from '@/components/admin/CertificatesManager';
import MessagesManager from '@/components/admin/MessagesManager';
import AdminSettingsManager from '@/components/admin/AdminSettingsManager';
import { apiClient } from '@/lib/api';

const AdminDashboard = () => {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState('messages');
  const [currentAdmin, setCurrentAdmin] = useState<string>('');
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const checkAuth = async () => {
      if (!apiClient.isAuthenticated()) {
        navigate('/admin');
        return;
      }

      const isValid = await apiClient.verifyToken();
      if (!isValid) {
        apiClient.logout();
        navigate('/admin');
        return;
      }

      const user = apiClient.getCurrentUser();
      if (user?.role !== 'admin') {
        apiClient.logout();
        navigate('/admin');
        return;
      }

      setCurrentAdmin(user.email);
      setIsLoading(false);
    };

    checkAuth();
  }, [navigate]);

  const handleLogout = () => {
    apiClient.logout();
    navigate('/admin');
  };

  if (isLoading) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <p className="text-muted-foreground">Loading...</p>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      <div className="border-b border-white/10 bg-card/50 backdrop-blur">
        <div className="max-w-7xl mx-auto px-8 py-4 flex items-center justify-between">
          <div>
            <h1 className="text-2xl font-bold text-white">Admin Panel</h1>
            <p className="text-sm text-muted-foreground">
              Logged in as: {currentAdmin}
            </p>
          </div>
          <Button onClick={handleLogout} variant="outline">
            Logout
          </Button>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-8 py-8">
        <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
          <TabsList className="grid w-full grid-cols-5 mb-8">
            <TabsTrigger value="messages">Messages</TabsTrigger>
            <TabsTrigger value="internships">Internships</TabsTrigger>
            <TabsTrigger value="certificates">Certificates</TabsTrigger>
            <TabsTrigger value="social">Social Links</TabsTrigger>
            <TabsTrigger value="settings">Settings</TabsTrigger>
          </TabsList>

          <TabsContent value="messages">
            <MessagesManager />
          </TabsContent>

          <TabsContent value="internships">
            <InternshipsManager />
          </TabsContent>

          <TabsContent value="social">
            <SocialLinksManager />
          </TabsContent>

          <TabsContent value="certificates">
            <CertificatesManager />
          </TabsContent>

          <TabsContent value="settings">
            <AdminSettingsManager />
          </TabsContent>
        </Tabs>
      </div>

      <div className="max-w-7xl mx-auto px-8 pb-8">
        <Button variant="ghost" onClick={() => navigate('/')}>
          Back to Home
        </Button>
      </div>
    </div>
  );
};

export default AdminDashboard;
