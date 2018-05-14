import React, { Component } from 'react';
import logo from './logo.svg';
import '../src/css/App.css';
import Weather from './containers/weather';
import {Switch, Route, Redirect, NavLink} from 'react-router-dom';
import Home from '../src/components/home';
import About from '../src/components/about';
import Header from '../src/components/header';


class App extends Component {
  render() {
    return (
      <div className="App">
      <Header />
      <main>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/weather" component={Weather} />
          <Route path="/about" component={About} />
          <Redirect to="/" />
        </Switch>
      </main>
      </div>
    );
  }
}

export default App;
