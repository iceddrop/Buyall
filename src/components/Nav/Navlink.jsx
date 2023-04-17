import React from "react";
import "../../index.css";
import "./Nav.css";
import Searchcomp from "../Nav/Searchcomp";
import {FiChevronDown} from "react-icons/fi";
import {RxPerson} from "react-icons/rx";
import {TbShoppingCartPlus} from "react-icons/tb";
export default function Navlink(){
    return(
        <>

                <ul className="navlist">
                    <li>
                    <div className="category">
                        <p>Category</p>
                        <FiChevronDown className="chevron-down"/>
                    </div>  
                    </li>  
                    <li>Deals</li>  
                    <li>What's New</li> 
                    <li>Delivery</li> 
                </ul>
                <Searchcomp/>
                <ul className="navlist-2">
                    <li className="account"> 
                    <RxPerson className="person-icon"/>
                    <p className="account-text">Account</p>
                    </li> 
                    <li className="cart">
                    <TbShoppingCartPlus className="cart-icon"/> 
                    <p className="cart-text">Cart</p>
                    </li>   
                </ul> 
        </>
    )
}