import React from "react";
import './Extranav.css';
import {HiOutlinePhone} from "react-icons/hi";
import {FiChevronDown} from "react-icons/fi";
import "../../index.css";

export default function Extranav(){
    return(
       <section className="extra-nav">
          <div className="contact-div">
             <HiOutlinePhone className="phone-icon"/>
             <p className="phone-number">+001234567890</p>
          </div>
          <div className="discount-div">
             <p>Get 50% Off on Selected Items </p>
             <p>|</p>
             <p>Shop Now</p>
          </div>
          <div className="dropdown-div">
             <div className="dropdown">
                <p className="dropdown-text">Eng</p>
                <FiChevronDown className="chevron-down"/>
                <ul className="dropdown-list">
                  <li className=""></li>
                  <li className=""></li>
                  <li className=""></li>
                </ul>
             </div>
             <div className="dropdown">
                 <p>Location</p>
                 <FiChevronDown className="chevron-down"/>
             </div>
          </div>
       </section>
    )
}