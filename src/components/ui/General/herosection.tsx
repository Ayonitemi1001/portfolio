import React from 'react'
import TypingAnimation from "@/components/ui/typing-animation"


export default function HeroSection() {
  return (
    <section id='herosection' className='relative z-10 flex h-full items-center justify-center mt-30'>
      
      <div className='flex flex-col items-center text-center text-white space-y-4'>
        
        <h3 className='text-slate-400 text-md md:text-lg font-medium tracking-wide'>
          Hello I&apos;m
        </h3>
        
        <h1 className='text-3xl md:text-5xl font-light'>
          Ayonitemi Ogunniran
        </h1>
        
        <TypingAnimation
         className='text-lg md:text-xl text-gray-500'
         text= 'Frontend Developer'
         duration={100}
         />
        
        

       <a 
            href="/cv.pdf" 
            download="Ayonitemi_CV.pdf"
            className="inline-block bg-transparent border-2 border-[#1e86b9] text-[#4a6d7e] hover:bg-white hover:text-gray-900 hover:border-transparent rounded-lg px-8 py-4 text-md tracking-wide cursor-pointer transition-all duration-300"
            >
                Download CV
        </a>
      </div>
      
      
    </section>
  )
}