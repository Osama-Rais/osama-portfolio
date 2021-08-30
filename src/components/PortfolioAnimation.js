import React from 'react'
import { Button } from 'react-bootstrap'
import "./PortfolioAnimation.css"
import "./App.css"
import ReactPlayer from 'react-player/youtube'


function PortfolioAnimation(){
    return(
        <div className="animation-container">
   <ReactPlayer
          className='react-player'
          url='https://www.youtube.com/watch?v=ysz5S6PUM-U'
          width='100%'
          height='100%'
        />
            {/* <h1 You Like It></h1>
            <p>What are you doing?</p> */}
            {/* <div className="animation-btns">
                <Button className="btns" buttonStyle="btn--outline" buttonSize="btn--large">
                    Lets Start
                </Button>
                <Button className="btns" buttonStyle="btn--primary" buttonSize="btn--large">
                    Watch Trailer <i className="far fa-play-circle"/>
                </Button>
            </div> */}
    
        </div>
    )
}
export default PortfolioAnimation;