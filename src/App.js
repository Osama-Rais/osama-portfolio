import React from 'react'; 
import { BrowserRouter as Router,Switch, Route } from "react-router-dom";
import Home from "./Layout/Home"
import Navigation from "./Layout/Navigation"

function App() {
  return (
     
    <Router>
    <Navigation />
    <Switch>
      <Route path="/" exact component={() => <Home />} />
      {/* <Route path="/about" exact component={() => <About />} />
      <Route path="/contact" exact component={() => <Contact />} /> */}
    </Switch>
  
  </Router>
   

  );
}


export default App;
