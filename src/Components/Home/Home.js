import React from "react";
import { Link } from "react-router-dom";
import { About } from "../About/About";
import { Navbar } from "../Navbar/Navbar";
import { Projects } from "../Projects/Projects";
import { Slider } from "../Slider/Slider";
import "./home.css";
export const Home = () => {
  return (
    <div>
      <Navbar />
      <div className="slider_div">
        <Slider />
        <div className="heading">
          <p>HYDROPONIC FARM</p>
          <p>COMPANY</p>
          <p>
            Hydroponic farm setup specialists in NFT, DUTCH Buckets and DWC
            Methods.
          </p>
        </div>
      </div>
      <div className="flex flex_div" >
        <div className="left_div">
          <p>WHAT WE DO</p>
          <p>WHY HYDROPONICS</p>
        </div>
        <div className="right">
          {" "}
          <p>
            Plants grown in soil need a more space to spread out as the roots
            reach out as far as possible into the soil to capture as much water
            and nutrients as possible. Soil holds water and nutrients for only
            few minutes before it is filtered down the water table, or gets
            soaked up by other plants nearby. That makes it nearly impossible to
            control exactly how much water each of your plants receive, or which
            nutrients they benefit from in the process.
          </p>
          <button>
            <Link to={"/contact"} className="link">Contact me</Link>{" "}
          </button>
        </div>
      </div>
      {/* <div className="about_section">
        <div >
          {" "}
           <img
            src="https://nowafarms.in/assets/img/about/nowafarm.jpg"
            alt=""
          />
         
        </div>
        <div className="right">
          {" "}
          <p>
            Plants grown in soil need a more space to spread out as the roots
            reach out as far as possible into the soil to capture as much water
            and nutrients as possible. Soil holds water and nutrients for only
            few minutes before it is filtered down the water table, or gets
            soaked up by other plants nearby. That makes it nearly impossible to
            control exactly how much water each of your plants receive, or which
            nutrients they benefit from in the process.
          </p>
          <button>
            <Link to={"/contact"} className="link">Contact me</Link>{" "}
          </button>
        </div>
      </div> */}
        
      <h1>Projects</h1>
        <Projects/>
      <About />
    </div>
  );
};
