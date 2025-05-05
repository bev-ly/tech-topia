import React, { createContext, useContext, useState, useEffect } from 'react';
import { User, Order } from '../types';
import { sampleOrders } from '../data/orders';

interface AuthContextType {
  user: User | null;
  login: (email: string, password: string) => Promise<boolean>;
  logout: () => void;
  isAuthenticated: boolean;
  updateUserOrders: (updatedOrders: Order[]) => void;
}

// Sample user data
const sampleUser: User = {
  id: 'user-1',
  name: 'John Doe',
  email: 'john@example.com',
  orders: sampleOrders,
};

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [user, setUser] = useState<User | null>(() => {
    const savedUser = localStorage.getItem('user');
    return savedUser ? JSON.parse(savedUser) : null;
  });

  const isAuthenticated = !!user;

  useEffect(() => {
    if (user) {
      localStorage.setItem('user', JSON.stringify(user));
    } else {
      localStorage.removeItem('user');
    }
  }, [user]);

  const login = async (email: string, password: string): Promise<boolean> => {
    // In a real app, you would validate credentials against a backend
    // For this demo, we'll just check if the email matches our sample user
    if (email === sampleUser.email) {
      // Simulate network request
      await new Promise((resolve) => setTimeout(resolve, 500));
      setUser(sampleUser);
      return true;
    }
    return false;
  };

  const logout = () => {
    setUser(null);
  };

  const updateUserOrders = (updatedOrders: Order[]) => {
    if (user) {
      setUser({
        ...user,
        orders: updatedOrders,
      });
    }
  };

  return (
    <AuthContext.Provider value={{ user, login, logout, isAuthenticated, updateUserOrders }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = (): AuthContextType => {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};