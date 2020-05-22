import React, {useState} from 'react';
import Navbar from './Navbar';
import FormWrapper from './FormWrapper';


function Wrapper(props) {
    return (
        <div className="wrapper container">{props.children}</div>
    )
}






export default Wrapper;



