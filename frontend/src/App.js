import logo from './logo.svg';
import './App.css';
import HomePage from './components/HomePage';
import SignUp from './components/SignUp';
import LandingPage from './components/LandingPage';
import LogIn from './components/LogIn';
import Analytics from './components/Analytics';



import {
  Route,
  BrowserRouter as Router,
  Switch,
  Redirect,
  withRouter
} from "react-router-dom";

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={LandingPage}></Route>
        <Route path="/signup" component={SignUp}>
        </Route>
        <Route path="/home" component={HomePage}></Route>
        <Route path="/login" component={LogIn}></Route>
        <Route path="/analytics" component={HomePage}></Route>
        <Route path="/community" component={HomePage}></Route>
      </Switch>
    </Router>
  );
}

export default App;
