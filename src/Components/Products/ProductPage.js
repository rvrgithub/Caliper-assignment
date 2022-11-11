import React from 'react';
import { Link } from 'react-router-dom';
import { About } from '../About/About';
import { Navbar } from '../Navbar/Navbar';
import { Projects } from '../Projects/Projects';
import "./products.css";
export const ProductPage = () => {

  return (
    <div>
    <Navbar/>
    <div className="product_container">
        <p className="title">Products</p>
          {/* ..............Home Kits section */}

        <div className="product">
          <div>
          <Link to="/product/homekits" className="link"><img
              src="https://m.media-amazon.com/images/I/71a3twe-KHL._AC_UL320_.jpg"
              alt=""
            /></Link>
            
          </div>
          <div className="right">
          <p className="title">HOME KITS</p>
            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Hic vero,
            vitae fuga modi suscipit consectetur! Quam deserunt blanditiis
            magnam, voluptatibus nostrum distinctio mollitia sit labore totam.
            Quod itaque id nemo?{" "}</p>
            <button><Link to="/product/homekits" className="link">Go there</Link></button>
          </div>
        </div>

    {/* ..............Nutrients section */}

    <div className="product">
        
          <div className="right">
          <p className="title">NUTRIENTS</p>
            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Hic vero,
            vitae fuga modi suscipit consectetur! Quam deserunt blanditiis
            magnam, voluptatibus nostrum distinctio mollitia sit labore totam.
            Quod itaque id nemo?{" "}</p>
            <button><Link to="/product/nutrients" className="link">Go there</Link></button>
          </div>
          <div>
            <img
              src="https://m.media-amazon.com/images/I/81y8WmaYqaL._AC_UL320_.jpg"
              alt=""
            />
          </div>
        </div>
 <div className="product">
          <div>
          <Link to="/product/seeds" className="link"> <img
              src="https://m.media-amazon.com/images/I/81+3ASTDQ4S._AC_UL320_.jpg"
              alt=""
            /></Link>
           
          </div>
          <div className="right">
          <p  id="title">SEEDS</p>
            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Hic vero,
            vitae fuga modi suscipit consectetur! Quam deserunt blanditiis
            magnam, voluptatibus nostrum distinctio mollitia sit labore totam.
            Quod itaque id nemo?{" "}</p>
            <button><Link to="/product/seeds" className="link">Go there</Link></button>
          </div>
        </div>
      </div>
      <h1>Projects</h1>
<Projects/>
    <About/>
    </div>
  )
}
