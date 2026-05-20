"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import {
  BiHomeAlt,
  BiUser,
  BiBriefcase,
  BiCodeAlt,
  BiMessageSquareDetail,
} from "react-icons/bi";
import { motion } from "framer-motion";

export default function Navbar() {
  const [activeSection, setActiveSection] = useState<string>("");

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      {
        threshold: 0.3,
        rootMargin: "-20% 0px -20% 0px",
      },
    );

    const sections = document.querySelectorAll("section");
    sections.forEach((section) => observer.observe(section));

    return () => {
      sections.forEach((section) => observer.unobserve(section));
    };
  }, []);

  return (
    <nav className="fixed bottom-6 left-1/2 transform -translate-x-1/2 z-50 w-fit">
      <div className="bg-black/30 backdrop-blur-xl border border-white/10 px-5 py-3 rounded-full shadow-2xl flex items-center gap-1 sm:gap-2 relative">
        <NavItem href="#herosection" isActive={activeSection === "herosection"}>
          <BiHomeAlt className="w-5 h-5 relative z-10" />
        </NavItem>

        <NavItem href="#about" isActive={activeSection === "about"}>
          <BiUser className="w-5 h-5 relative z-10" />
        </NavItem>

        <NavItem href="#service" isActive={activeSection === "service"}>
          <BiCodeAlt className="w-5 h-5 relative z-10" />
        </NavItem>

        <NavItem href="#projects" isActive={activeSection === "projects"}>
          <BiBriefcase className="w-5 h-5 relative z-10" />
        </NavItem>

        <NavItem href="#contact" isActive={activeSection === "contact"}>
          <BiMessageSquareDetail className="w-5 h-5 relative z-10" />
        </NavItem>
      </div>
    </nav>
  );
}

function NavItem({
  href,
  children,
  isActive,
}: {
  href: string;
  children: React.ReactNode;
  isActive?: boolean;
}) {
  return (
    <Link
      href={href}
      className={`relative transition-colors duration-300 p-3 rounded-full flex flex-col items-center justify-center
        ${isActive ? "text-cyan-400" : "text-gray-400 hover:text-white"}
      `}
    >
      {isActive && (
        <motion.div
          layoutId="nav-pill"
          className="absolute inset-0 bg-cyan-500/20 rounded-full border border-cyan-500/30 shadow-[0_0_15px_rgba(6,182,212,0.4)]"
          transition={{ type: "spring", stiffness: 350, damping: 30 }}
        />
      )}
      {children}
    </Link>
  );
}
