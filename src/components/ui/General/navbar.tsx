import React from 'react';
import Link from 'next/link';
import { BiHomeAlt, BiUser, BiBriefcase, BiCodeAlt, BiMessageSquareDetail } from 'react-icons/bi';

export default function Navbar() {
  return (
    <nav className="fixed bottom-6 left-1/2 transform -translate-x-1/2 z-50 w-fit">
      
      <div className="bg-black/50 backdrop-blur-2xl border border-white/10 px-5 py-3 rounded-full shadow-2xl flex items-center gap-1 sm:gap-2">
        
        {/* 1. Home */}
        <NavItem href="#home">
          <BiHomeAlt className="w-5 h-5" />
        </NavItem>

        {/* 2. About */}
        <NavItem href="#about">
          <BiUser className="w-5 h-5" />
        </NavItem>

        {/* 3. Projects */}
        <NavItem href="#projects">
          <BiBriefcase className="w-5 h-5" />
        </NavItem>

        {/* 4. Services */}
        <NavItem href="#service">
           <BiCodeAlt className="w-5 h-5" />
        </NavItem>

        {/* 5. Contact */}
        <NavItem href="#contact">
          <BiMessageSquareDetail className="w-5 h-5" />
        </NavItem>

      </div>
    </nav>
  );
}

function NavItem({ href, children }: { href: string; children: React.ReactNode }) {
  return (
    <Link 
      href={href}
      className="text-gray-400 hover:text-cyan-400 hover:-translate-y-1 transition-all duration-300 p-2 rounded-full hover:bg-white/10 active:scale-95 flex flex-col items-center justify-center"
    >
      {children}
    </Link>
  );
}