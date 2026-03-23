import React from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { ExperienceList } from './components/Experience';
import { Skills } from './components/Skills';
import { Awards } from './components/Awards';
import { Certificates } from './components/Certificates';
import { Footer } from './components/Footer';

export default function App() {
  return (
    <div className="min-h-screen tech-grid font-sans text-gray-900 bg-white">
      <Header />

      <main className="max-w-5xl mx-auto px-6 pt-24 md:pt-32 pb-20">
        <Hero />
        <ExperienceList />
        <Skills />
        <Awards />
        <Certificates />
      </main>

      <Footer />
    </div>
  );
}
