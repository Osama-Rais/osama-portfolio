import React from 'react'
import { Link } from 'react-router-dom';
import { SocialIcon } from 'react-social-icons';
import "./Footer.css"

function Footer() {
    return (
        <div className="footer-container">
            <section className="footer-subscription">
                <p className="footer-subscription-heading">
               Quick Access
                </p>
                {/* <div className="input-areas">
                    <form>
                        <input 
                        type="email" 
                        name="eamil" 
                        placeholder="Your Email" 
                        className="footer-Input"/>
                    </form>
                </div> */}
            </section>
                <div className="footer-links">
                     <div className="footer-link-wrapper"> 
                        <div className="footer-link-items">
                            <h2 className="footer-page">About</h2>
                            <Link to='/about'>Achievements</Link>
                            <Link to='/about'>Education</Link>
                            <Link to='/about'>Future Goal</Link>
                        </div>
                        </div> 
                        <div className="footer-link-wrapper"> 
                        <div className="footer-link-items">
                            <h2 className="footer-page">Skills</h2>
                            <Link to='/skills'>Asp .Net</Link>
                            <Link to='/skills'>React Js</Link>
                            <Link to='/skills'>Python</Link>
                            <Link to='/skills'>API Integration</Link>
                        </div>
                 </div>
                  <div className="footer-link-wrapper"> 
                        <div className="footer-link-items">
                            <h2 className="footer-page">Expertise</h2>
                            <Link to='/expertise'>Back-End Development</Link>
                            <Link to='/expertise'>Rest API's</Link>
                            
                        </div>
                        </div>
                        <div className="footer-link-wrapper"> 
                        <div className="footer-link-items">
                            <h2 className="footer-page">Project</h2>
                            <Link to='/project'>Commercial Project</Link>
                            <Link to='/project'>Semester Project</Link>
                            <Link to='/project'>Final Year Project</Link>
                        </div>

                  </div> 
                  <div className="footer-link-wrapper"> 
                        <div className="footer-link-items"> 
                            <h2 className="footer-page">Socail Media</h2>
                            <div className="inline-flex py-1 px-10 ml-20">
                            <SocialIcon url="https://www.facebook.com/osamaa.rais" className="mr-4" target="blank" fgColor="fff" style={{ height : 35, width: 35}}/>
                            <SocialIcon url="https://github.com/Osama-Rais" className="mr-4" target="blank" fgColor="fff" style={{ height : 35, width: 35}}/>
                            <SocialIcon url="https://www.linkedin.com/in/osama-rais-6747371a3/" className="mr-4" target="blank" fgColor="fff" style={{ height : 35, width: 35}}/>
       
                        </div>

                  </div>  
                  </div>
                  </div>
                 
                 <section className="social-media">
                     <div className="social-media-wrap">
                          <div className="footer-logo">
                             <Link t="/" className="social-logo">
                                 Osama Rais <i className="fab fa-typo3"/>
                             </Link>
                             </div>
                             <small className="website-rights">OsamaRais © 2021</small>
                             
                        </div> 
                        
      

    
                    </section>
                    
             
            
        </div>
    )
}

export default Footer;
