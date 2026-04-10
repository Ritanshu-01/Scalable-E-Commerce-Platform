import React from 'react'
import Navbar from './components/Navbar'
import Sidebar from './components/Sidebar'
import {Routes,Route} from 'react-router-dom'
import AddItem from './pages/AddItem'
import Orders from './pages/Orders'
import List from './pages/list'
import { useState } from 'react'
import Login from './components/Login'
import { ToastContainer } from 'react-toastify';
import { useEffect } from 'react'

export const backendUrl = import.meta.env.VITE_BACKEND_URL

export const currency = 'Rs'

const App = () => {

  const [token,setToken] = useState(localStorage.getItem('token') ? localStorage.getItem('token') : '')

  useEffect(()=>{
    localStorage.setItem('token',token)
  },[token])



  return (
    <div className='bg-gray-50 min-h-screen'>
      <ToastContainer/>
      { token === ''? <Login setToken={setToken}/> : <>
        <Navbar setToken={setToken}/>
        <hr />
        <div className='flex w-full'>
          <Sidebar />
          <div className='w-[70%] mx-auto ml-[max(5vw,25px)] my-8 text-gray-600 text-base'>
            <Routes>
              <Route path='/' element={<AddItem token={token} />} />
              <Route path='/add' element={<AddItem token={token} />} />
              <Route path='/list' element={<List token={token} />} />
              <Route path='/orders' element={<Orders token={token} />} />
            </Routes>
          </div>
        </div>
      </>
      }
    </div>
  )
}

export default App