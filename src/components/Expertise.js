import React from "react"
import Footer from "./Footer"
import {Card,Container} from "react-bootstrap"
import image from "../images/expertise.jpg"
import api from "../images/api.png"
import asp from "../images/asp.png"
import "./PortfolioAnimation.css"
import "./Cards.css"
// import image from "../images/background2.jpg"
 function Expertise(){
  return(
    <>
    <div className="skillimg-container">
    <img src={image}
    alt=""
     style={{    height:"100vh",width: "100%", display: "flex",}} 
    
     />
   
      
      
    </div>
    <h1 className="skill-heading" style={{textAlign:"center",textDecoration:'underline black',background:"black",color:"white"}}>Expertise</h1>



<Container className="skill-container">

    <Card>
    <Card.Img variant="top" src={api} />
    <Card.Body>
      <Card.Title>API Integration</Card.Title>
      <Card.Text>
      API Testing Using Postman, Rest API's.{' '}
      </Card.Text>
    </Card.Body>
    <Card.Footer>
      <small className="text-muted">Osama Rais ©2021</small>
    </Card.Footer>
  
  </Card>
  <br/>

  <br/>

  <Card>
    <Card.Img variant="top" src={asp} />
    <Card.Body>
      <Card.Title>Asp.Net</Card.Title>
      <Card.Text>
      Full Stack .Net Developer.{' '}
      </Card.Text>
    </Card.Body>
    <Card.Footer>
      <small className="text-muted">Osama Rais ©2021</small>
    </Card.Footer>
  
  </Card>
 
</Container>
<Footer/>
</>
  )
}
export default Expertise;