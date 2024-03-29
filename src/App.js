import {useState} from 'react';
import './App.scss';
import Index from './Components/Index/Index';
import AboutMe from './Components/Pages/AboutMe/AboutMe';
import Skills from './Components/Pages/Skills/Skills';
import ContactMe from './Components/Pages/ContactMe/ContactMe';
import Header from './Components/Header/Header';
import Proyects from './Components/Pages/Proyects/Proyects';
import Footer from './Components/Footer/Footer';
import {
  BrowserRouter,
  Switch,
  Route,
} from 'react-router-dom';

const App = () => {

  const [changeColor, setChangeColor] = useState(false);

  return (
    <div className={changeColor ? 'darkColor' : null}>
      
      <BrowserRouter>
        <Header changeColor={changeColor} />
        <Switch>   

          <Route exact path="/">
            <Index setChangeColor={setChangeColor} changeColor={changeColor}/>
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

        <Footer changeColor={changeColor}/>
    </BrowserRouter>
  </div>
  );
}

export default App;
