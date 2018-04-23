import React, { Component } from 'react';
import './App.css';

import { Header } from './components/Header';
import { Home } from './components/Home';
import { Date } from './components/Date';

class App extends Component {
  render() {
    return (
      <div>
        <Header />
        <Home />
        <Date />
      </div>
    );
  }
}

export default App;
