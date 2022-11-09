import React from 'react'
import { About } from '../About/About'
import { Navbar } from '../Navbar/Navbar'

export const Home = () => {
  return (
    <div>
      <Navbar/>
      <img src="https://nowafarms.in/assets/img/banner/banner2.jpg" alt="error_image" />

      <About/>
      
    </div>
  )
}
