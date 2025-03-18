
import React from 'react';

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div className="min-h-screen">
      {/* This is a simple layout component that will be expanded later */}
      <main>{children}</main>
    </div>
  );
};

export default Layout;
