import React, {useState, useContext} from 'react';
import MyContext from '../context/context';


function Form(props) {

    const context = useContext(MyContext);
    const { name, setName } = useContext(MyContext);
    const [ thisName, setThisName ] = useState('');
    const SubmitHandler = e => {
        //prevent page reload
        e.preventDefault();

        //write name from form to context.state
        context[1](thisName)
    }

    const ChangeHandler = e => {

        return setThisName(e.target.value);
    }

    return (
        <div className="container">
            <form onSubmit={SubmitHandler}>
                <div className="form-group">
                    <label for="name">Name:</label>
                    <input name="name" onChange={ChangeHandler} className="form-control" type="text" value={thisName}></input>
                </div>
                <input type="submit" value="Submit"></input>
            </form>
        </div>
    )
}






export default Form;



