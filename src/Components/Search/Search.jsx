import React from 'react'
import './Search.css'
import { BiSearchAlt2 } from "react-icons/bi";

const Search = () => {
  return (
    <div className='search'>
        <span><BiSearchAlt2 size='20px' style={{color:'#4B01DD', marginRight: '5px', marginTop: '5px'}}/></span>
        <div><input type='text' placeholder='Search...'/></div>
    </div>
  )
}

export default Search