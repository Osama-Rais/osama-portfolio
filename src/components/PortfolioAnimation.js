import React from 'react'
import { Button } from 'react-bootstrap'
import "./PortfolioAnimation.css"
import "./App.css"
import video from "../videos/video-2.mp4"


function PortfolioAnimation(){
    return(
        <div className="animation-container">
          <video src={video} autoPlay loop muted/> 
            
            <p>Who Is Osama Rais?</p> 
             <div className="animation-btns">
                {/* <Button className="btns" buttonStyle="btn--outline" buttonSize="btn--large">
                    Lets Start
                </Button> */}
                <Button className="btns" variant="danger" size="lg" active>
                   Click Here! <i className="fa fa-arrow-down" aria-hidden="true"/>
                </Button>
            </div>
    
        </div>
    )
}
export default PortfolioAnimation;