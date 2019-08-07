import React, { Component } from 'react';
import './App.scss';
import Header from './Header';
import HomeSection from './HomeSection';

class App extends Component {

  render() {

    return (
      <div className="container">
        <Header />
        <HomeSection />
      </div>
    );
  }
}

export default App;