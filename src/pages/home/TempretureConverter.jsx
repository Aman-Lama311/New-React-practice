import React, { useState } from 'react'

const TempretureConverter = () => {
const [temp, setTemp] = useState('');
const [result, setResult] = useState(0);  

const handleSubmit = (e) => {
  e.preventDefault();
  if(!temp.trim()){
    alert('Please Enter Something');
    return;
  }
  setResult(parseFloat(temp) * 9/5 + 32);
}
   return (
    <div className='flex flex-col gap-4 items-center mt-10 h-screen'>
      <h1 className='text-3xl font-semibold'>Tempreture Converter</h1>
      <div>
      <form onSubmit={handleSubmit}>
      <input className='px-2 py-2 outline-none border rounded' type="number" value={temp} onChange={(e) => setTemp(e.target.value)} placeholder='Enter your tempreture' />

      <button className='bg-black text-white rounded px-8 py-2 ml-2 cursor-pointer active:scale-95'>Submit</button>
      </form>

      <h1>{result} °F</h1>
      </div>
    </div>
  )
}

export default TempretureConverter
