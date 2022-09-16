import { Label, FilteredInput, Span, List, Item } from "./ContactList.styled";
import { BtnAdd } from "components/Form/Form.styled";
import { nanoid } from 'nanoid';

export default function ContactsList({ contacts, handleChange }) {

    
    const filteredContacts = () => {
        const { name, number, filter } = contacts
        if (!filter) {
            return contacts
        }
        
        const normalizedFilter = filter.toLocaleLowerCase();
        const filteredArr = contacts.filter((name, number) => {
            const normalizedName = name.toLocaleLowerCase()
            const normalizedNumber = number.toLocaleLowerCase()
            const result = normalizedName.includes(normalizedFilter) || normalizedNumber.includes(normalizedFilter)
            return result
        })
        return filteredArr
}

    return (
        <>
            <h2 style={{fontSize: "25px"}}>Contacts</h2>
            <Label htmlFor="filter">
                <Span>Find contacts by name</Span>
                <FilteredInput type="text" name="filter" onChange={handleChange}/>
            </Label>
            <List>
                {contacts.map(({name, number }) => (
                
                    <Item key={nanoid()}>{name} : {number} <BtnAdd type="button">Delete</BtnAdd></Item>
                    
                
                ))}
            </List>
        </>
    );
};
