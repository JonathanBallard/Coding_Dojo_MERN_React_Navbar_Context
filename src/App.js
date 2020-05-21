import React, {useState} from 'react';
import './App.css';
import Wrapper from './components/Wrapper';
import Navbar from './components/Navbar';
import FormWrapper from './components/FormWrapper';

import MyContext from './context/context';

function App() {
  return (
    <div className="App">
        <MyContext.Provider value={"context value"}>
            <Wrapper>
                <Navbar/>
                <FormWrapper/>
            </Wrapper>
        </MyContext.Provider>
    </div>
);
}

export default App;
