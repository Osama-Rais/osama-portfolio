import React from 'react';
// import './Cards.css';
// import { Spring } from "react-spring";
import {Card,Container} from "react-bootstrap"
import education from "../images/education.jpg"
import about from "../images/about.jpg"
import achievements from "../images/achievements.jpg"
import Goals from "../images/goals.jpg"


function Cards() {
  return (
    <div>
       <div className="skillimg-container">
    <img src={about}
    alt=""
     style={{    height:"100vh",width: "100%", display: "flex",}} 
    
     />
   
      
      
    </div>
  
    
    <h1 className="skill-heading" style={{textAlign:"center",textDecoration:'underline black',background:"black",color:"white"}}>About</h1>
 
   <Container className="skill-container">

    <Card>
    <Card.Img variant="top" src={achievements} />
    <Card.Body>
      <Card.Title>Achievements</Card.Title>
      <Card.Text>
      My All Over Achievements.{' '}
      </Card.Text>
    </Card.Body>
    <Card.Footer>
      <small className="text-muted">Osama Rais ©2021</small>
    </Card.Footer>
  
  </Card>
  <br/>

  <br/>

  <Card>
    <Card.Img variant="top" src={education} />
    <Card.Body>
      <Card.Title>Education</Card.Title>
      <Card.Text>
      My Educational Background.{' '}
      </Card.Text>
    </Card.Body>
    <Card.Footer>
      <small className="text-muted">Osama Rais ©2021</small>
    </Card.Footer>
  
  </Card>
  <br/>

<br/>

<Card>
  <Card.Img variant="top" src={Goals} />
  <Card.Body>
    <Card.Title>Future Goals</Card.Title>
    <Card.Text>
   My Future Goals.{' '}
    </Card.Text>
  </Card.Body>
  <Card.Footer>
    <small className="text-muted">Osama Rais ©2021</small>
  </Card.Footer>

</Card>
<br/>




 
</Container>
   </div>

          
    )
  }
export default Cards;

