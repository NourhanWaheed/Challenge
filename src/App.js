import logo from './logo.svg';
import './App.css';
import React from 'react';
import Login from './components/Login';


import { BrowserRouter as Router, Route } from "react-router-dom";

class App extends React.Component {
  constructor() {
    super();

    

  }
  render() {
    
      return (
        <Login/>
      );
    }
}

export default App;
