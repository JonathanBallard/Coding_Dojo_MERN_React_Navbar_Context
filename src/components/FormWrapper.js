import React, {useState} from 'react';
import Form from './Form';


function FormWrapper(props) {
    return (
        <div className="formWrapper">
            <Form></Form>
            {props.children}
        </div>
    )
}






export default FormWrapper;



