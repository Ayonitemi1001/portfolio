import React from 'react'
import { data } from '@/lib/data'
import { Card } from '../card'
import { BiMessageSquareDetail } from "react-icons/bi"
import FloatIn from '../floatIn'

export default function About() {
  return (
    <div id='about' className='relative z-10 flex flex-col justify-center items-center mt-20 md:mt-40'>
                    <div className='flex flex-col space-y-2 mb-10 text-center'>
                        <h2 className='text-gray-500 text-sm font-bold tracking-wide ml-3'>Get to know</h2>
                        <h1 className='text-cyan-600 font-bold text-2xl'>About me</h1>
                    </div>

                    <div className='grid grid-cols-1 md:grid-cols-3 gap-6 mb-5'>
                        {data.map((about, index) => (
                            <FloatIn 
                                key={about.id} 
                                delay={index * 0.4}
                            >
                                <Card 
                                    className='bg-cyan-950 h-55 w-40 p-7 mx-auto text-white rounded-4xl flex flex-col items-center justify-center gap-3 transition-colors hover:bg-transparent border-transparent border hover:border-[#1e86b9] space-y-5'
                                >
                                    <div className='text-cyan-400'>{about.icon}</div>
                                    
                                    <div className='font-semibold'>{about.title}</div>
                                    <div className='text-xs text-gray-300 text-center'>{about.description}</div>
                                </Card>
                            </FloatIn>
                        ))}
                    </div>

                <div className='w-full px-8 md:px-0 md:max-w-2xl mx-auto text-center mt-8 md:mt-12 text-gray-400 leading-relaxed text-sm md:text-base'>
                <p className='mb-4'>
                    My name is Ayonitemi Ogunniran. I am a Frontend Developer specializing in building responsive, secure web applications using <span className="text-cyan-400 font-semibold">React, Next.js, and TypeScript</span>.
                </p>
                <p className='mb-4'>
                    I have a strong command of HTML, CSS, <span className="text-cyan-400 font-semibold">Tailwind CSS</span>, and version control with <span className="text-cyan-400 font-semibold">Git</span>. I can work independently but also thrive as a team player, always eager to learn new technologies.
                </p>
                <p>
                    My career goal is to continuously strive for excellence and contribute meaningfully to the growth of any organization I join. I value structure and clean workflows. Outside of coding, I enjoy listening to music and playing football.
                </p>
            </div>

                    <div className="mt-6 md:mt-10">
                <a 
                    href="#contact" 
                    className="group flex items-center gap-2 px-5 py-2.5 md:px-6 md:py-3 text-sm md:text-base border border-cyan-800 text-cyan-400 rounded-full font-medium transition-all hover:bg-cyan-800 hover:text-white active:scale-95"
                >
                    Let&apos;s Talk
                    <BiMessageSquareDetail className="text-lg md:text-xl group-hover:scale-110 transition-transform" />
                </a>
            </div>
    </div>
  )
}