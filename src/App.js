import { BrowserRouter as Router } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import "bootstrap-icons/font/bootstrap-icons.css";
import 'font-awesome/css/font-awesome.min.css';
import Container from './components/container';

import './App.css';

function App() {
  return (
    <Router>
      <div className="app">
        <Container/>
      </div>
    </Router>
  );
}

export default App;
