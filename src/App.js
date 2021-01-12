import React from 'react';
import './App.scss';
import {
  BrowserRouter,
  Switch,
  Route,
  Link
} from 'react-router-dom';
import Header from './Components/Header/Header';
import Index from './Components/Index/Index';
// import Footer from './Components/Footer/Footer';
import AboutMe from './Components/Pages/AboutMe/AboutMe';
import Skills from './Components/Pages/Skills/Skills';
import ContactMe from './Components/Pages/ContactMe/ContactMe';
import Proyects from './Components/Pages/Proyects/Proyects';


function App() {
  return (
    <React.Fragment>
      
      <BrowserRouter>
        <Index />

        <Switch>
        <Route exact path="/Index">
            <Index />
          </Route>
               
          <Route exact path="/AboutMe">
            <AboutMe />
          </Route>

          <Route exact path="/ContactMe">
            <ContactMe />
          </Route>

          <Route exact path="/Proyects">
            <Proyects />
          </Route>

          <Route exact path="/Skills">
            <Skills />
          </Route>
            
        </Switch>
    </BrowserRouter>
  </React.Fragment>
  );
}

export default App;
