import { useState } from 'react';
import { toast } from 'sonner';
import { useAdminAuth } from '@/hooks/useAdminAuth';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

const AdminSettingsManager = () => {
  const { currentAdmin, updateUsername, updatePassword, getAdminAccounts } = useAdminAuth();
  const [newUsername, setNewUsername] = useState(currentAdmin || '');
  const [passwords, setPasswords] = useState({
    current: '',
    new: '',
    confirm: '',
  });

  const handleUpdateUsername = () => {
    if (!currentAdmin) return;
    
    if (updateUsername(currentAdmin, newUsername)) {
      toast.success('Username updated successfully!');
    } else {
      toast.error('Failed to update username');
    }
  };

  const handleUpdatePassword = () => {
    if (!currentAdmin) return;
    
    if (passwords.new !== passwords.confirm) {
      toast.error('New passwords do not match');
      return;
    }

    if (passwords.new.length < 6) {
      toast.error('Password must be at least 6 characters');
      return;
    }

    if (updatePassword(currentAdmin, passwords.current, passwords.new)) {
      toast.success('Password updated successfully!');
      setPasswords({ current: '', new: '', confirm: '' });
    } else {
      toast.error('Current password is incorrect');
    }
  };

  const accounts = getAdminAccounts();

  return (
    <div className="space-y-8 max-w-2xl">
      <Card className="bg-card border-white/10">
        <CardHeader>
          <CardTitle className="text-primary">Change Username</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div>
            <Label htmlFor="newUsername">New Username</Label>
            <Input
              id="newUsername"
              value={newUsername}
              onChange={(e) => setNewUsername(e.target.value)}
              placeholder={currentAdmin || ''}
              className="mt-2"
            />
            <p className="text-xs text-muted-foreground mt-1">
              Current: {currentAdmin}
            </p>
          </div>
          <Button onClick={handleUpdateUsername} className="w-full">
            Update Username
          </Button>
        </CardContent>
      </Card>

      <Card className="bg-card border-white/10">
        <CardHeader>
          <CardTitle className="text-primary">Change Password</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div>
            <Label htmlFor="currentPassword">Current Password</Label>
            <Input
              id="currentPassword"
              type="password"
              value={passwords.current}
              onChange={(e) => setPasswords({ ...passwords, current: e.target.value })}
              placeholder="Enter current password"
              className="mt-2"
            />
          </div>

          <div>
            <Label htmlFor="newPassword">New Password</Label>
            <Input
              id="newPassword"
              type="password"
              value={passwords.new}
              onChange={(e) => setPasswords({ ...passwords, new: e.target.value })}
              placeholder="Enter new password"
              className="mt-2"
            />
          </div>

          <div>
            <Label htmlFor="confirmPassword">Confirm New Password</Label>
            <Input
              id="confirmPassword"
              type="password"
              value={passwords.confirm}
              onChange={(e) => setPasswords({ ...passwords, confirm: e.target.value })}
              placeholder="Confirm new password"
              className="mt-2"
            />
          </div>

          <Button onClick={handleUpdatePassword} className="w-full">
            Update Password
          </Button>
        </CardContent>
      </Card>

      <Card className="bg-card border-white/10">
        <CardHeader>
          <CardTitle className="text-primary">All Admin Accounts</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {accounts.map((account) => (
              <div
                key={account.id}
                className="bg-background/50 p-4 rounded-lg border border-white/10"
              >
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-white font-semibold">{account.username}</p>
                    <p className="text-xs text-muted-foreground mt-1">
                      ID: {account.id} • Created: {new Date(account.createdAt).toLocaleDateString()}
                    </p>
                  </div>
                  {account.username === currentAdmin && (
                    <span className="text-xs bg-primary/20 text-primary px-2 py-1 rounded">
                      Current User
                    </span>
                  )}
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      <div className="bg-destructive/10 border border-destructive/50 rounded-lg p-6">
        <p className="text-sm text-destructive mb-2">⚠️ Security Notice:</p>
        <p className="text-xs text-muted-foreground">
          This system uses localStorage which can be bypassed via browser DevTools. For production use, enable Lovable Cloud for proper server-side authentication.
        </p>
      </div>
    </div>
  );
};

export default AdminSettingsManager;
