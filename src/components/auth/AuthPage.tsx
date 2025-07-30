import React, { useState } from 'react';
import LoginForm from './LoginForm';
import RegisterForm from './RegisterForm';
import ForgotPasswordForm from './ForgotPasswordForm';

type AuthMode = 'login' | 'register' | 'forgot-password';

const AuthPage: React.FC = () => {
  const [authMode, setAuthMode] = useState<AuthMode>('login');

  const handleLogin = async (email: string, password: string) => {
    // TODO: Implement actual login logic with Supabase
    console.log('Login:', { email, password });
    // Redirect to admin after successful login
    window.location.href = '/admin';
    return Promise.resolve();
  };

  const handleRegister = async (name: string, email: string, password: string) => {
    // TODO: Implement actual registration logic with Supabase
    console.log('Register:', { name, email, password });
    // Redirect to admin after successful registration
    window.location.href = '/admin';
    return Promise.resolve();
  };

  const handleResetPassword = async (email: string) => {
    // TODO: Implement actual password reset logic with Supabase
    console.log('Reset password for:', email);
    // For now, simulate success
    return Promise.resolve();
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-background to-muted/30 flex items-center justify-center p-4">
      <div className="w-full max-w-md">
        {authMode === 'login' && (
          <LoginForm
            onLogin={handleLogin}
            onSwitchToRegister={() => setAuthMode('register')}
            onForgotPassword={() => setAuthMode('forgot-password')}
          />
        )}
        
        {authMode === 'register' && (
          <RegisterForm
            onRegister={handleRegister}
            onSwitchToLogin={() => setAuthMode('login')}
          />
        )}
        
        {authMode === 'forgot-password' && (
          <ForgotPasswordForm
            onResetPassword={handleResetPassword}
            onBackToLogin={() => setAuthMode('login')}
          />
        )}
      </div>
    </div>
  );
};

export default AuthPage;