import React, { Component } from 'react';

const Context = React.createContext();

export class Provider extends Component {
  state = {
    contacts:[
      {
        id:1,
        name:'Igor Savin',
        email:'beixiaofeng@gmail.com',
        phone:'0961872044'
      },
      {
        id:2,
        name:'Dima Didenko',
        email:'didko@gmail.com',
        phone:'0992889035'
      },
      {
        id:3,
        name:'Alexander Babenko',
        email:'abeb@gmail.com',
        phone:'098994045'
      }
    ]
  };

  render() {
    return (
      <Context.Provider value={this.state}>
      {this.props.children}
      </Context.Provider>
    );
  }
}

export const Consumer = Context.Consumer;