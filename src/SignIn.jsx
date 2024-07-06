import { signInWithEmailAndPassword } from 'firebase/auth';
import React, { useState } from 'react'
import { auth } from './firebase';
import logo from '../public/logo.png'

const SignIn = () => {

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
        const loggedinUser = await signInWithEmailAndPassword(auth, data.email , data.Password);
        // console.log(loggedinUser);

        if(loggedinUser) window.location.href="/"
      }


  return (
    <div>
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
              Sign In
              </button>
        </form>

      </div>
    </div>
  )
}

export default SignIn
