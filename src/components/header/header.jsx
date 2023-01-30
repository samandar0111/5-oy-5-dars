import React from "react";
 import header from "./header.module.css"
 import logo from "./img/logo.png"
import { Link } from "react-router-dom"


export const Header =()=>{


  return (
    <div className="container">
      <div className={header.box}>
        <img src={logo} alt="logo" />
        <nav><ul className={header.navbar}>
          <li className={header.link}><Link to="/">HOME</Link></li>
          <li>BAGS</li>
          <li>SNEAKERS</li>
          <li>BELT</li>
          <li>CONTACT</li>
          <li className={header.link}><Link to="/karzina">KARZINA</Link></li>
          </ul></nav>
      </div>

    
    </div>
  )
}