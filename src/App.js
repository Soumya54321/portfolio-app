import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import "bootstrap-icons/font/bootstrap-icons.css";
import '@fortawesome/fontawesome-free/css/all.min.css';
import 'font-awesome/css/font-awesome.min.css';
// import Home from './components/home';
import Header from './components/header';

import './App.css';

function App() {
  return (
    <Router>
      <div className="app">
        <Switch>
          <Route component={Header}/>
          {/* <section id="hero" class="d-flex flex-column justify-content-center align-items-center">
            <div class="hero-container" data-aos="fade-in">
              <h1>Soumyadeep Paul</h1>
              <p>I'm a <span class="typed" data-typed-items="Student, Developer, Learner, Singer"></span></p>
            </div>
          </section> */}
        </Switch>
      </div>
    </Router>
  );
}

export default App;
