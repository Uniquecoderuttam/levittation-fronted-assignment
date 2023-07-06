import React from 'react'
import LoginPage from './LoginPage'
//import FormPage from './FormPage';
//import { Route } from 'react-router-dom';
//import {useHistory} from 'react-router-dom'

//import { BrowserRouter as  Router, Routes } from 'react-router-dom';
import ForgotPage from './components/ForgotPage'
import Navbar from './components/Navbar'



const App = () => {
  return (
    <div>
      
      
      

      <LoginPage></LoginPage>
      <ForgotPage></ForgotPage>
      <Navbar></Navbar>

      
      
      
      
    
      
    </div>
  )
}

export default App
