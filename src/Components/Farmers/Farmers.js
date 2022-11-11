import React from "react";
import { farmers } from "../../Data/data";
import { About } from "../About/About";
import { Navbar } from "../Navbar/Navbar";
import "./farmer.css";
export const Farmers = () => {
  return (
    <div>
      <Navbar />
      <div className="farmer_container">
        {" "}
        <img src="https://nowafarms.in/assets/img/banner/12.jpg" alt="" />
        <p className="heading">Farmers</p>
      </div>
      <div>
       
        <div className="flex_container">
          {farmers.map((e, index) => (
            <div key={index} >
              <img src={e.image} alt="" />
              <p className="work">{e.works}</p>
              <p className="name">{e.name}</p>
            </div>
          ))}
        </div>
      </div>
      <About/>
    </div>
  );
};
