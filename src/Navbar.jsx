import React, { useState } from 'react'
import KeyboardDoubleArrowLeftIcon from '@mui/icons-material/KeyboardDoubleArrowLeft';
import HomeIcon from '@mui/icons-material/Home';
import ViewHeadlineIcon from '@mui/icons-material/ViewHeadline';
import logo from '../public/logo.png'

const Navbar = () => {

    const[sideBar, setSideBar] = useState(false);

    function showSideBer(e){
        e.preventDefault();
        setSideBar(!sideBar);
        console.log(sideBar);
    }

  return (
    <>
      <div id='navBar'>
        <a href="" className='menu-bers'><ViewHeadlineIcon onClick={showSideBer}  /></a>
    </div>
    <nav className={sideBar ? "nav-menu active" : "nav-menu"}>
        <ul className='nav-manu-items' onClick={showSideBer}>
            <li className='navber-toggle'>
                <a href="#" id='back'><KeyboardDoubleArrowLeftIcon /></a>
            </li>
            <div id='nav-content'>
            <img id='logo' src={logo} alt="" />
                <a href=""><button>Start Codding</button></a>
                <a href=""><HomeIcon /> Home</a>
            </div>
        </ul>
    </nav>
    </>
  )
}

export default Navbar
