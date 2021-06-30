import React, { useState } from 'react';
import './App.css';

const App=()=> {
  const [fname,setFname]=useState(" ");
  const SubmitForm=(event)=>
  {
   
    console.log('you have submitted this form')
  }

  const ChangeInput =(event) =>
  {
    console.log('it change the state')
    console.log(event.target.value)
    setFname(event.target.value)
  }
  return (
    <>
    <h1 >Login Template</h1>
      <h1 >Hello</h1>
      <input
        style={{
          marginLeft: '45%'
        }}
        onChange={ChangeInput}
        type='text'
        placeholder='Enter your first name'
        value=''
      />
      <input
        style={{
          marginLeft: '45%',
          marginTop: '10%'
        }}
        type='text'
        placeholder='Enter your last name'
      />
      <br />
      <button 
      style={{
        marginLeft: '50%',
        marginTop: '2%'
      }}
      type='submit' onClick={SubmitForm}>Submit</button>
    </>
  );
}

export default App;
