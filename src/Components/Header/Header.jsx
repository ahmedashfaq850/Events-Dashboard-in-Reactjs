import React from 'react'
import './Header.css'
import { BiBell } from "react-icons/bi";
import { BiCaretDown } from "react-icons/bi";




const Header = () => {
  return (
    <div className='header'>
        <div className='logo'><h2>Digital City</h2></div>
        <div className='leftHeader'>
            <BiBell className='icon' size='25px'/>
            <span><div className='avatar'>
                <img src='https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1374&q=80' alt=''/>
            </div></span>
            <BiCaretDown className='icon'/>
        </div>
    </div>
  )
}

export default Header