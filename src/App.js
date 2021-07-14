import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import "bootstrap-icons/font/bootstrap-icons.css";
import '@fortawesome/fontawesome-free/css/all.min.css';
import 'font-awesome/css/font-awesome.min.css';
import Header from './components/header';

import './App.css';

function App() {
  return (
    <Router>
      <div className="app">
        <Switch>
          <Route component={Header}/>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
