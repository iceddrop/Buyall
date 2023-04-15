import React from "react";
import "../../index.css";
import "./Nav.css";

import {GrSearch} from "react-icons/gr";
import {FiChevronDown} from "react-icons/fi";
import {RxPerson} from "react-icons/rx";
import {TbShoppingCartPlus} from "react-icons/tb";
export default function Navlink(){
    return(
        <>

                <ul>
                    <li>
                    <div>
                        <p>Category</p>
                        <FiChevronDown/>
                    </div>  
                    </li>  
                    <li>Deals</li>  
                    <li>What's New</li> 
                    <li>Delivery</li> 
                </ul>
                <form className="search-form">
                <div className="search-div">
                    <input type="text" className="search-input" name="search" id="searchInput" placeholder="search product"/>
                    <GrSearch/>
                </div> 
                </form>
                <ul>
                    <li>
                    <p>Account</p>
                    <RxPerson/>
                    </li> 
                    <li>
                    <p>Cart</p>
                    <TbShoppingCartPlus/> 
                    </li>   
                </ul> 
        </>
    )
}