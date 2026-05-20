import React from 'react'
import { Roboto } from 'next/font/google'
import Image from 'next/image'
import bgImage from '../../public/portfoliobackground.jpg'
import Herosection from '@/components/ui/General/herosection'
// import Photo from '@/components/ui/General/photo'
import About from '@/components/ui/General/about'
import Experience from '@/components/ui/General/experience'
import Service from '@/components/ui/General/service'
import Projects from '@/components/ui/General/projects'
import Contacts from '@/components/ui/General/contacts'
import Footer from '@/components/ui/General/footer'
import NavBar from '@/components/ui/General/navbar'
import AnimatedBackground from '@/components/ui/Design System/animated-background'






const roboto = Roboto({
  subsets: ['latin'],
  weight: ['400', '500', '700'], 
})

export default function Portfolio() {
  return (
    <div className={`relative min-h-screen w-full ${roboto.className}`}>
        <div className="fixed inset-0 z-0 bg-slate-950">
         <Image 
           src={bgImage} 
           alt="Background"
           fill
           className="object-cover object-[65%] md:object-center opacity-50 mix-blend-luminosity"
           priority 
         />
         <div className="absolute inset-0 bg-slate-950/70"></div> 
         <AnimatedBackground />
      </div>

      <div className='relative z-10'>
          <Herosection/>
          <About/>
          <Experience/>
          <Service/>
          <Projects/>
          <Contacts/>
          <Footer/>
          <NavBar/>
      </div>

    </div>
  )
}