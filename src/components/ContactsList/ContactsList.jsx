
import { List, Item } from "./ContactList.styled";
import { BtnAdd } from "components/Form/Form.styled";
import { nanoid } from 'nanoid';



export default function ContactsList({ contacts, removeContacts }) {
    

    return (
        <>
    
            <List>
                {contacts.map(({ name, number, id }) => (
                
                    <Item key={nanoid()}>{name} : {number}
                        <BtnAdd type="button" onClick={() => removeContacts(id)}>Delete
                        </BtnAdd>
                    </Item>
                                    
                ))}
            </List>
        </>
    );
};


