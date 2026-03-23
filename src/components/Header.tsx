import React from 'react';

export const Header: React.FC = () => {
  return (
    <header className="fixed top-0 w-full z-50 glass border-b border-gray-100">
      <div className="max-w-5xl mx-auto px-6 h-16 flex items-center justify-between">
        <div className="font-bold text-xl tracking-tighter">JIE ZHANG <span className="text-blue-500">.</span></div>
        <nav className="hidden md:flex items-center gap-8 text-sm font-medium text-gray-500">
          <a href="#about" className="hover:text-black transition-colors">关于</a>
          <a href="#experience" className="hover:text-black transition-colors">经历</a>
          <a href="#skills" className="hover:text-black transition-colors">技能</a>
          <a href="#others" className="hover:text-black transition-colors">其他</a>
        </nav>
      </div>
    </header>
  );
};
