
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import AboutMe from "./components/AboutMe/AboutMe";
import Blog from "./components/Blog/Blog";
import ContactMe from "./components/ContactMe/ContactMe";
import Home from "./components/Home/Home/Home";
import Navbar from "./components/Home/Navbar/Navbar";
import Projects from "./components/Projects/Projects";
import Resume from "./components/Resume/Resume";

function App() {
  return (
    <Router>
      <Navbar></Navbar>
      <Switch>
        <Route exact path='/'> 
            <Home></Home>
        </Route>
        <Route  path='/home'> 
            <Home></Home>
        </Route>
        {/* <Route path='/projects'>
            <Projects></Projects>
        </Route> */}
        <Route path='/blog'>
            <Blog></Blog>
        </Route>
        <Route path='/myResume'>
            <Resume></Resume>
        </Route>
        {/* <Route path='/aboutMe'>
            <AboutMe></AboutMe>
        </Route> */}
        <Route path='/contactMe'>
            <ContactMe></ContactMe>
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
