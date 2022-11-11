import React from "react";
import { Link } from "react-router-dom";
import { About } from "../About/About";
import { Navbar } from "../Navbar/Navbar";
import { Slider } from "../Slider/Slider";
import "./home.css";
export const Home = () => {
  return (
    <div>
      <Navbar />
     
<div>
<Slider/>
 <div className="heading">
 <p >HYDROPONIC FARM</p>
  <p>COMPANY</p>
<p>Hydroponic farm setup specialists in NFT, DUTCH Buckets and DWC Methods.</p>
 </div>
</div>

      {/* <div>
        <img
          className="front_image"
          src="https://www.ppt-backgrounds.net/uploads/animated-grass-if-you-need-grass-download-slides.jpeg"
          alt="error_image"
        />
        <p className="heading">hellosda  as asd as as dg asdg as gas dfjhlk hsdfh skd</p>
      </div>
      <div className="flex_div">
      <div>
      <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/7/7f/CDC_South_Aquaponics_Raft_Tank_1_2010-07-17.jpg/800px-CDC_South_Aquaponics_Raft_Tank_1_2010-07-17.jpg" alt="image_error"></img>

      </div>
      <div>
      </div>
      </div> */}
<div className="flex">

  <div className="left_div">
  
  <p>WHAT WE DO</p>
<p>WHY HYDROPONICS</p></div>
<div className="right"> <p>Plants grown in soil need a more space to spread out as the roots reach out as far as possible into the soil to capture as much water and nutrients as possible. Soil holds water and nutrients for only few minutes before it is filtered down the water table, or gets soaked up by other plants nearby. That makes it nearly impossible to control exactly how much water each of your plants receive, or which nutrients they benefit from in the process.</p>
<button><Link to={"/contact"}>Contact me</Link> </button>
</div>
</div>
<div className="about_section">
<div> <img src="https://nowafarms.in/assets/img/about/nowafarm.jpg" alt="" /></div>
<div></div>
</div>
      <About />
    </div>
  );
};
