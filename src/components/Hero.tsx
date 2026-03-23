import React from 'react';
import { motion } from 'motion/react';
import { Mail, Phone, Linkedin } from 'lucide-react';
import { resumeData } from '../data/resume';

export const Hero: React.FC = () => {
  const { personalInfo, education } = resumeData;

  return (
    <section id="about" className="mb-32">
      <div className="flex flex-col md:flex-row gap-12 items-start">
        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          className="relative w-full md:w-auto flex justify-center"
        >
          <div className="w-48 h-64 bg-gray-200 rounded-2xl overflow-hidden shadow-2xl relative z-10">
            <img 
              src={personalInfo.avatarUrl} 
              alt={personalInfo.name} 
              className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700"
              referrerPolicy="no-referrer"
            />
          </div>
          <div className="absolute -bottom-4 -right-4 md:right-[-16px] w-48 h-64 border-2 border-blue-500 rounded-2xl -z-0"></div>
        </motion.div>

        <div className="flex-1">
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
          >
            <h1 className="text-5xl md:text-6xl font-black tracking-tighter mb-4 text-gray-900">{personalInfo.name}</h1>
            <div className="flex flex-wrap items-center gap-4 mb-8">
              <span className="px-3 py-1 bg-black text-white text-xs font-bold rounded-full">{personalInfo.experienceYears}年工作经验</span>
              <span className="text-gray-400 text-sm font-medium tracking-widest uppercase">求职意向：{personalInfo.role}</span>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h4 className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-4">教育背景</h4>
                <div className="space-y-4">
                  {education.map((edu, idx) => (
                    <div key={idx}>
                      <p className="font-bold text-gray-900">{edu.school}</p>
                      <p className="text-sm text-gray-600">{edu.degree}</p>
                      <p className="text-xs text-gray-400">{edu.period}</p>
                    </div>
                  ))}
                </div>
              </div>
              
              <div id="contact">
                <h4 className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-4">联系信息</h4>
                <div className="space-y-3 text-sm break-all">
                  <a href={`mailto:${personalInfo.contact.email}`} className="flex items-center gap-3 text-gray-600 hover:text-blue-500 transition-colors">
                    <Mail size={16} className="shrink-0" /> {personalInfo.contact.email}
                  </a>
                  <div className="flex items-center gap-3 text-gray-600">
                    <Phone size={16} className="shrink-0" /> {personalInfo.contact.phone}
                  </div>
                  <div className="flex items-center gap-3 text-gray-600">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="shrink-0">
                      <path d="M17 10c.1-2.2-1.6-4.1-3.8-4.3-2.3-.2-4.3 1.4-4.5 3.7-.1 1.1.3 2.1 1 3l-1 3 3-1c.8.4 1.7.6 2.6.5 2.2-.1 4-2 3.9-4.2z"/>
                      <path d="M9 14c.1-1.7-1.1-3.1-2.7-3.3-1.6-.2-3.1 1-3.3 2.7-.1.8.2 1.6.7 2.2l-.7 2.3 2.3-.7c.6.3 1.3.4 2 .4 1.7-.1 3-1.5 2.9-3.2z"/>
                    </svg>
                    {personalInfo.contact.wechat} (WeChat)
                  </div>
                  <a href={`https://${personalInfo.contact.linkedin}`} target="_blank" rel="noreferrer" className="flex items-center gap-3 text-gray-600 hover:text-blue-500 transition-colors">
                    <Linkedin size={16} className="shrink-0" /> {personalInfo.contact.linkedin}
                  </a>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
