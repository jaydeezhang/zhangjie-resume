import React from 'react';
import { FileText } from 'lucide-react';
import { Section } from './Section';
import { resumeData } from '../data/resume';

export const Certificates: React.FC = () => {
  return (
    <Section title="其他证书" icon={FileText}>
      <div className="flex flex-wrap gap-4">
        {resumeData.certificates.map((cert, idx) => (
          <div key={idx} className="px-6 py-4 bg-white rounded-xl border border-gray-100 shadow-sm flex items-center gap-3 hover:shadow-md transition-shadow">
            <div className="w-2 h-2 rounded-full bg-green-500"></div>
            <span className="font-medium text-gray-700">{cert}</span>
          </div>
        ))}
      </div>
    </Section>
  );
};
