import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";
export const Navbar = () => {
  const ProductList = [
    { to: "/product/homeKits", title: " HYDROPHONIC HOME KITS" },
    { to: "/product/nutrients", title: "HYDROPHONIC NUTRIENTS" },
    { to: "/product/seeds", title: "HYDROPHONIC SEEDS" },
  ];

  return (
    <div className="container">
      <div>
        <Link to="/" className="tag">
          CALIPER
        </Link>
      </div>
      <div className="content">
        <Link to="/" className="style">
          HOME
        </Link>
        <Link to="/about" className="style">
          ABOUT
        </Link>
        <div className="Linktabs">
          <div className="dropDownMainDiv">
            {" "}
            <button className="dropDownButton">HYDROPHONIC PRODUCTS</button>
            <div className="dropDownContent">
              {ProductList.map((e) => (
                <Link key={e.title} to={`${e.to}`}>
                  <div key={e.title} className="DropDownLink">
                    {" "}
                    {e.title}
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
      <div>
        <Link to="/contact" className="contact">
          CONTACT US
        </Link>{" "}
      </div>
    </div>
  );
};
