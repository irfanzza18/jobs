import React, { useState,useEffect} from 'react'

import { Container } from 'react-bootstrap'
import Job from './Job'
import JobsPagination from './JobsPagination';
import SearchForm from './SearchForm';
import Header from './Header'
function Dashboard() {

    
    
    //dashboard githubjob


  return (
    // <main className='w-screen min-h-screen flex flex-col bg-gradient-to-tr from-red-800 to-red-500 max-w-[500px] mx-auto p-10'>
    //     <div className='w-full bg-white p-6 shadow-lg flex flex-col gap-4 items-center rounded-lg' >
    //             <h1 className='text-4xl text-red-500'>Welcome</h1>
    //             <img src={user?.photoURL} alt='' className='w-[80px] h-[80px] rounded-full object-cover'/>
    //             <h3>{user?.email}</h3>

    //             <button className='h-10 bg-black text-white rounded-lg w-full'
    //             onClick={handleLogout}>
    //                 logout
    //             </button>
    //     </div>
    // </main>
    <Container className="my-3">
      <Header/>
      <SearchForm/>
      <Job/>
     
    </Container>
  )
}

export default Dashboard