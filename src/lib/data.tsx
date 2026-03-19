import React from "react";
import { FaAward } from "react-icons/fa";
import { FiUsers } from "react-icons/fi";
import { VscFolderLibrary } from "react-icons/vsc";
import { BsPatchCheckFill } from 'react-icons/bs';
export interface AboutData {
    id: number;
    title: string;
    icon: React.ReactNode;
    description: string;
}

export const data: AboutData[] = [
    {
        id: 1,
        title: "Experience",
        icon: <FaAward className="text-2xl" />, 
        description: "7 months working"
    },
    {
        id: 2,
        title: "Clients",
        icon: <FiUsers className="text-2xl" />,
        description: "2 clients worked with"
    },
    {
        id: 3,
        title: "Projects",
        icon: <VscFolderLibrary className="text-2xl" />,
        description: "3 projects completed"
    }
];

export interface ExperienceData {
    id: number;
    title: string;
    level: string;
    icon: React.ReactNode;
}

export const ex: ExperienceData[] = [
    { id:1, 
      title: 'HTML', 
      level: 'Experienced', 
      icon: <BsPatchCheckFill className="text-cyan-400 mt-1.5 text-sm" /> 
    },
    { id:2, 
      title: 'TailwindCSS', 
      level: 'Experienced', 
      icon: <BsPatchCheckFill className="text-cyan-400 mt-1.5 text-sm" />  
    }, 
    { id:3, 
      title: 'JavaScript', 
      level: 'Intermediate', 
      icon: <BsPatchCheckFill className="text-cyan-400 mt-1.5 text-sm" />  
    },
    { id:4, 
      title: 'ReactJS', 
      level: 'Intermediate', 
      icon: <BsPatchCheckFill className="text-cyan-400 mt-1.5 text-sm" />  
    },
     { id:5, 
      title: 'NextJS', 
      level: 'Intermediate', 
      icon: <BsPatchCheckFill className="text-cyan-400 mt-1.5 text-sm" />  
    },
     { id:6, 
      title: 'TypeScript', 
      level: 'Intermediate', 
      icon: <BsPatchCheckFill className="text-cyan-400 mt-1.5 text-sm" />  
    }
];

export interface ProjectData {
    id: number;
    title: string;
    description: string;
    image: string;
    tech: string[];
    githubLink: string;
    demoLink: string;
}

export const projectData: ProjectData[] = [
  {
    id: 1,
    title: "AJAEQ",
    description: "A responsive landing page.",
    image: "/ajaeqproject.png",
    tech: ["React", "Tailwind CSS", "NextJS"],
    githubLink: "https://github.com/Ayonitemi1001/cyber-app",
    demoLink: "https://cyber-app-one.vercel.app/",
  },
  {
    id: 2,
    title: "Vigil — API Security Dashboard",
    description: "A real-time API health and security monitoring dashboard built for developers.",
    image: "/vigilProject.png",
    tech: ["React", "Tailwind CSS", "NextJS", "TypeScript"],
    githubLink: "https://github.com/Ayonitemi1001/vigil",
    demoLink: "https://vigil-virid.vercel.app/",
  }
];

export interface ServiceData {
    title: string;
    description: string;
    items: string[];
}

export const services: ServiceData[] = [
  {
    title: "Frontend Development",
    description: "Developing high-performance web apps with a focus on real-time data and security.",
    items: [
      "Single Page Applications (SPA)",
      "Performance-optimized Next.js Apps (SSR/ISR)",
      "Scalable Component Systems",
      "State-Driven Navigation & Performance Optimization",
      "Security-First UI"
    ]
  },
  {
    title: "User-Centric Design Systems",
    description: "Transforming designs into pixel-perfect, responsive interfaces with a focus on user experience.",
    items: [
      "Rapid Prototyping with Tailwind & Framer Motion",
      "Mobile-First Approach",
      "Interactive Animations"
    ]
  }
];

export interface ContactData {
    icon: React.ReactNode;
    title: string;
    content: string;
    action: string;
    link: string;
}

export const contactMethods: ContactData[] = [
  {
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8">
        <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
      </svg>
    ),
    title: "Email",
    content: "ogunniranayonitemi3@gmail.com", 
    action: "Send a message",
    link: "mailto:ogunniranayonitemi3@gmail.com",
  },
  {
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8">
        <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
      </svg>
    ),
    title: "Telephone",
    content: "+234 8082919542",
    action: "Give me a call",
    link: "tel:+2348082919542",
  },
  {
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8">
         <path strokeLinecap="round" strokeLinejoin="round" d="M8.625 12a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0H8.25m4.125 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0H12m4.125 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0h-.375M21 12c0 4.556-4.03 8.25-9 8.25a9.764 9.764 0 01-2.555-.337A5.972 5.972 0 015.41 20.97a5.969 5.969 0 01-.474-.065 4.48 4.48 0 00.978-2.025c.09-.457-.133-.901-.467-1.226C3.93 16.178 3 14.189 3 12c0-4.556 4.03-8.25 9-8.25s9 3.694 9 8.25z" />
      </svg>
    ),
    title: "WhatsApp",
    content: "+234 8082919542", 
    action: "Send a DM",
    link: "https://wa.me/2348082919542", 
  }
];