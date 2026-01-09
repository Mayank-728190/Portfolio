export type NavLink = {
  href: string;
  label: string;
};

export type SocialLink = {
  href: string;
  label: string;
  icon: React.ElementType;
};

export type SkillCategory = {
  title: string;
  skills: string[];
};

export type Project = {
  title: string;
  problem: string;
  approach: string;
  tech: string[];
  impact: string;
  status: 'Published' | 'Prototype' | 'Research' | 'Concept';
  image: {
    id: string;
    url: string;
    hint: string;
  };
  link?: string;
};

export type Publication = {
  title: string;
  journal: string;
};

export type ResearchCategory = {
  title: string;
  papers: Publication[];
};

export type Achievement = {
  title: string;
  description: string;
  icon: React.ElementType;
};

export type CareerFocusItem = {
  title: string;
  description: string;
};
