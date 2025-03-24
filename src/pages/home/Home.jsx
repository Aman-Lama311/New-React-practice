import React, { useState } from 'react'

const Home = () => {
const [count, setCount] = useState(0);
const [next, setNext] = useState(1);

const handleIncrement = () => {
  setCount(count + next);
};

const handleDecrement = () => {
  setCount(preCount => {
    const newCount = preCount - next;
    return newCount < 0 ? 0 : newCount;
  })
}

  return (
    <div className='h-screen flex flex-col gap-4 justify-center items-center'>
      <h1 className='text-5xl font-semibold'>{count}</h1>
      <div>
      <button onClick={handleIncrement} className='bg-black text-white rounded px-8 py-2 cursor-pointer active:scale-95 '>Increment</button>
      <button onClick={handleDecrement} className='bg-black text-white rounded px-8 py-2 ml-2 cursor-pointer active:scale-95 '>Decrement</button>
      </div>
    </div>
  )
}

export default Home
