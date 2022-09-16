import { Formik, ErrorMessage  } from 'formik';
// import styled from 'styled-components';
import { FormContainer, BtnAdd, Label, Span, Input } from './Form.styled';
import * as yup from 'yup';
import { nanoid } from 'nanoid';

const schema = yup.object().shape({
    name: yup.string().required(),
    number: yup.string().required()
});  
   
const contactId = nanoid();

const initialValues = {
        name: '',
    number: "",
        id: contactId,
};

export default function ContactFormrm( propa ) {
    // console.log(propa)
    const handleSubmit = (values, {resetForm}) => {
        resetForm();
        console.log(values);
        propa.onSubmit(values);
    };

    return (
        <>
        <h2 style={{fontSize: "25px"}}>Phonebook</h2>
        <Formik validationSchema={schema} onSubmit={handleSubmit} initialValues={initialValues}>
            <FormContainer autoComplete="off">
                <Label htmlFor="name">
                    <Span>Name</Span>
                    <Input type="text" name="name" id={contactId}/>
                    <ErrorMessage name='name' component="div"/> 
                </Label>
                 <Label htmlFor="number">
                  <Span>Number</Span>
                    <Input type="tel" name="number"  />
                    <ErrorMessage name='number' component="div"/> 
                </Label>
                <BtnAdd type="submit">Add contact</BtnAdd>
            </FormContainer>
            </Formik>
            </>
    );
};
