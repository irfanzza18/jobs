import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Button } from 'react-bootstrap'
import React, { useState,useEffect} from 'react'
import {getAuth,signOut} from "firebase/auth"
import { useNavigate } from 'react-router-dom'
function Header() {
  //state
  const [user,setUser] = useState()
  const navigate = useNavigate()

  //clc
  useEffect(()=>{
      setUser(JSON.parse(localStorage.getItem('user')))
  },[])

  //logout function 
  const handleLogout = ()=>{
      const auth = getAuth()
      signOut(auth)
      .then(result=>{
          localStorage.clear()
          navigate("/")
      })
      .catch((err)=>{
      console.error(err)
  })
  }
  return (
    <>
    
      <br />
      <Navbar bg="info" variant="dark">
        <Container>
          <Navbar.Brand href="#home">GitHub Jobs</Navbar.Brand>
          <Nav className="me-auto">
            
          </Nav>
          <Nav>
          <h1 className='text-4xl text-black-500'>Welcome,{user?.displayName}</h1>
          <Button variant="secondary" active size="lg" onClick={handleLogout}>Logout</Button>{' '}
          </Nav>
        </Container>
      </Navbar>


      
    </>
  );
}

export default Header;