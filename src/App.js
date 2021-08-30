import React from 'react'; 
import { Switch, Route, BrowserRouter as Router  } from "react-router-dom";
import Home from "./components/Home"
import About from "./components/About"
// import Skills from "./components/Skills"
// import Expertise from "./components/Expertise"
// import Contact from "./components/Contact"
// import Project from "./components/Project"
import NavBar from "./components/NavBar"
import "./components/App.css"


function App() {
  return (
    <>
<Router>
  <NavBar/>
  <Switch>
    <Route  path='/' exact component={Home}/>
    <Route  path='/about' exact component={About}/>
  </Switch>
</Router>
    </>
  //   {/* <div className="App">
  //     <BrowserRouter>
  // <NavBar/>
  //   <Switch>
  //     <Route component={Home} path='/' exact/>
  //     <Route component={About} path='/about'/>
  //     <Route component={Skills} path='/skills'/>
  //     <Route component={Expertise} path='/expertise'/>
  //     <Route component={Project} path='/project'/>
  //     <Route component={Contact} path='/contact'/>
  //   </Switch>
  //   </BrowserRouter>
  //   </div> */}
  )
  
}


export default App;
