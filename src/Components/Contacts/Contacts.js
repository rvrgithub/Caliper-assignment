import React, { useState } from "react";
import { About } from "../About/About";
import { Navbar } from "../Navbar/Navbar";
import "./contacts.css";
export const Contacts = () => {
  const [data,setData] = useState({
  firstName:"",
  lastName:"",
  email:"",
  address:"",
  phone:""
  })
const handleData =(e)=>{
let {name ,value} =e.target;
setData({
  ...data,
  [name]:value
})
}

const handleSubmit=(e)=>{
  e.preventDefault();
setData([...data]);
console.log("dat", data)
}


console.log("data form",data)
  return (
    <div>
      <Navbar />
      <div className="contact_container">
        <div className="img_box">
          {" "}
          <img
            src="https://jobs.gartner.com/media/5jpeah4r/gettyimages-637583458.jpg?anchor=center&mode=crop&width=848&height=636&mode=crop&quality=75&format=webp"
            alt=""
          />
        </div>
        <div className="main-block">
          <h1 className="h1">Connect Us</h1>
          <form action="/">
            <label id="icon" for="firtName">
              <i className="fas fa-envelope"></i>
            </label>
            <input
              type="text"
              name="firtName"
              id="firtName"
              placeholder="Enter Your Last First Name"
              onChange={handleData}
              required
            />
             <label id="icon" for="lastName">
              <i className="fas fa-envelope"></i>
            </label>
            <input
              type="text"
              name="lastName"
              id="lastName"
              placeholder="Enter Your Last Name"
              onChange={handleData}
              required
            />
            <label id="icon" for="email">
              <i className="fas fa-user"></i>
            </label>
            <input
              type="text"
              name="email"
              id="email"
              placeholder="email"
              onChange={handleData}
              required
            />
            <label id="icon" for="phone">
              <i className="fas fa-unlock-alt"></i>
            </label>
            <input
              type="number"
              name="phone"
              id="phone"
              placeholder="Enter Your Number"
              onChange={handleData}
              required
            />
             <label id="icon" for="adress">
              <i className="fas fa-unlock-alt"></i>
            </label>
            <input
              type="text"
              name="adress"
              id="adress"
              placeholder="Enter Your Adress"
              onChange={handleData}
              required
            />
            <button type="submit" className="button" onClick={handleSubmit} href="/">
              Submit
            </button>
          </form>
        </div>
      </div>
      <About />
    </div>
  );
};
