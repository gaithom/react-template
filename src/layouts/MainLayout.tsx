import React from 'react';

interface MainLayoutProps {
  children: React.ReactNode;
}

export const MainLayout: React.FC<MainLayoutProps> = ({ children }) => {
  return (
    <div className="main-layout">
      <header className="header">
        {/* Header content */}
      </header>
      <main className="main-content">
        {children}
      </main>
      <footer className="footer">
        {/* Footer content */}
      </footer>
    </div>
  );
};
