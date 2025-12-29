// import React from 'react'
// import Image from 'next/image'
// import bgImage from '../../public/portfoliobackground.jpg'
// import Herosection from '@/components/ui/General/herosection'
// import Photo from '@/components/ui/General/photo'
// import About from '@/components/ui/General/about'



// export default function Portfolio() {
//   return (
//     <div className='relative min-h-screen w-full overflow-hidden'>
//         <div className="absolute inset-0 z-0">
//          <Image 
//            src={bgImage} 
//            alt="Background"
//            fill
//            className="object-cover object-center"
//            priority 
//          />
//          {/* 2. The Overlay - Crucial for readability */}
//          <div className="absolute inset-0 bg-slate-900/50"></div> 
//       </div>
//       <Herosection/>
//       <Photo/>
//       <About/>

      
//     </div>
//   )
// }

import React from 'react'
import { Roboto } from 'next/font/google'
import Image from 'next/image'
import bgImage from '../../public/portfoliobackground.jpg'
import Herosection from '@/components/ui/General/herosection'
import Photo from '@/components/ui/General/photo'
import About from '@/components/ui/General/about'
import Experience from '@/components/ui/General/experience'
import Service from '@/components/ui/General/service'
import Projects from '@/components/ui/General/projects'
import Contacts from '@/components/ui/General/contacts'
import Footer from '@/components/ui/General/footer'
import NavBar from '@/components/ui/General/navbar'






const roboto = Roboto({
  subsets: ['latin'],
  weight: ['400', '500', '700'], 
})

export default function Portfolio() {
  return (
    <div className={`relative min-h-screen w-full ${roboto.className}`}>
        {/* 1. CHANGED 'absolute' to 'fixed'. 
           This keeps the background static while the rest of the page scrolls over it.
           It prevents the image from distorting on long mobile pages.
        */}
        <div className="fixed inset-0 z-0">
         <Image 
           src={bgImage} 
           alt="Background"
           fill
           // 2. Responsive Object Position:
           // 'object-[65%]' shifts the image slightly on mobile (tweak this % to focus on the main subject)
           // 'md:object-center' centers it perfectly on desktop
           className="object-cover object-[65%] md:object-center"
           priority 
         />
         <div className="absolute inset-0 bg-slate-900/50"></div> 
      </div>

      {/* 3. Content Wrapper */}
      {/* We wrap the content in a relative div so it sits ON TOP of the fixed background */}
      <div className='relative z-10'>
          <Herosection/>
          <Photo/>
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