import { Label, FilteredInput, Span, List, Item } from "./ContactList.styled";
import { BtnAdd } from "components/Form/Form.styled";
import { nanoid } from 'nanoid';

export default function ContactsList({ contacts, filter, changeFilter }) {
//     const filteredContacts = () => {
//         if (!filter) {
//             return contacts
//         }
        
//         const normalizedFilter = filter.toLowerCase();
//         const filteredArr = contacts.filter((name, number) => {
//             const normalizedName = name.toLowerCase()
//             const normalizedNumber = number.toLowerCase()
//             const result = normalizedName.includes(normalizedFilter) ||
//                 normalizedNumber.includes(normalizedFilter)
//             return result
//         })
//         return filteredArr
// }
   
    function onChange(e) {
         const res = ( e.currentTarget.value )
        changeFilter(res)
        const filtredContacts = contacts.filter(({ name, number }) => {
            const result = name.includes(res) || number.includes(res)
            console.log(result)
        })
             
    }
    

    return (
        <>
            <h2 style={{fontSize: "25px"}}>Contacts</h2>
            <Label htmlFor="filter">
                <Span>Find contacts by name</Span>
                <FilteredInput type="text" name="filter" value={filter} onChange={onChange} />
                
            </Label>
            <List>
                {contacts.map(({name, number }) => (
                
                    <Item key={nanoid()}>{name} : {number} <BtnAdd type="button">Delete</BtnAdd></Item>
                    
                
                ))}
            </List>
        </>
    );
};
