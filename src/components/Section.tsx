import React from 'react';
import { motion } from 'motion/react';
import { LucideIcon } from 'lucide-react';

interface SectionProps {
  title: string;
  children: React.ReactNode;
  icon?: LucideIcon;
  id?: string;
  className?: string;
}

export const Section: React.FC<SectionProps> = ({ title, children, icon: Icon, id, className = '' }) => (
  <motion.section 
    id={id}
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, margin: "-100px" }}
    className={`mb-20 scroll-mt-24 ${className}`}
  >
    <div className="section-title flex items-center gap-2 text-xl font-bold mb-8 pb-2 border-b border-gray-100">
      {Icon && <Icon size={20} className="text-blue-500" />}
      {title}
    </div>
    {children}
  </motion.section>
);
