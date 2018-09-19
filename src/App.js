import React, { Component } from 'react';
import Contact from './components/Contact';
import Header from './components/Header';


import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
      <Header branding="Contact Manager"/>
       <Contact name="Igor Savin"
       email="beixiaofeng@gmail.com"
       phone="0968874044"
       />     
       <Contact name="Dima Didenko"
       email="Didko@gmail.com"
       phone="0952059035"
       />     
      </div>
    );
  }
}

export default App;
