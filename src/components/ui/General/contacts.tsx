// components/ContactSection.jsx
import React from 'react';

const contactMethods = [
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

export default function ContactSection() {
  return (
    <section className="py-20 px-6" id="contact">
      <div className="max-w-6xl mx-auto flex flex-col items-center">
        
        {/* Header */}
        <div className='flex flex-col space-y-2 mb-16 text-center'>
            <h2 className='text-gray-400 text-sm font-bold tracking-wider'>
                Get in Touch
            </h2>
            <h1 className='text-cyan-600 font-bold text-2xl md:text-2xl'>
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
              className="bg-cyan-950 p-8 rounded-3xl border border-blue-500/10 hover:border-cyan-500/50 hover:bg-cyan-700/50 hover:-translate-y-2 transition-all duration-300 shadow-lg group flex flex-col items-center text-center cursor-pointer"
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
              <p className="text-gray-300 font-medium mb-6">
                {method.content}
              </p>

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