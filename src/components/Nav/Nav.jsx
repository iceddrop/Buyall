import React from "react";
import "../../index.css";
import "./Nav.css";
import Desktopnav from "../Nav/Desktopnav";
import Tabletnav from "../Nav/Tabletnav";
import Mobilenav from "../Nav/Mobilenav";
import logo from "../../assets/63e86ab4c21faa7bc0bd90dd_Logo.svg";
import {RxHamburgerMenu} from "react-icons/rx";
export default function Nav(){
    return(
        <div className="nav">
         <div className="logo-hamburger-div">
             <img src={logo} className="site-logo" alt="shop-cart-logo"/>
             <RxHamburgerMenu className="hamburger"/>
         </div>
          <img src={logo} className="site-logo" alt="shop-cart-logo"/>
           <Desktopnav/>
           <Tabletnav/>
           <Mobilenav/>
        </div>    
    )
};