import { useState, useEffect } from 'react';

interface AdminAccount {
  id: number;
  username: string;
  password: string;
  createdAt: string;
}

export const useAdminAuth = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [currentAdmin, setCurrentAdmin] = useState<string | null>(null);

  useEffect(() => {
    const adminSession = localStorage.getItem('adminSession');
    if (adminSession) {
      const session = JSON.parse(adminSession);
      if (session.expiresAt > Date.now()) {
        setIsAuthenticated(true);
        setCurrentAdmin(session.username);
      } else {
        localStorage.removeItem('adminSession');
      }
    }
  }, []);

  const login = (username: string, password: string): boolean => {
    const accounts = getAdminAccounts();
    const account = accounts.find(
      (acc) => acc.username === username && acc.password === password
    );

    if (account) {
      const session = {
        username: account.username,
        expiresAt: Date.now() + 24 * 60 * 60 * 1000, // 24 hours
      };
      localStorage.setItem('adminSession', JSON.stringify(session));
      setIsAuthenticated(true);
      setCurrentAdmin(account.username);
      return true;
    }
    return false;
  };

  const logout = () => {
    localStorage.removeItem('adminSession');
    setIsAuthenticated(false);
    setCurrentAdmin(null);
  };

  const getAdminAccounts = (): AdminAccount[] => {
    const accounts = localStorage.getItem('adminAccounts');
    if (!accounts) {
      // Initialize with default accounts
      const defaultAccounts: AdminAccount[] = [
        {
          id: 1,
          username: 'admin1',
          password: 'admin123',
          createdAt: new Date().toISOString(),
        },
        {
          id: 2,
          username: 'admin2',
          password: 'admin123',
          createdAt: new Date().toISOString(),
        },
      ];
      localStorage.setItem('adminAccounts', JSON.stringify(defaultAccounts));
      return defaultAccounts;
    }
    return JSON.parse(accounts);
  };

  const updateUsername = (oldUsername: string, newUsername: string): boolean => {
    const accounts = getAdminAccounts();
    const accountIndex = accounts.findIndex((acc) => acc.username === oldUsername);
    
    if (accountIndex !== -1) {
      accounts[accountIndex].username = newUsername;
      localStorage.setItem('adminAccounts', JSON.stringify(accounts));
      
      // Update session
      const session = JSON.parse(localStorage.getItem('adminSession') || '{}');
      session.username = newUsername;
      localStorage.setItem('adminSession', JSON.stringify(session));
      setCurrentAdmin(newUsername);
      return true;
    }
    return false;
  };

  const updatePassword = (username: string, currentPassword: string, newPassword: string): boolean => {
    const accounts = getAdminAccounts();
    const accountIndex = accounts.findIndex(
      (acc) => acc.username === username && acc.password === currentPassword
    );
    
    if (accountIndex !== -1) {
      accounts[accountIndex].password = newPassword;
      localStorage.setItem('adminAccounts', JSON.stringify(accounts));
      return true;
    }
    return false;
  };

  return {
    isAuthenticated,
    currentAdmin,
    login,
    logout,
    getAdminAccounts,
    updateUsername,
    updatePassword,
  };
};
