// import React from 'react'
// import Image from 'next/image'
// import MyImage from '../../../../public/myphoto.png' 

// export default function Photo() {
//   return (
//     <div className='relative z-10 flex justify-center items-center mt-12 md:mt-20 mb-10'>
        
       
//         <div className='bg-[#08384d] w-65 h-65 md:w-80 md:h-80 lg:w-80 lg:h-80 rounded-t-full rounded-b-3xl flex items-end justify-center overflow-hidden shadow-lg transition-all duration-300 ease-in-out '> 
//             <Image
//                 src={MyImage}
//                 alt='my picture'
//                 className="w-full h-auto object-cover opacity-70 mix-blend-normal" 
//                 priority
//             />
//         </div>
//     </div>
//   )
// }

import React from 'react'
import Image from 'next/image'
import MyImage from '../../../../public/myphoto.png' 

export default function Photo() {
  return (
    <div className='relative z-10 flex justify-center items-center mt-12 md:mt-20 mb-10'>
        
        {/* OPTIONAL: A faint glow behind the entire component to separate it from the page background */}
        <div className="absolute w-64 h-64 bg-cyan-500/20 blur-[80px] rounded-full pointer-events-none"></div>

        <div className='
            relative
            w-52 h-52 md:w-80 md:h-80 lg:w-80 lg:h-80 
            bg-linear-to-b from-[#1e86b9]/20 to-[#08384d]
            rounded-t-full rounded-b-[2rem] 
            flex items-end justify-center 
            overflow-hidden 
            border-2 border-cyan-500/30
            shadow-[0_0_30px_rgba(30,134,185,0.3)]
            transition-all duration-500 ease-in-out 
            hover:scale-[1.02] hover:shadow-[0_0_50px_rgba(30,134,185,0.5)] hover:border-cyan-500/50
        '> 
            <Image
                src={MyImage}
                alt='Ayonitemi Ogunniran'
                className="w-full h-full object-cover object-top mix-blend-normal" 
                priority
            />
            
            <div className="absolute inset-0 bg-linear-to-t from-[#08384d] via-transparent to-transparent opacity-40"></div>
        </div>
    </div>
  )
}