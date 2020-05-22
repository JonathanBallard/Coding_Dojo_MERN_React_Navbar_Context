import React, {useState, useContext} from 'react';
import styles from './css/navbar.modules.css'
import MyContext from '../context/context';

function Navbar(props) {

    // take name from context
    const name = useContext(MyContext);
    return (
        <div className="navBar">
            <h1>Welcome {name}</h1>
        </div>
    )
}






export default Navbar;



