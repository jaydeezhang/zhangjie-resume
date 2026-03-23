export interface Project {
  title: string;
  content: string;
}

export interface Experience {
  company: string;
  role: string;
  location: string;
  period: string;
  description?: string;
  projects: Project[];
}

export interface SkillCategory {
  title: string;
  icon: string; // We'll map string to icon component later
  items: string[];
  color: string;
}

export interface ResumeData {
  personalInfo: {
    name: string;
    role: string;
    experienceYears: number;
    avatarUrl: string;
    about: string[];
    contact: {
      email: string;
      phone: string;
      wechat: string;
      linkedin: string;
    };
  };
  education: {
    school: string;
    degree: string;
    period: string;
  }[];
  experience: Experience[];
  internships: Experience[];
  skills: SkillCategory[];
  patents: string[];
  awards: {
    title: string;
    description: string;
  }[];
  certificates: string[];
}
