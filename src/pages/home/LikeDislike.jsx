import React, { useState } from 'react'
import { AiFillLike } from "react-icons/ai";
import { AiFillDislike } from "react-icons/ai";

const LikeDislike = () => {
  const [like, setLike] = useState(0);
  return (
    <div className='bg-gray-300 w-full h-screen flex justify-center items-center'>
      <div className='p-4 bg-white w-[300px] rounded-md'>
        <img src="src/assets/ice.png" alt="" />
        <div>
          <h1 className='text-lg font-semibold'>Ice Cream</h1>
          <p className='flex gap-2 items-center'><span><AiFillLike size={20} onClick={() => setLike(like + 1)}/></span>
          <span><AiFillDislike onClick={() => setLike(like - 1)} size={20} /></span>
          {like}</p>
        </div>
      </div>
    </div>
  )
}

export default LikeDislike
