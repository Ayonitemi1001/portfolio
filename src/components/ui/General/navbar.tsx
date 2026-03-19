"use client";

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { BiHomeAlt, BiUser, BiBriefcase, BiCodeAlt, BiMessageSquareDetail } from 'react-icons/bi';

export default function Navbar() {
  const [activeSection, setActiveSection] = useState<string>('');

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
        }
      });
    }, { 
        threshold: 0.3, 
        rootMargin: "-20% 0px -20% 0px" 
    });

    const sections = document.querySelectorAll('section');
    sections.forEach((section) => observer.observe(section));

    return () => {
      sections.forEach((section) => observer.unobserve(section));
    };
  }, []);

  return (
    <nav className="fixed bottom-6 left-1/2 transform -translate-x-1/2 z-50 w-fit">
      
      <div className="bg-black/50 backdrop-blur-2xl border border-white/10 px-5 py-3 rounded-full shadow-2xl flex items-center gap-1 sm:gap-2">
        
        <NavItem href="#herosection" isActive={activeSection === 'herosection'}>
          <BiHomeAlt className="w-5 h-5" />
        </NavItem>

        <NavItem href="#about" isActive={activeSection === 'about'}>
          <BiUser className="w-5 h-5" />
        </NavItem>

        <NavItem href="#service" isActive={activeSection === 'service'}>
           <BiCodeAlt className="w-5 h-5" />
        </NavItem>
       
        <NavItem href="#projects" isActive={activeSection === 'projects'}>
          <BiBriefcase className="w-5 h-5" />
        </NavItem>

        <NavItem href="#contact" isActive={activeSection === 'contact'}>
          <BiMessageSquareDetail className="w-5 h-5" />
        </NavItem>

      </div>
    </nav>
  );
}

function NavItem({ href, children, isActive }: { href: string; children: React.ReactNode; isActive?: boolean }) {
  return (
    <Link 
      href={href}
      className={`transition-all duration-300 p-2 rounded-full active:scale-95 flex flex-col items-center justify-center
        ${isActive 
          ? 'bg-cyan-500/20 text-cyan-400 -translate-y-1 shadow-[0_0_10px_rgba(6,182,212,0.3)]' 
          : 'text-gray-400 hover:text-cyan-400 hover:-translate-y-1 hover:bg-white/10'
        }
      `}
    >
      {children}
    </Link>
  );
}