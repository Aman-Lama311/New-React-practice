import React, { useState } from 'react'

const TodoList = () => {
const [todo, setTodo] = useState([]);
const [input, setInput] = useState('');

const handleSubmit = (e) => {
  e.preventDefault();
  if(!input.trim()){
    alert('Please Enter Something');
    return;
  }
  setTodo([...todo, input]);
  setInput('');
}

const handleChange = (e) => {
  setInput(e.target.value);
}

  return (
    <div className='flex flex-col gap-4 items-center mt-10 h-screen'>
      <h1 className='text-3xl font-semibold'>
        Todo Lists</h1>

      <div>
      <form onSubmit={handleSubmit} >
        <input className='px-2 py-2 outline-none border rounded' type="text"
        placeholder='Enter Your List'
        value={input} onChange={handleChange} />

        <button className='bg-black text-white rounded px-8 py-2 ml-2 cursor-pointer active:scale-95' type='submit'>
          Add List</button>
      </form>
      <ul>
        {todo.map((item, index) => (
          <li className='px-2 py-1 border w-full rounded mt-3 flex justify-between' key={index}>{item}
          <button className='bg-black text-white rounded px-4 py-1 ml-2 cursor-pointer
          active:scale-95 text-sm' onClick={() => setTodo(todo.filter((_, i) => i !== index))}>
          Remove</button>
          </li>
        ))}
      </ul>
      </div>
    </div>
  )
}

export default TodoList
