import React from 'react'
import ProfileBar from '../ProfileBar/ProfileBar'
import './Home.css'
import Search from '../Search/Search'
import Events from '../UpcomingEvents/Events'

const Home = () => {
  return (
    <div className='container'>
      <ProfileBar/>
      <Search/>
      <Events/>
    </div>
  )
}

export default Home