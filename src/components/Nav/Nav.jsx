import React from "react";
import "../../index.css";
import "./Nav.css";
import Desktopnav from "../Nav/Desktopnav";
import Tabletnav from "../Nav/Tabletnav";
import Mobilenav from "../Nav/Mobilenav";
import logo from "../../assets/63e86ab4c21faa7bc0bd90dd_Logo.svg";
import {RxHamburgerMenu} from "react-icons/rx";
export default function Nav(){
    const[dropdownMenu, setDropdownMenu] = React.useState(false)
    function isDropped(){
        setDropdownMenu(preVal => !preVal)
    }
    console.log(dropdownMenu)
    return(
        <div className="nav">
         <div className="logo-hamburger-div">
             <img src={logo} className="site-logo" alt="shop-cart-logo"/>
             <RxHamburgerMenu className="hamburger" onClick={isDropped}/>
         </div>
          <img src={logo} className="site-logo-2" alt="shop-cart-logo"/>
           <Desktopnav/>
           <Tabletnav/>
           {dropdownMenu && <Mobilenav/>}
        </div>    
    )
};