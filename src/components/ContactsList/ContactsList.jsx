import { Label, FilteredInput, Span, List, Item } from "./ContactList.styled";
import { BtnAdd } from "components/Form/Form.styled";

export default function ContactsList({ contacts }) {
    return (
        <>
            <h2 style={{fontSize: "25px"}}>Contacts</h2>
            <Label htmlFor="filter">
                <Span>Find contacts by name</Span>
                <FilteredInput type="text" name="filter" />
            </Label>
            <List>
                {contacts.map(({ id, name, number }) => (
                
                    <Item key={id}>{name} : {number} <BtnAdd type="button">Delete</BtnAdd></Item>
                    
                
                ))}
            </List>
        </>
    );
};
