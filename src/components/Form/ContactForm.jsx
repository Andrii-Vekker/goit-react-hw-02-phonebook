import { Formik, ErrorMessage  } from 'formik';
// import styled from 'styled-components';
import { FormContainer, BtnAdd, Label, Span, Input } from './Form.styled';
import * as yup from 'yup';

const schema = yup.object().shape({
    name: yup.string().required(),
    number: yup.string().min(7).max(7).required()
});  
   
const initialValues = {
        name: '',
        number: ""
    };

export default function ContactFormrm () {
    
    const handleSubmit = (values, {resetForm}) => {
        console.log(values)
        resetForm()
    };

    return (
        <>
        <h2 style={{fontSize: "25px"}}>Phonebook</h2>
        <Formik validationSchema={schema} onSubmit={handleSubmit} initialValues={initialValues}>
            <FormContainer autoComplete="off">
                <Label htmlFor="name">
                    <Span>Name</Span>
                    <Input type="text" name="name"/>
                    <ErrorMessage name='name' component="div"/> 
                </Label>
                 <Label htmlFor="number">
                  <Span>Number</Span>
                    <Input type="tel" name="number"/>
                    <ErrorMessage name='number' component="div"/> 
                </Label>
                <BtnAdd type="submit">Add contact</BtnAdd>
            </FormContainer>
            </Formik>
            </>
    );
};
