import React, { useState } from 'react'

const DarkLight = () => {
const [dark, setDark] = useState(false);

  return (
    <div className={`${dark ? 'bg-black text-white' : 'bg-white text-black'} w-full h-screen flex justify-center items-center`}>
      <button onClick={() => setDark(!dark)} className={`${dark ? 'bg-white text-black' : 'bg-black text-white'} rounded px-8 py-2 ml-2 cursor-pointer active:scale-95`}>{dark ? 'Light' : 'Dark'}</button>
    </div>
  )
}

export default DarkLight
