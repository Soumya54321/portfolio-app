import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import "bootstrap-icons/font/bootstrap-icons.css";
import 'font-awesome/css/font-awesome.min.css';
import Sidebar from './components/sidebar';

import './App.css';

function App() {
  return (
    <Router>
      <div className="app">
        <Switch>
          <Route component={ Sidebar }/>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
