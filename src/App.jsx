import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/home/Home'
import Header from './components/Header'
import TodoList from './pages/home/TodoList'
import TempretureConverter from './pages/home/TempretureConverter'
import DarkLight from './pages/home/DarkLight'
import ShowHide from './pages/home/ShowHide'
import LikeDislike from './pages/home/LikeDislike'


const App = () => {
  return (
    <div>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/todo-list" element={<TodoList />} />
        <Route path="/tempreture-converter" element={<TempretureConverter />} />
        <Route path="/dark-light" element={<DarkLight />} />
        <Route path="/password-ShowHide" element={<ShowHide />} />
        <Route path="/like-dislike" element={<LikeDislike />} />
      </Routes>
    </div>
  )
}

export default App
