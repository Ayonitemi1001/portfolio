import React from 'react';

const services = [
  {
    title: "Frontend Development",
    description: "Building fast, interactive web applications using React and Next.js.",
    items: [
      "Single Page Applications (SPA)",
      "Next.js Implementation",
      "Reusable Component Architecture",
      "Client-side Routing"
    ]
  },
  {
    title: "Responsive UI Implementation",
    description: "Translating designs into pixel-perfect, mobile-responsive code.",
    items: [
      "Tailwind CSS Styling",
      "Mobile-First Approach",
      "Interactive Animations"
    ]
  }
//   {
//     title: "API Integration & Optimization",
//     description: "Connecting interfaces to data and ensuring high performance.",
//     items: [
//       "API Data Fetching",
//       "State Management",
//       "Performance Tuning",
//       "Bug Fixing & Debugging"
//     ]
//   }
];

export default function Service() {
  return (
    <section id='service' className="py-20 px-6">
      
      {/* Main Container */}
      <div className="max-w-6xl mx-auto flex flex-col items-center">
        
        {/* Header */}
        <div className='flex flex-col space-y-2 mb-16 text-center'>
            <h2 className='text-gray-400 text-sm font-bold tracking-wider'>
                What I Offer
            </h2>
            <h1 className='text-cyan-500 font-bold text-2xl md:text-2xl'>
                My Services
            </h1>
        </div>

        {/* Cards Wrapper */}
        <div className="flex flex-wrap justify-center gap-8 w-full">
          {services.map((service, index) => (
            <div 
              key={index} 
              className="relative flex-1 min-w-75 max-w-sm bg-blue-900/10 rounded-2xl border border-blue-500/20 overflow-hidden shadow-lg hover:shadow-cyan-500/20 hover:-translate-y-2 transition-all duration-300 group"
            >
              {/* Header Curve Effect */}
              <div className="bg-cyan-950 h-28 rounded-b-[50%] flex items-center justify-center mb-6 group-hover:bg-cyan-900 transition-colors duration-300">
                <h3 className="text-xl font-bold text-white relative -top-3 px-4 text-center">
                  {service.title}
                </h3>
              </div>

              {/* Content */}
              <div className="px-8 pb-10 text-gray-300">
                <p className="text-sm mb-6 text-center text-gray-400 h-10">
                  {service.description}
                </p>
                
                {/* Divider Line */}
                <div className="border-t border-blue-500/30 mb-6"></div>

                <ul className="space-y-4">
                  {service.items.map((item, idx) => (
                    <li key={idx} className="flex items-start text-sm">
                      {/* Custom Bullet Point */}
                      <span className="mr-3 text-cyan-400 font-bold">✓</span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}