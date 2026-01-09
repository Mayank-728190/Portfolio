import type {
  NavLink,
  SocialLink,
  SkillCategory,
  Project,
  ResearchCategory,
  Achievement,
  CareerFocusItem,
} from '@/lib/types';
import {
  Github,
  Linkedin,
  Mail,
  Trophy,
  Lightbulb,
  Sparkles,
  Award,
} from 'lucide-react';
import { PlaceHolderImages } from './placeholder-images';

const getImage = (id: string) => {
  const image = PlaceHolderImages.find((img) => img.id === id);
  if (!image) {
    return {
      id: 'placeholder',
      url: 'https://picsum.photos/seed/placeholder/600/400',
      hint: 'placeholder image',
    };
  }
  return { id: image.id, url: image.imageUrl, hint: image.imageHint };
};

export const navLinks: NavLink[] = [
  { href: '#about', label: 'About' },
  { href: '#skills', label: 'Skills' },
  { href: '#projects', label: 'Projects' },
  { href: '#research', label: 'Research' },
  { href: '#achievements', label: 'Achievements' },
  { href: '#contact', label: 'Contact' },
];

export const socialLinks: SocialLink[] = [
  {
    href: 'mailto:mayank@example.com',
    label: 'Email',
    icon: Mail,
  },
  {
    href: 'https://www.linkedin.com/in/mayank-profile',
    label: 'LinkedIn',
    icon: Linkedin,
  },
  { href: 'https://github.com/mayank-profile', label: 'GitHub', icon: Github },
];

export const heroData = {
  name: 'Mayank',
  title: 'AI & Data Science Engineer | Research-Oriented | Smart Systems Builder',
  subtitle:
    'Building intelligent systems at the intersection of AI, research, and real-world impact.',
};

export const aboutData = {
  description:
    "I am a passionate and research-driven 3rd-year B.Tech student in Artificial Intelligence & Data Science with a ~9.0 CGPA. My primary focus is on building intelligent systems that solve real-world problems, particularly in areas of public good and critical infrastructure. I am rigorously preparing for the GATE exam, aiming for a rank under 100 to pursue higher studies and a career in premier research institutions. Currently, I also have a patent in progress related to smart traffic management systems.",
  image: getImage('profile-photo'),
};

export const skillsData: SkillCategory[] = [
  {
    title: 'Core CS',
    skills: ['DSA (C++)', 'Algorithms', 'TOC', 'OS', 'DBMS'],
  },
  {
    title: 'AI / ML',
    skills: [
      'Python',
      'Statistics',
      'Machine Learning',
      'Deep Learning',
      'NLP',
      'GenAI / LLM basics',
    ],
  },
  {
    title: 'Tools & Frameworks',
    skills: [
      'NumPy',
      'Pandas',
      'Scikit-learn',
      'OpenCV',
      'YOLO',
      'Flask',
      'Firebase',
      'Git',
      'LaTeX',
    ],
  },
  {
    title: 'Research & Writing',
    skills: [
      'Academic Writing',
      'Journal Formatting',
      'Literature Review',
      'Experimental Analysis',
    ],
  },
];

export const projectsData: Project[] = [
  {
    title: 'Ambulance Detection & Smart Signal Preemption',
    problem:
      'Emergency vehicles like ambulances lose critical time in traffic congestion, risking patient lives.',
    approach:
      'Developed a system using real-time video feeds from traffic cameras to detect ambulances via a YOLOv5 model. Upon detection, the system communicates with a smart traffic controller to create a "green corridor" by preempting signals.',
    tech: ['Python', 'OpenCV', 'YOLOv5', 'Flask', 'Firebase'],
    impact:
      'Prototype demonstrated a potential 40% reduction in transit time for emergency vehicles through simulated traffic environments. This work is currently under review for publication.',
    status: 'Research',
    image: getImage('ambulance-detection'),
  },
  {
    title: 'Pandemic Prediction System',
    problem:
      'Early and accurate prediction of pandemic outbreaks is crucial for resource allocation and public health strategy.',
    approach:
      'Utilized epidemiological models (like SIR) combined with machine learning techniques on historical and real-time data to forecast infection rates. The model incorporates variables like population density, travel data, and public health interventions.',
    tech: ['Python', 'Pandas', 'Scikit-learn', 'Jupyter'],
    impact:
      'The model and its findings were published as a book chapter, contributing to the academic discussion on data-driven public health.',
    status: 'Published',
    image: getImage('pandemic-prediction'),
  },
  {
    title: 'Drive-Thru AI Assistant',
    problem:
      'Inefficiencies in the drive-thru ordering process lead to longer wait times and order inaccuracies.',
    approach:
      'Conceptualized an AI assistant that uses NLP to take customer orders, upsell items, and confirm the order on a screen. The system integrates with the POS for seamless payment and kitchen order transmission.',
    tech: ['NLP', 'Dialogflow', 'Python', 'API Integration'],
    impact:
      'A prototype was developed to demonstrate core NLP capabilities, showing high accuracy in understanding standard menu orders. The concept aims to improve order speed by 30% and accuracy by 99%.',
    status: 'Prototype',
    image: getImage('drive-thru-ai'),
  },
  {
    title: 'Novel SLR Regression Algorithm',
    problem:
      'Standard Simple Linear Regression (SLR) models have limitations when dealing with specific types of non-linearities or outlier patterns.',
    approach:
      'Developed a novel regression algorithm that modifies the standard SLR cost function to be more robust to certain data anomalies. The algorithm was tested against benchmark datasets to evaluate its performance.',
    tech: ['Python', 'NumPy', 'Statistics', 'Scikit-learn'],
    impact:
      'The completed research shows improved performance in specific scenarios compared to traditional methods. The paper is prepared and ready for submission to a peer-reviewed journal.',
    status: 'Research',
    image: getImage('slr-regression'),
  },
];

export const researchData: ResearchCategory[] = [
  {
    title: 'Published',
    papers: [
      {
        title: 'Big Data Analysis for Urban Infrastructure Planning',
        journal: 'Book Chapter, Springer',
      },
      {
        title: 'A Machine Learning Approach to Predicting the Spread of COVID-19',
        journal: 'Book Chapter, Elsevier',
      },
    ],
  },
  {
    title: 'Under Review',
    papers: [
      {
        title: 'A Real-Time System for Ambulance Detection and Traffic Signal Preemption',
        journal: 'Submitted to IEEE Transactions on Intelligent Transportation Systems',
      },
      {
        title: 'Pythagorean Optimization: A Novel Heuristic for Combinatorial Problems',
        journal: 'Submitted to Journal of Heuristics',
      },
      {
        title: 'Modeling Long-Term Orbital Drift in LEO Satellites using Recurrent Neural Networks',
        journal: 'Submitted to Advances in Space Research',
      },
      {
        title: 'ALE: A Novel Metric for Evaluating Adversarial Latent Embeddings',
        journal: 'Submitted to an International Conference on Machine Learning',
      },
    ],
  },
  {
    title: 'Completed',
    papers: [
      {
        title: 'An Enhanced SLR Regression Algorithm for Robustness Against Outliers',
        journal: 'Ready for Submission',
      },
      {
        title: 'A Systematic Literature Review on the P vs NP Problem: Identifying Research Gaps',
        journal: 'Ready for Submission',
      },
      {
        title: 'A Computational Hypothesis on Information Paradox in Black Hole Physics',
        journal: 'Ready for Submission',
      },
    ],
  },
];

export const achievementsData: Achievement[] = [
  {
    title: 'Smart India Hackathon Finalist',
    description:
      'Reached the final stage of the world\'s biggest hackathon for our project on smart infrastructure.',
    icon: Trophy,
  },
  {
    title: 'Patent in Progress',
    description:
      'Filed a patent for the novel ambulance detection and signal preemption system.',
    icon: Lightbulb,
  },
  {
    title: 'Top 5 in Ideathon 2023',
    description:
      'Our idea for an AI-powered public distribution system was ranked among the top 5 out of 100+ teams.',
    icon: Sparkles,
  },
  {
    title: 'Academic Excellence Award',
    description:
      'Awarded for maintaining a CGPA above 9.0 for four consecutive semesters.',
    icon: Award,
  },
];

export const careerFocusData: CareerFocusItem[] = [
  {
    title: 'GATE 2025',
    description:
      'My immediate goal is to secure a rank within the top 100 in the GATE CSE examination to pursue an M.Tech from a top-tier institute like an IIT or IISc.',
  },
  {
    title: 'Long-term Goals',
    description:
      'I am interested in research and engineering roles in organizations like ISRO, DRDO, or leading PSUs. I am also keen on contributing to high-impact research within academia or corporate R&D labs.',
  },
];
