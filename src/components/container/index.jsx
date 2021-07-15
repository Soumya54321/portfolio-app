import { BrowserRouter as Switch, Route } from 'react-router-dom';
import Sidebar from '../sidebar';
import Home from '../home';

import "./style.css";

const Container = () => {
  return (
    <Switch>
        <Route component={ Sidebar }/>
        <Route component={ Home }/>
    </Switch>
  )
}

export default Container;