import React  from "react"
import {Card,CardColumns, } from "react-bootstrap"
import Footer from "./Footer"
import python from "../images/python.jpg"
import react from "../images/react.jpg"
import sql from "../images/sqldatabase.jpg"
import asp from "../images/asp2.png"
import android from "../images/android.jpg"
import csharp from "../images/csharp.png"
import "./PortfolioAnimation.css"
import imagee from "../images/skills.jpg"
import "./Cards.css"
function Skills(){
  return (
    <>
       <div className="skillimg-container">
          <img src={imagee}
          alt=""
           style={{height:"100vh",width: "100%", display: "flex",}} /> 
          </div>

   

<h1 className="skill-heading" style={{textAlign:"center",textDecoration:'underline black',background:"black",color:"white"}}>Skills</h1>
<br/>

<CardColumns>
    <Card>
    <Card.Img variant="top" src={asp} />
    <Card.Body>
      <Card.Title>Asp.Net Development</Card.Title>
      <Card.Text>
      WebForms, ADO, Rest API's, EntityFrameWork.{' '}
      </Card.Text>
    </Card.Body>
    <Card.Footer>
      <small className="text-muted">Osama Rais ©2021</small>
    </Card.Footer>
  
  </Card>
  <Card>
    <Card.Img variant="top" src={react} />
    <Card.Body>
      <Card.Title>React Js</Card.Title>
      <Card.Text>
      Bootstrap, Hooks, Angular, Transition, Spring,.{' '}
      </Card.Text>
    </Card.Body>
    <Card.Footer>
      <small className="text-muted">Osama Rais ©2021</small>
    </Card.Footer>
  
  </Card>
  <Card>
    <Card.Img variant="top" src={python} />
    <Card.Body>
      <Card.Title>Pyhton</Card.Title>
      <Card.Text>
      Numpy, Pandas, FastAPI, pyscopg2.{' '}
      </Card.Text>
    </Card.Body>
    <Card.Footer>
      <small className="text-muted">Osama Rais ©2021</small>
    </Card.Footer>
  
  </Card>
  <Card>
    <Card.Img variant="top" src={sql} />
    <Card.Body>
      <Card.Title>SQL DataBase</Card.Title>
      <Card.Text>
     Postgress, MySql, Sql Server.{' '}
      </Card.Text>
    </Card.Body>
    <Card.Footer>
      <small className="text-muted">Osama Rais ©2021</small>
    </Card.Footer>
  
  </Card>
  <Card>
    <Card.Img variant="top" src={android} />
    <Card.Body>
      <Card.Title>Android Application Development</Card.Title>
      <Card.Text>
      Using Java.{' '}
      </Card.Text>
    </Card.Body>
    <Card.Footer>
      <small className="text-muted">Osama Rais ©2021</small>
    </Card.Footer>
  
  </Card>
  <Card>
    <Card.Img variant="top" src={csharp} />
    <Card.Body>
      <Card.Title>C#</Card.Title>
      <Card.Text>
      WindowsForm, .NetFramework, Generics.{' '}
      </Card.Text>
    </Card.Body>
    <Card.Footer>
      <small className="text-muted">Osama Rais ©2021</small>
    </Card.Footer>
  
  </Card>
  {/* <Card>
    <Card.Img variant="top" src={image} />
    <Card.Body>
      <Card.Title>FYP-Reviews Insights</Card.Title>
      <Card.Text>
      A Machine Learning project using SVM,RF.{' '}
      </Card.Text>
    </Card.Body>
    <Card.Footer>
      <small className="text-muted">©2021</small>
    </Card.Footer>
  
  </Card>
  <Card>
    <Card.Img variant="top" src={image} />
    <Card.Body>
      <Card.Title>FYP-Reviews Insights</Card.Title>
      <Card.Text>
      A Machine Learning project using SVM,RF.{' '}
      </Card.Text>
    </Card.Body>
    <Card.Footer>
      <small className="text-muted">©2021</small>
    </Card.Footer>
  
  </Card>
  <Card>
    <Card.Img variant="top" src={image} />
    <Card.Body>
      <Card.Title>FYP-Reviews Insights</Card.Title>
      <Card.Text>
      A Machine Learning project using SVM,RF.{' '}
      </Card.Text>
    </Card.Body>
    <Card.Footer>
      <small className="text-muted">©2021</small>
    </Card.Footer>
  
  </Card> */}
</CardColumns>

<Footer/>
     </>
  )
  
}

export default Skills;

