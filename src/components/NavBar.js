import React, { useState } from "react"
import {NavLink,Link} from "react-router-dom"
// import { SocialIcon } from "react-social-icons"
import {FaBars, FaTimes} from "react-icons/fa"
import {MdFingerprint} from "react-icons/md"

export default function NavBar(){
  const [click,setClick]= useState(false);
  const handleClick = () => setClick(!click);
  return(
    
      <div className="navbar">
      <div className="navbar-container container"> 
        <Link to="/" 
        exact 
        activeClassName="text-white"
        className="navbar-logo">
          <MdFingerprint className="navbar-icon"/>
        Osama Rais
        </Link>
        <div className="menu-icon " onClick={handleClick}>
          {click ? <FaTimes/> : <FaBars />} 
          <NavLink to="/about"
        activeClassName="text-white-100 bg-red-700"
        className="inflex-flex items-center py-3 px-3 my-6 rounded text-red-200 hover:text-black-800"
        >
          About
        </NavLink>
        <NavLink to="/skills"
         className="inflex-flex items-center py-3 px-3 my-6 rounded text-red-200 hover:text-black-800"
        >
          Skills
        </NavLink>
        <NavLink to="/expertise"
        className="inflex-flex items-center py-3 px-3 my-6 rounded text-red-200 hover:text-black-800"
        >
        Expertise
        </NavLink>
        <NavLink to="/project"
        className="inflex-flex items-center py-3 px-3 my-6 rounded text-red-200 hover:text-black-800"
        >
        Project
        </NavLink>
        <NavLink to="/contact">
          Contact
        </NavLink>
        </div>
      
        
      </div>
      {/* <div className="inline-flex py-1 px-10 ml-20">
        <SocialIcon url="https://www.facebook.com/osamaa.rais" className="mr-4" target="blank" fgColor="fff" style={{ height : 35, width: 35}}/>
        <SocialIcon url="https://github.com/Osama-Rais" className="mr-4" target="blank" fgColor="fff" style={{ height : 35, width: 35}}/>
        <SocialIcon url="https://www.linkedin.com/in/osama-rais-6747371a3/" className="mr-4" target="blank" fgColor="fff" style={{ height : 35, width: 35}}/>
       

      </div> */}
      </div>
 

  )
}