export interface Resume {
  language: ResumeLanguage;
  data: ResumeData;
}

export interface ResumeLanguage {
  code: string;
  abbreviation: string;
  countryCode: string;
  name: string;
  countryName: string;
  flag: string;
  dateFormat: string;
}

export interface ResumeData {
  firstName: string;
  lastName: string;
  role: string;
  location: string;
  email: string;
  phone: string;
  social: Social;
  about: string;
  education: Array<Education>;
  experience: Array<Experience>;
  skills: Array<Skill>;
  languages: Array<Language>;
  interests: Array<string>;
  certifications: Array<Certification>;
}

export interface Social {
  linkedin?: string;
  github?: string;
}

export interface Education {
  institution: string;
  course: string;
  startDate: string;
  endDate: string;
  description: string;
}

export interface Experience {
  company: string;
  role: string;
  startDate: string;
  endDate: string;
  description: string;
}

export interface Skill {
  name: string;
  level: string;
}

export interface Language {
  name: string;
  level: string;
}

export interface Certification {
  name: string;
  institution: string;
  date: string;
}
