import React, { useState } from 'react';

const ShowHide = () => {
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);

  return (
    <div className='flex flex-col gap-4 items-center mt-10 h-screen'>
      <h1 className='text-3xl font-semibold'>Show Hide Password</h1>
      <div>
        <input 
          className='px-2 py-2 outline-none border rounded' 
          type={showPassword ? 'text' : 'password'} 
          value={password} 
          placeholder='Enter Your Password' 
          onChange={(e) => setPassword(e.target.value)}  
        />
        <button 
          className='bg-black text-white rounded px-8 py-2 ml-2 cursor-pointer active:scale-95' 
          onClick={() => setShowPassword(!showPassword)}
        >
          {showPassword ? 'Hide' : 'Show'}
        </button>
      </div>
    </div>
  );
};

export default ShowHide;
