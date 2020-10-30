
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Home from "./components/Home/Home/Home";
import Navbar from "./components/Home/Navbar/Navbar";
import Projects from "./components/Projects/Projects";

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
        <Route path='/projects'>
            <Projects></Projects>
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
