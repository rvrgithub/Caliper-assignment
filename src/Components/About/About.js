import React from 'react'
import { Link } from 'react-router-dom'
import "./about.css"
export const About = () => {
  return (
    <div className='about_container'>
    <div>
      <p>CALIPER @</p>
    </div>
    <div>
      <p>
  Absolute® is a pathbreaking plant biotech company re-imagining agriculture to radically and sustainably improve agriculture performance, around the world.
  Developed by some of the world's finest scientists, Absolute® spent 6 yrs intersecting phytology, microbiology, omics, molecular biology, epigenetics, and AI to build India's largest microbial & Biomolecule discovery cum optimization platform. The company is also building the world’s largest precision farm network, democratizing access to agriculture innovations, inputs, advisory & markets across its network.
  Founded in 2015, Absolute® currently operates across 10+ countries. Backed by Sequoia, Tiger Global, and Alpha Wave, Absolute also counts Nadir Godrej- MD of Godrej Industries, Kamal Aggarwal- Promoter of Haldiram, and Kunal Shah-CRED among many others as its investors.</p>
    </div>
    <div className='flex'>
    <p><Link to="./" className='links'>Home</Link></p>
    <p><Link to="#"  className='links'>Careers</Link></p>

    <p><Link to="#" className='links'>Buyers</Link></p>

    <p><Link to="#" className='links'>Blogs</Link></p>

    <p><Link to="#" className='links'>Growers</Link></p>

    <p><Link to="./contact" className='links'>Contact Us</Link></p>
</div>
    </div>
  )
}
