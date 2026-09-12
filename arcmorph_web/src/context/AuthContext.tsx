import React, { createContext, useContext, useState, useEffect } from 'react';

export interface User {
  username: string;
  name: string;
  role: string;
  avatar: string;
}

interface AuthContextType {
  user: User | null;
  isAuthenticated: boolean;
  login: (username: string, password: string) => { success: boolean; message?: string };
  logout: () => void;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [user, setUser] = useState<User | null>(() => {
    try {
      const saved = localStorage.getItem('ARCMORPH_AUTH_USER');
      return saved ? JSON.parse(saved) : {
        username: 'admin',
        name: 'Administrator',
        role: 'Chief Modernization Architect',
        avatar: '/assets/images/users/user-1.jpg'
      };
    } catch {
      return null;
    }
  });

  const login = (username: string, password: string) => {
    if (username.trim().toLowerCase() === 'admin' && password === 'password123') {
      const newUser: User = {
        username: 'admin',
        name: 'Administrator',
        role: 'Chief Modernization Architect',
        avatar: '/assets/images/users/user-1.jpg'
      };
      setUser(newUser);
      localStorage.setItem('ARCMORPH_AUTH_USER', JSON.stringify(newUser));
      return { success: true };
    }
    return { success: false, message: 'Invalid credentials. Default is admin / password123' };
  };

  const logout = () => {
    setUser(null);
    localStorage.removeItem('ARCMORPH_AUTH_USER');
  };

  return (
    <AuthContext.Provider value={{ user, isAuthenticated: !!user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = (): AuthContextType => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};
