import React, { Component } from 'react';

const Context = React.createContext();

const reducer = (state, action) => {
  switch(action.type){
    case 'DELETE_CONTACT':
    return{
      ...state,
      contacts: state.contacts.filter(contact => contact.id !== action.payload)
    }
    case 'ADD_CONTACT':
    return{
      ...state,
      contacts: [action.payload,...state.contacts]
    }
    default:
    return state;
  }
}

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
    ],
    dispatch: action => this.setState(state =>reducer(state,action))
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