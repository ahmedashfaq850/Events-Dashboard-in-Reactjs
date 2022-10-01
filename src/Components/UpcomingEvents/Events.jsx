import React from 'react'
import './Events.css'
import { BiCaretDown } from "react-icons/bi";
import { BiCalendarAlt } from "react-icons/bi";
import { BiCurrentLocation } from "react-icons/bi";


const Events = () => {
    const data = [1,2,3,4,5,6]
  return (
    <div>
        <div className='row'>
            <div><h2>Upcoming Events</h2></div>
            <div className='row-right-side'>
                <span><p>Technology</p></span>
                <span><BiCaretDown/></span>
            </div>
        </div>
        <div className='grid-container'>
            {data.map((item,ind)=>(
                <div key={ind} className='grid-item'>
                    <p className='heading'>TECHNOLOGY</p>
                    <p className='title'>ABC Tech Company Build 2023 - Conference</p>
                    <div className='flex'><span className='icon'><BiCalendarAlt/></span><span className='tags'>October 3, 2023 | UK</span></div>
                    <div className='flex'><span className='icon'><BiCurrentLocation/></span><span className='tags'>boho one, Bridge St W, Middlesbrough, TS2 1AE</span></div>
                    <div className='button-section'>
                        <span><button className='primary'>Maps</button></span>
                        <span className='sec'><button className='ss'>Details</button></span>
                    </div>
                </div>
            ))}
        </div>
        <div className='row-pag'>
            <div><p>Page 1 of 10</p></div>
            <div>
                <span><button className='pag-btn'>Previous</button></span>
                <span><button className='pag-btn'>Next</button></span>
            </div>
        </div>
    </div>
  )
}

export default Events