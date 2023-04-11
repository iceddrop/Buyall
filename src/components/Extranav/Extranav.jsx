import React from "react";
import './Extranav.css';
import {HiOutlinePhone} from "react-icons/hi";
import {FiChevronDown} from "react-icons/fi";
export default function Extranav(){
    return(
       <section className="extra-nav">
          <div className="contact-div">
             <HiOutlinePhone/>
             <p>+001234567890</p>
          </div>
          <div className="discount-div">
             <p>jdhjsh</p>
             <p>dyujyduj</p>
          </div>
          <div className="dropdown-div">
             <div className="dropdown">
                <p>Eng</p>
                <FiChevronDown/>
             </div>
             <div className="dropdown">
                 <p>Location</p>
                 <FiChevronDown/>
             </div>
          </div>
       </section>
    )
}