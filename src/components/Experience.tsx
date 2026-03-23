import React from 'react';
import { MapPin, Calendar, Briefcase, FileText } from 'lucide-react';
import { Section } from './Section';
import { resumeData } from '../data/resume';
import { Experience as ExperienceType } from '../types';

const ExperienceItem: React.FC<ExperienceType> = ({ company, role, location, period, description, projects }) => (
  <div className="mb-12 group">
    <div className="flex flex-col md:flex-row md:items-center justify-between mb-4">
      <div>
        <h3 className="text-xl font-bold text-gray-900 flex flex-wrap items-center gap-2">
          {company} <span className="text-gray-300 font-normal hidden sm:inline">|</span> <span className="text-gray-600 font-medium">{role}</span>
        </h3>
      </div>
      <div className="flex flex-wrap items-center gap-4 text-sm text-gray-400 mt-2 md:mt-0">
        <span className="flex items-center gap-1"><MapPin size={14} /> {location}</span>
        <span className="flex items-center gap-1"><Calendar size={14} /> {period}</span>
      </div>
    </div>
    {description && <p className="text-gray-600 mb-4 leading-relaxed">{description}</p>}
    <div className="space-y-6">
      {projects.map((project, idx) => (
        <div key={idx} className="pl-4 border-l-2 border-gray-100 group-hover:border-blue-100 transition-colors">
          <h4 className="font-bold text-gray-800 mb-2">{project.title}</h4>
          <p className="text-gray-600 text-sm leading-relaxed whitespace-pre-line">{project.content}</p>
        </div>
      ))}
    </div>
  </div>
);

export const ExperienceList: React.FC = () => {
  return (
    <>
      <Section id="experience" title="工作经历" icon={Briefcase}>
        {resumeData.experience.map((exp, idx) => (
          <ExperienceItem key={idx} {...exp} />
        ))}
      </Section>

      <Section title="实习与助教经历" icon={FileText}>
        {resumeData.internships.map((exp, idx) => (
          <ExperienceItem key={idx} {...exp} />
        ))}
      </Section>
    </>
  );
};
