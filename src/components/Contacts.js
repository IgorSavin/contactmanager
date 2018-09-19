import React, { Component } from 'react';
import Contact from './Contact';

class Contacts extends Component {
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
    const {contacts} = this.state;
    return (
      <React.Fragment>
        {contacts.map(contact =>(
          <Contact 
          key={contact.id}
          contact={contact} 
         />
        ))}
      </React.Fragment>
    );
  }
}

export default Contacts;
