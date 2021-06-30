import React, { useState } from 'react';
import reactDom from 'react-dom';
import './App.css';

const App = () => {
  const [fname, setFname] = useState(" ");
  const [lname, setLname] = useState(' ');


  const ChangeInput = (event) => {

    console.log(event.target.value)
    setFname(event.target.value)
  }
  const ChangeInputTwo = (event) => {
    console.log(event.target.value);
    setLname(event.target.value)
  }

  const onSubmits = (event) => {
    event.preventDefault();
    setFname(fname)
    setLname(lname)
  }
  return (
    <>
      <div>
        <form onSubmit={onSubmits}>
        <div>
          <h1 >Login Template</h1>
          <h1 >Hello {fname} {lname} </h1>
          
            <input
              style={{
                marginLeft: '45%'
              }}
              onChange={ChangeInput}
              type='text'
              placeholder='Enter your first name'
              value={fname}
            />
            <input
              style={{
                marginLeft: '45%',
                marginTop: '10%'
              }}
              onChange={ChangeInputTwo}
              type='text'
              placeholder='Enter your last name'
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
