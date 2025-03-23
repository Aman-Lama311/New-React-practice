import React from 'react'
import { DiDart, DiGithub, DiGo, DiJava, DiJavascript, DiNodejs, DiPython, DiReact, DiRuby } from 'react-icons/di'



export default function Tech() {
  return (
    <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 justify-items-center'>

      <DiReact className='hover:text-red-500 hover:scale-120 transition-all cursor-pointer' size={150} />
      <DiPython className='hover:text-red-500 hover:scale-120 transition-all cursor-pointer' size={150} />
      <DiJavascript className='hover:text-red-500 hover:scale-120 transition-all cursor-pointer' size={150} />
      <DiNodejs className='animate-bounce hover:text-red-500 hover:scale-120 transition-all cursor-pointer' size={150} />
      <DiDart className='hover:text-red-500 hover:scale-120 transition-all cursor-pointer' size={150} />
      <DiJava className='hover:text-red-500 hover:scale-120 transition-all cursor-pointer' size={150} />
      <DiGithub className='hover:text-red-500 hover:scale-120 transition-all cursor-pointer' size={150} />
      <DiGo className='hover:text-red-500 hover:scale-120 transition-all cursor-pointer' size={150} />
      <DiRuby className='hover:text-red-500 hover:scale-120 transition-all cursor-pointer' size={150} />

    </div>
  )
}
