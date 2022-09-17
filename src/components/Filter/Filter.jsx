import { Label, FilteredInput, Span} from "../ContactsList/ContactList.styled";


export default function Filter({filter, handleChange}) {
    return (
        <>
            <Label htmlFor="filter">
                <Span>Find contacts by name</Span>
                <FilteredInput type="text" name="filter" value={filter} onChange={handleChange} />
                
            </Label>
        </>
    );
};
