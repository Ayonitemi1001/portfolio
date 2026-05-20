// components/ContactSection.jsx
import React from "react";
import { contactMethods } from "@/lib/data";
export default function ContactSection() {
  return (
    <section className="py-20 px-6" id="contact">
      <div className="max-w-6xl mx-auto flex flex-col items-center">
        {/* Header */}
        <div className="flex flex-col space-y-2 mb-16 text-center">
          <h2 className="text-gray-400 text-sm font-bold tracking-wider">
            Get in Touch
          </h2>
          <h1 className="text-cyan-600 font-bold text-2xl md:text-2xl">
            Contact Me
          </h1>
        </div>

        {/* Contact Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 w-full max-w-5xl">
          {contactMethods.map((method, index) => (
            <a
              key={index}
              href={method.link}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white/5 backdrop-blur-md p-8 rounded-3xl border border-white/10 hover:border-cyan-400/50 hover:bg-white/10 hover:-translate-y-2 hover:shadow-[0_0_30px_rgba(6,182,212,0.2)] transition-all duration-500 group flex flex-col items-center text-center cursor-pointer"
            >
              {/* Icon */}
              <div className="mb-4 text-white group-hover:text-cyan-400 transition-colors duration-300">
                {method.icon}
              </div>

              {/* Title */}
              <h3 className="text-xl font-bold text-white mb-2">
                {method.title}
              </h3>

              {/* Content (Phone/Email text) */}
              <p className="text-gray-300 font-medium mb-6">{method.content}</p>

              {/* Action Link Text */}
              <span className="text-cyan-500 font-semibold text-sm group-hover:underline decoration-cyan-500 underline-offset-4">
                {method.action}
              </span>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
