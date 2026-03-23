import React from 'react';
import { Cpu, Palette, Code, LineChart } from 'lucide-react';
import { Section } from './Section';
import { resumeData } from '../data/resume';

const iconMap: Record<string, any> = {
  Palette,
  Cpu,
  Code,
  LineChart
};

const colorMap: Record<string, string> = {
  blue: 'text-blue-500',
  orange: 'text-orange-500',
  green: 'text-green-500',
  purple: 'text-purple-500'
};

export const Skills: React.FC = () => {
  return (
    <Section id="skills" title="个人技能" icon={Cpu}>
      <div className="bg-white p-6 md:p-8 rounded-3xl border border-gray-100 mb-12 shadow-sm">
        {resumeData.personalInfo.about.map((paragraph, idx) => (
          <p key={idx} className={`text-gray-600 leading-relaxed ${idx < resumeData.personalInfo.about.length - 1 ? 'mb-6' : ''}`}>
            {paragraph}
          </p>
        ))}
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {resumeData.skills.map((skill, idx) => {
          const Icon = iconMap[skill.icon];
          const colorClass = colorMap[skill.color] || 'text-blue-500';
          
          return (
            <div key={idx} className="p-6 bg-white rounded-2xl border border-gray-100 shadow-sm hover:shadow-md transition-shadow">
              <div className={`flex items-center gap-3 mb-6 ${colorClass}`}>
                {Icon && <Icon size={20} />}
                <h4 className="font-bold text-gray-900">{skill.title}</h4>
              </div>
              <div className="flex flex-wrap gap-2">
                {skill.items.map((item, itemIdx) => (
                  <span key={itemIdx} className="px-3 py-1.5 bg-gray-50 text-gray-600 text-xs rounded-lg border border-gray-100">
                    {item}
                  </span>
                ))}
              </div>
            </div>
          );
        })}
      </div>
    </Section>
  );
};
