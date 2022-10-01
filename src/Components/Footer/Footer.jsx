import React from 'react'
import './Footer.css'
import { BsFacebook } from "react-icons/bs";
import { BsTwitter } from "react-icons/bs";
import { BsInstagram } from "react-icons/bs";

const Footer = () => {
  return (
    <div className='footer'>
        <div className='footer1'>
            <div className='footer-log'>DigitalCity</div>
            <div className='location'>
                <h3>Location</h3>
                <p>Boho one, Bridge St W, Middlesbrough TS2 1AE</p>
            </div>
            <div className='contact'>
                <h3>Call or Email Us</h3>
                <p>416-323-564</p>
                <p>info@digitalcity.com</p>
            </div>
            <div className='follow'>
                <h3>Follow Us</h3>
                <div className='social'>
                    <div className='cir'><BsFacebook/></div>
                    <div className='cir'><BsTwitter/></div>
                    <div className='cir'><BsInstagram/></div>
                </div>
            </div>
        </div>
        <div className='footer2'>
            <div><p>©2022 DigitalCity. All rights Reserved</p></div>
            <div><span className='space'>Term of Service</span><span>Privacy Policyu</span></div>
        </div>
    </div>
  )
}

export default Footer