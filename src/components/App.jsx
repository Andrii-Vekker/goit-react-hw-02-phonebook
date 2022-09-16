import { Component } from "react";


import ContactFormrm from "./Form/ContactForm";
import ContactsList from "./ContactsList/ContactsList";


export class App extends Component {

  state = {
    name: '',
    number: '',
     filter: '',
     contacts: [
    {id: 'id-1', name: 'Rosie Simpson', number: '459-12-56'},
    {id: 'id-2', name: 'Hermione Kline', number: '443-89-12'},
    {id: 'id-3', name: 'Eden Clements', number: '645-17-79'},
    {id: 'id-4', name: 'Annie Copeland', number: '227-91-26'},
  ],
   
  };

  

  render() {
    const {name, number, filter, contacts} = this.state
    return (
      <div
        style={{
          padding: "32px",
          height: '100vh',
          display: 'flex',
          flexDirection: "column",
          alignItems: 'start',
          fontSize: 40,
          color: '#010101'
        }}
      >
        React homework template
        <ContactFormrm name={name} number={number} />
        <ContactsList contacts={contacts} />
      </div>
    );
  };
};


