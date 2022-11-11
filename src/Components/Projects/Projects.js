import React from 'react'
import "./product.css"
import {projects} from "../../Data/data"
export const Projects = () => {
  return (
    // <div>
     <div className="flex_container">
          {projects.map((e, index) => (
            <div key={index} >
              <img src={e.image} alt="" />
            </div>
          ))}
        </div>
    // </div>
  )
}
