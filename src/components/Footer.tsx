import React from 'react';

export const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="py-12 border-t border-gray-100 text-center text-gray-400 text-xs tracking-widest uppercase">
      © {currentYear} JIE ZHANG. DESIGNED WITH PRECISION.
    </footer>
  );
};
