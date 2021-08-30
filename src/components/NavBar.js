import React, {useState} from "react"
import {Link} from 'react-router-dom'
import "./NavBar.css"
// import { Navbar, Nav, Container } from "react-bootstrap"
// import NavbarCollapse from "react-bootstrap/esm/NavbarCollapse"
// import NavbarToggle from "react-bootstrap/esm/NavbarToggle"
// import {NavLink,Link} from "react-router-dom"
// // import { SocialIcon } from "react-social-icons"
//  import {fa-times, FaTimes,} from "react-icons/fa"
// import {MdFingerprint} from "react-icons/md"

function NavBar(){

  const [click,setClick]= useState(false);
  const handleClick = () => setClick(!click);
  const clsoeMobileMenu = () =>  setClick(false);
 return(
     <>
     <nav className="navbar">
       <div className="navbar-container">
         <Link to="/" className="navbar-logo">
           Osama Rais <i className="fab fa-typo3"/>
         </Link>
         <div className="menu-icon " onClick={handleClick}>
           <i className={click ? 'fas fa-times': 'fas fa-bars'} />
           </div>
           <ul className={click ? "nav-menu active" : "nav-menu"}> 
             <li className="nav-item">
               <Link to="/about" className="nav-links" onClick={clsoeMobileMenu}>
                 About
               </Link>
                   
             </li>
              <li className="nav-item">
               <Link to="/skills" className="nav-links" onClick={clsoeMobileMenu}>
               Skills
               </Link>
                    
             </li> 
             <li className="nav-item">
               <Link to="/expertise" className="nav-links" onClick={clsoeMobileMenu}>
               Expertise
               </Link>
                    
             </li> 
             <li className="nav-item">
               <Link to="/project" className="nav-links" onClick={clsoeMobileMenu}>
               Projects
               </Link>
                    
             </li> 
         
             <li className="nav-item">
               <Link to="/skills" className="nav-links" onClick={clsoeMobileMenu}>
              Contact
               </Link>
                    
             </li> 
           </ul>
       </div>
     </nav>
     </>
     
   
/* //     <Navbar collapseOnSelect fixed="top" expnad="sm" bg="dark" variant="darkk">
//       <Container>
//         <NavbarToggle aria-controls="responsive-navbar-nav"/>
//           <NavbarCollapse id="respnosive-navbar-nav">
//             <Nav>
//               <Nav.Link href="/">Osama Rais</Nav.Link>
//               <Nav.Link href="/about">About</Nav.Link>
//               <Nav.Link href="/skills">Skills</Nav.Link>
//               <Nav.Link href="/expertise">Expertise</Nav.Link>
//               <Nav.Link href="/project">Project</Nav.Link>
//               <Nav.Link href="/contact">Contact</Nav.Link>
//             </Nav>
//           </NavbarCollapse>
        
//       </Container>

    // </Navbar>

      // <div className="navbar">
      // <div className="navbar-container container"> 
      //   <Link to="/"  */
      //   exact 
      //   activeClassName="text-white"
      //   className="navbar-logo">
      //     <MdFingerprint className="navbar-icon"/>
      //   Osama Rais
      //   </Link>
      //   <div className="menu-icon " onClick={handleClick}>
      //     {click ? <FaTimes/> : <FaBars />} 
      //     <NavLink to="/about"
      //   activeClassName="text-white-100 bg-red-700"
      //   className="inflex-flex items-center py-3 px-3 my-6 rounded text-red-200 hover:text-black-800"
      //   >
      //     About
      //   </NavLink>
      //   <NavLink to="/skills"
      //    className="inflex-flex items-center py-3 px-3 my-6 rounded text-red-200 hover:text-black-800"
      //   >
      //     Skills
      //   </NavLink>
      //   <NavLink to="/expertise"
      //   className="inflex-flex items-center py-3 px-3 my-6 rounded text-red-200 hover:text-black-800"
      //   >
      //   Expertise
      //   </NavLink>
      //   <NavLink to="/project"
      //   className="inflex-flex items-center py-3 px-3 my-6 rounded text-red-200 hover:text-black-800"
      //   >
      //   Project
      //   </NavLink>
      //   <NavLink to="/contact">
      //     Contact
      //   </NavLink>
      //   </div>
      
        
      // </div>
      // {/* <div className="inline-flex py-1 px-10 ml-20">
      //   <SocialIcon url="https://www.facebook.com/osamaa.rais" className="mr-4" target="blank" fgColor="fff" style={{ height : 35, width: 35}}/>
      //   <SocialIcon url="https://github.com/Osama-Rais" className="mr-4" target="blank" fgColor="fff" style={{ height : 35, width: 35}}/>
      //   <SocialIcon url="https://www.linkedin.com/in/osama-rais-6747371a3/" className="mr-4" target="blank" fgColor="fff" style={{ height : 35, width: 35}}/>
       

      // </div> */}
      // </div>
 

  )
}
export default NavBar;