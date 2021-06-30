import React, { useState } from 'react';
import reactDom from 'react-dom';
import './App.css';

const App = () => {

  const [fname, setFname] = useState(" ");
  const [lname, setLname] = useState(' ');
  const [fullname,setFullName]=useState(" ");
  const [lastname, setLastName]=useState(" ");

  const onSubmits = (event) => {
    event.preventDefault();
    setFullName(fname)
    setLastName(lname)
  }
  const inputEvent = (event) => {

    //console.log(event.target.value)
    setFname(event.target.value)
  }
  const inputEventTwo = (event) => {
    //console.log(event.target.value);
    setLname(event.target.value)
  }
  return (
    <>
      <div>
        <form onSubmit={onSubmits}>
        <div>
          <h1 >Login Template</h1>
          <h1 >Welcome {fullname} {lastname} </h1>
           <h1>Enter your First Name</h1>
            <input
              style={{
                marginLeft: '45%'
              }}
              type='text'
              placeholder="Enter your first name"
              onChange= {inputEvent}
              value={fname}
            />
            <br />
            <h1>Enter Your Last Name</h1>
            <input
              style={{
                marginLeft: '45%'
              }}
              type='text'
              placeholder='Enter your last name'
              onChange={inputEventTwo}
              value={lname}
            />
          </div>
          <br />
          <button
            style={{
              marginLeft: '50%',
              marginTop: '2%'
            }}
            type='submit'>Submit</button>
        </form>
      </div>
    </>
  );
}

export default App;
