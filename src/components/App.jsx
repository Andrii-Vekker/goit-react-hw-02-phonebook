import { Component } from "react";
// import { nanoid } from 'nanoid';

import ContactFormrm from "./Form/ContactForm";
import ContactsList from "./ContactsList/ContactsList";

// const idx = nanoid()
export class App extends Component {

  state = {
    filter: '',
    contacts: [],
  };

  addContacts = (data) => {
    this.setState((prev) => ({
      
       contacts: [...prev.contacts, data]
      
    }));
  };

     handleChange = (e) => {
       const { name, number } = e.target;
       this.setState({[name]:number})
}
  
  render() {
    const {addContacts, handleChange} = this
    const { name, number, filter, contacts } = this.state;

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
        <ContactFormrm onSubmit={addContacts}  />
        <ContactsList contacts={contacts} handleChange={handleChange} />
      </div>
    );
  };
};


