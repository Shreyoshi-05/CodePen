import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './Home'
import SignUp from './SignUp'
import SignIn from './SignIn'
import Code from './Code'
import Result from './Result'

function App() {
  

  return (
    <>
    <BrowserRouter>
    <Routes>
      {/* <Route path='/' element={<Home />}></Route> */}
      <Route path='/signup' element={<SignUp />}></Route>
      <Route path='/signin' element={<SignIn />}></Route>
      <Route path='/' element={<Code />}></Route>
      <Route path='/result' element={<Result />}></Route>
    </Routes>
    </BrowserRouter>
    
    </>
  )
}

export default App
