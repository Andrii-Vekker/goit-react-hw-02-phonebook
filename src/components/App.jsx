import { Component } from "react";

import ContactFormrm from "./Form/ContactForm";
import ContactsList from "./ContactsList/ContactsList";
import Filter from "./Filter/Filter";

export class App extends Component {

  state = {
    filter: '',
    contacts: [],
  };

  addContacts = (data) => {
    if (this.isDuplicate(data)) {
      return alert(`${data.name} is allready in contacts`);
    };
    this.setState((prev) => ({
      
      contacts: [...prev.contacts, data]
      
    }));
  };

  removeContacts = (id) => {
    this.setState((prev) => {
      const newContacts = prev.contacts.filter((item) => item.id !== id);
      return { contacts: newContacts };
    });
  };

  handleChange = (e) => {
    const { name, value } = e.target;
    this.setState({
      [name]: value
    });
  };

  
    filteredContacts()  {
      const { contacts, filter } = this.state;
      
      if (!filter) {
        return contacts;
      };

        const normalizedFilter = filter.toLocaleLowerCase();
        const filteredContacts = contacts.filter(({ name, number }) => {
        const normName = name.toLocaleLowerCase();
        const normNum = number.toLocaleLowerCase();
        const result = normName.includes(normalizedFilter) || normNum.includes(normalizedFilter);
        return result
      });
      return filteredContacts;
  };

    isDuplicate ({name, number}) {
      const { contacts } = this.state;
      const result = contacts.find(item => item.name === name && item.number === number);
      return result;
  };
   
  
  render() {
    const {addContacts, handleChange, removeContacts} = this
    const { filter, } = this.state;
    const contacts = this.filteredContacts()
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
        <h2 style={{fontSize: "25px"}}>Phonebook</h2>
        <ContactFormrm onSubmit={addContacts}  />
        <h2 style={{ fontSize: "25px" }}>Contacts</h2>
        <Filter filter={filter} handleChange={handleChange}/>
        <ContactsList contacts={contacts}  removeContacts={removeContacts}  />

            
      </div>
    );
  };
};


