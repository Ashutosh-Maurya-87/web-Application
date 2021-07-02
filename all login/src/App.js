import React, { useState } from 'react';
import reactDom from 'react-dom';
import './App.css';

const App = () => {

  const [fullname, setFullname] = useState({
   fname:"",
   lname:"",
  });
  //const [lname, setLname] = useState(' ');
  //const [fullname,setFullName]=useState(" ");
  //const [lastname, setLastName]=useState(" ");

  const onSubmits = (event) => {
    event.preventDefault();
    alert(`You have Submitted this form 
     Your First Name:${fullname.fname}
      Your Last Name : ${fullname.lname}`);
  }
  const inputEvent = (event) => {

    //console.log(event.target.value)
    const value=event.target.value;
    const name=event.target.name;
    //console.log(value) store first name value
    //console.log(name) store last name value
    setFullname((preValue)=>{
    //console.log(preValue)
    if(name==='fname')
    {
      return{
        fname: value,
        lname:preValue.lname,
      };
    }else if(name==='lname'){
      return{
        fname:preValue.fname,
        lname:value,
      };
    }
    })
  }
  // const inputEventTwo = (event) => {
  //   //console.log(event.target.value);
  //   setLname(event.target.value)
  // }
  return (
    <>
      <div>
        <form onSubmit={onSubmits}>
        <div>
          <h1 >Login Template</h1>
          <h1 >Welcome {fullname.fname} {fullname.lname}  </h1>
           <h1>Enter your First Name</h1>
            <input
              style={{
                marginLeft: '45%'
              }}
              type='text'
              placeholder="Enter your first name"
              name='fname'
              onChange= {inputEvent}
              value={fullname.fname}
            />
            <br />
            <h1>Enter Your Last Name</h1>
            <input
              style={{
                marginLeft: '45%'
              }}
              type='text'
              placeholder='Enter your last name'
              name="lname"
              onChange={inputEvent}
              value={fullname.lname}
            />
            <h1>Enter Your Email Id</h1>
            <input
              style={{
                marginLeft: '45%'
              }}
              type='email'
              placeholder='Enter your e mail id'
              name="email"
              onChange={inputEvent}
              value={fullname.email}
            />
            <h1>Enter Your Mobile Number</h1>
            <input
              style={{
                marginLeft: '45%'
              }}
              type='number'
              placeholder='Enter your phone number'
              name="phone"
              onChange={inputEvent}
              value={fullname.phone}
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
