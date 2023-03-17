import React, {useState,useEffect} from 'react'
import { Route,Routes } from 'react-router-dom'
import Login from './pages/Login';
import Register from './pages/Register';
import Dashboard from './pages/Dashboard';
import "./firebase";
import {getAuth,onAuthStateChanged} from  "firebase/auth"

function App() {
        //pengecekan auth
        // useEffect(()=>{
        //   console.info(auth)
        // },[])

  //state
  const [isLogin,setIslogin] = useState(false)
  const [loading,setLoading] = useState(true)

  //clc
  useEffect(()=>{

    const auth =getAuth()
    onAuthStateChanged(auth, (result)=>{
     if (result){
      setIslogin(true)
      setLoading(false)
      return
     }

     setIslogin(false)
     setLoading(false)
    })
  },[])

  if(loading){
    return (
      <div className='w-screen h-screen flex flex-col justify-center items-center'> 
        Loading.. 
      </div>
    )
  }

  return (

    <>
      {isLogin ? (
        <Routes>
         <Route path='/dashboard' element={<Dashboard/>} />
         <Route path='*' element={<Dashboard/>} />
       </Routes>

      ) : (
      <Routes>
        <Route path='/' element={<Login/>} />
        <Route path='/register' element={<Register/>} />
        <Route path='*' element={<Register/>} />
      </Routes>
      )}
    </>


   
  )
}

export default App;