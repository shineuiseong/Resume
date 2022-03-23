import React from 'react'
import './Home.css'
import Footer from './Footer'
import Profile from './Profile'
import Header from './Header'

const Home = () => {
  return (
    <div className="home-container">
      <Header/>
      <Profile/>
      <Footer/>
    </div>
  )
}

export default Home