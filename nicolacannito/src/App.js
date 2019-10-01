import React, { Component } from 'react';
import './App.scss';
import Header from './Header';
import HomeSection from './HomeSection';

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      titleTransition: false,
    }
  }

  componentDidMount() {
    this.setState({ titleTransition: true });
  }

  render() {

    return (
      <div className="container">
        <Header />
        <HomeSection titleTransition={ this.state.titleTransition } />
      </div>
    );
  }
}

export default App;