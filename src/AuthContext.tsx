import React, { useState, createContext, useContext, ReactNode } from 'react';

interface AuthContextType {
  isAuthenticated: boolean;
  token: string | null;
  userId: string | null;
  login: (token: string, id: string) => void;
  logout: () => void;
}

const AuthContext = createContext<AuthContextType>(null!);

export const AuthProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [token, setToken] = useState<string | null>(null);
  const [userId, setUserId] = useState<string | null>(null);

  const login = (newToken: string, id: string) => {
    setIsAuthenticated(true);
    setToken(newToken);
    setUserId(id);
    // Additional logic to store the token securely (e.g., AsyncStorage)
  };

  const logout = () => {
    setIsAuthenticated(false);
    setToken(null);
    setUserId(null);
    // Additional logout logic
  };

  return (
    <AuthContext.Provider value={{ isAuthenticated, token, userId, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
