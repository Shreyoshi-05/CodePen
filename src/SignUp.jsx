import React, { useState } from 'react'
import logo from '../public/logo.png'
// import { useSearchParams } from 'react-router-dom'
// import { Password } from '@mui/icons-material'
import { createUserWithEmailAndPassword, updateProfile } from 'firebase/auth'
import { auth } from './firebase'

const SignUp = () => {

  const[data , setData] = useState({
    name:"",
    Password:"",
    email:"",
  });

  function handelChange(e){
    setData({...data,[e.target.name]:e.target.value})
  }

  async function handelSubmit(e){
    e.preventDefault();
    const userCradential = await createUserWithEmailAndPassword(
      auth,
      data.email,
      data.Password
      
    );
    
    await updateProfile(userCradential.user ,{displayName : data.name})
    // console.log(userCradential);
  }


  return (
    <div id='signup-page'>

    {/* <div id='searchPage'>
      <div className='search-bar'>
        <input type="search" placeholder='search hear' />
        <a href="/signup"> Sign Up</a>
      </div>
    </div> */}

    <div id="input">
      <img id='logo-login' src={logo} alt="" />

      <div id="input-box">
        <h2>Join with us !</h2>

        <form method='post' id="signup-box" onSubmit={handelSubmit}>

          <input type="text"
          placeholder='enter your name'
          value={data.name}
          onChange={handelChange}
          name='name'
           />

           <input type="password"
           placeholder='enter your password'
           value={data.Password}
           onChange={handelChange}
           name='Password'
            />

            <input type="email"
            placeholder='enter your email'
            value={data.email}
            onChange={handelChange}
            name='email'
             />

             <button type='submit'>
              <a href="/signin">Register</a>
              </button>
        </form>

      </div>
    </div>

    </div>
  )
}

export default SignUp
