import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAdminAuth } from '@/hooks/useAdminAuth';
import { toast } from 'sonner';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';

const AdminLogin = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();
  const { login } = useAdminAuth();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (login(username, password)) {
      toast.success('Login successful!');
      // Use setTimeout to ensure state update completes before navigation
      setTimeout(() => {
        navigate('/admin/dashboard');
      }, 100);
    } else {
      toast.error('Invalid credentials');
    }
  };

  return (
    <div className="min-h-screen bg-background flex items-center justify-center px-4">
      <div className="max-w-md w-full">
        <div className="bg-card border border-white/10 rounded-2xl p-8 shadow-glow">
          <div className="text-center mb-8">
            <h1 className="text-4xl font-bold text-white mb-2">Admin Login</h1>
            <p className="text-muted-foreground">Secure access to admin panel</p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <Label htmlFor="username">Username</Label>
              <Input
                id="username"
                type="text"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                placeholder="Enter admin username"
                required
                className="mt-2"
              />
            </div>

            <div>
              <Label htmlFor="password">Password</Label>
              <Input
                id="password"
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Enter admin password"
                required
                className="mt-2"
              />
            </div>

            <Button type="submit" className="w-full">
              Login
            </Button>
          </form>

          <div className="mt-8 p-4 bg-primary/10 border border-primary/50 rounded-lg">
            <p className="text-sm text-primary text-center font-semibold mb-3">
              🎯 Demo Login Credentials
            </p>
            <div className="space-y-2 text-xs text-foreground/80">
              <p><strong>Username:</strong> admin1 | <strong>Password:</strong> admin123</p>
              <p><strong>Username:</strong> admin2 | <strong>Password:</strong> admin123</p>
            </div>
          </div>

          <div className="mt-4 p-4 bg-destructive/10 border border-destructive/50 rounded-lg">
            <p className="text-sm text-destructive text-center">
              ⚠️ SECURITY WARNING
            </p>
            <p className="text-xs text-muted-foreground text-center mt-2">
              Change default credentials immediately in Admin Settings
            </p>
          </div>

          <Button
            variant="ghost"
            className="w-full mt-4"
            onClick={() => navigate('/')}
          >
            Back to Home
          </Button>
        </div>
      </div>
    </div>
  );
};

export default AdminLogin;
