import React, { Component } from 'react';

import './App.scss';
import { Homepage } from './components/Homepage/Homepage';
import Navbar from './components/Navbar/Navbar';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Login from './components/Login/Login';
import Signup from './components/Signup/Signup';
import Contact from './components/Contact/Contact';
import Footer from '../src/components/Homepage/Footer/Footer';
import Menu from './components/Menu/Menu';
import { HomeAdmin } from './components/Adminpage/HomeAdmin';

class App extends Component {
  render() {
    return (
      <Router>
        <Navbar />
        <Switch>
          <Route exact path="/" component={Homepage} />
          <Route exact path="/login" component={Login} />
          <Route exact path="/signup" component={Signup} />
          <Route exact path="/menu" component={Menu} />
          <Route exact path="/admin" component={HomeAdmin} />
          <Route exact path="/contact" component={Contact} />
        </Switch>
        <Footer />
      </Router>
    );
  }
}

export default App;
