import { useState, useEffect } from 'react'
import {  } from "react";
import { Collapse,Dropdown, initTE } from "tw-elements";
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'


import NavBar from './NavBar';

import Login from './Login';

const App = () => {
  useEffect(() => {
    initTE({ Collapse,
             Dropdown,
           });
  }, []);

  return (
    <>
      <div class="container mx-auto">
        <NavBar/>
        
        
        <div class="p-10">
          <h1 class="text-center mb-2 mt-0 text-5xl font-medium leading-tight text-primary">
            EduForos 
          </h1>
          <div class="flex flex gap-5 justifi-center">
          <Login/> 
          
          
          </div>
        
        </div>
        
      </div>
    
      
    </>
  )
}

export default App

