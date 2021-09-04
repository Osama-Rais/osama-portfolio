import React from "react"
import {Card,Container} from "react-bootstrap"
import Footer from "./Footer"
 import image from "../images/background2.jpg"
 import blood from "../images/blood.png"
 import project from "../images/project.jpeg"

 function Project(){
  return(
    
    <>
    <div className="skillimg-container">
    <img src={project}
    alt=""
     style={{    height:"100vh",width: "100%", display: "flex",}} 
    
     />
   
      
      
    </div>



<h1 className="skill-heading" style={{textAlign:"center",textDecoration:'underline black',background:"black",color:"white"}}>Projects</h1>


<br/>

<Container className="skill-container">

    <Card>
    <Card.Img variant="top" src={image} />
    <Card.Body>
      <Card.Title>FYP-Reviews Insights</Card.Title>
      <Card.Text>
      A Machine Learning project using SVM,RF.{' '}
      </Card.Text>
    </Card.Body>
    <Card.Footer>
      <small className="text-muted">Osama Rais ©2021</small>
    </Card.Footer>
  
  </Card>
  <br/>

  <br/>

  <Card>
    <Card.Img variant="top" src={blood} />
    <Card.Body>
      <Card.Title>Blood Donation Mobile Appilcation</Card.Title>
      <Card.Text>
     Android Application Using Java.{' '}
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
export default Project;

