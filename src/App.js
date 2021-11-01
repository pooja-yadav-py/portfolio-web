import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import NavMenu from './components/NavMenu';
import About from './pages/About';
import Contact from './pages/Contact';
import Home from './pages/Home';
import Projects from './pages/Projects';



export default function App(){
  return(
    <>
    <Router>
      <NavMenu/>
      <Switch>
        <Route path="/home" exact>
           <Home/>
        </Route>
        <Route path="/about" exact>
           <About/>
        </Route>
        <Route path="/projects" exact>
           <Projects/>
        </Route>
        <Route path="/contact" exact>
           <Contact/>
        </Route>
        
      </Switch>
      
      
     
     
    </Router>
    
    </>
  )
}