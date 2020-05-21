import React, {useState} from 'react';



function Form(props) {

    

    const submitHandler = e => {
        //prevent page reload
        e.preventDefault();

        //write name from form to context.state

    }

    return (
        <div className="container">
            <form onSubmit={submitHandler}>
                <div className="form-group">
                    <label for="name">Name:</label>
                    <input name="name" className="form-control" type="text"></input>
                </div>
                <input type="submit" value="Submit"></input>
            </form>
        </div>
    )
}






export default Form;



