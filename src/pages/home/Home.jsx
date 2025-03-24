import React, { useState } from 'react'

const Home = () => {
const [count, setCount] = useState(0);
const [text, setText] = useState('');

const handleIncrement = () => {
  setCount(prevCount => {
    const newCount = prevCount + 1; 
    setText(newCount % 2 === 0 ? 'Even' : 'Odd'); 
    return newCount;
  });
};

  return (
    <div className='p-5'>
      <h1>{count}{text}</h1>
      <button onClick={handleIncrement} className='bg-black text-white rounded px-4 py-1'>Increment</button>
    </div>
  )
}

export default Home
