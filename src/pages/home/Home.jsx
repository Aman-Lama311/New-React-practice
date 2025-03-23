import React from 'react';
import { DotLottieReact } from '@lottiefiles/dotlottie-react';
import Tech from './Tech';


const Home = () => {
  return (
    <div>
    <div className='flex flex-col md:flex-row items-center justify-center px-4 md:px-0'>
      <div className='w-full md:w-[50%] '>
        <DotLottieReact
        src="https://lottie.host/53654593-87fa-45e6-bb0f-bed4ca4c2f5a/FVR6yh8pzl.lottie"
        loop
        autoplay
        />
      </div>
      <div className='w-full md:w-[50%]'>
        <h1 className='text-3xl font-bold'>Hi, I' m Fullstack Developer</h1>
        <p className='text-xl text-blue-500'>Some dev, freelancer, All Rounder</p>
        <p className='text-lg'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Officia sapiente deleniti saepe. Consequatur ea beatae illum vel voluptates, totam, eius deleniti excepturi alias, nihil quisquam repudiandae.</p>
      </div>
    </div>
    <h1 className='text-3xl font-bold text-center py-5'>Tech Stack</h1>
    <Tech />
    <h1 className='text-3xl font-bold text-center py-5'>Who am i</h1>
    <div className='w-[350px] h-[350px] sm:w-[400px] sm:h-[400px] rounded-full bg-black border-4 border-green-500 mx-auto flex items-center justify-center text-white flex-col'>
      <div>
     <p className='text-lg'>Name: Some dev</p>
     <p className='text-lg'>Email: example@gmail.com</p>
     <p className='text-lg'>Phone: 9800000000</p>
     <p className='text-lg'>Age: 22</p>
     <p className='text-lg'>Skills: React, Nodejs</p>
     </div>
    </div>
    </div>
  )
}

export default Home
