import React from 'react';
import { Award, ChevronRight } from 'lucide-react';
import { Section } from './Section';
import { resumeData } from '../data/resume';

export const Awards: React.FC = () => {
  return (
    <div id="others" className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 scroll-mt-24">
      <Section title="专利" icon={Award}>
        <div className="bg-blue-50/50 p-6 rounded-2xl border border-blue-100 h-full">
          <p className="text-sm text-blue-800 mb-4 font-medium">在百度工作期间，作为第一发明人获得过三项由中国专利局颁发的外观设计专利</p>
          <ul className="space-y-2 text-sm text-blue-600 font-mono">
            {resumeData.patents.map((patent, idx) => (
              <li key={idx}>• {patent}</li>
            ))}
          </ul>
        </div>
      </Section>

      <Section title="获奖经历" icon={Award}>
        <ul className="space-y-4">
          {resumeData.awards.map((award, idx) => (
            <li key={idx} className="flex items-start gap-3">
              <ChevronRight size={16} className="mt-1 text-blue-500 shrink-0" />
              <div>
                <p className="font-bold text-gray-900">{award.title}</p>
                <p className="text-sm text-gray-600">{award.description}</p>
              </div>
            </li>
          ))}
        </ul>
      </Section>
    </div>
  );
};
