import logo from './logo.svg';
import './App.css';
import React from 'react';
import Login from './components/LogIn';
import Home from './components/Home';

class App extends React.Component {
  constructor() {
    super();

    this.state = {
      Access: false
    }
    this.successLogin = (_index) => {
      this.setState({
        Access: _index
      })
    }

  }
  render() {
    if (this.state.Access == true) {
      return (
        <Home />
      );
    }
    else {
      return (
        <Login AccessFunc={this.successLogin} />
      );
    }
  }
}

export default App;
