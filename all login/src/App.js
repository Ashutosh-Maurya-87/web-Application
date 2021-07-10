import React, { useState } from 'react';
import reactDom from 'react-dom';
import './App.css';

const App = () => {

  const [fullname, setFullname] = useState({
   fname:"",
   lname:"",
   email:"",
   phone:"",
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
    //const value=event.target.value;
    //const name=event.target.name;
    const {value,name}=event.target;
    //console.log(name) store last name value
    setFullname((preValue)=>{
    //console.log(preValue);
    return{
      ...preValue,
      [name]:value,
    }
  });
    // if(name==='fname')
    // {
    //   return{
    //     fname: value,
    //     lname:preValue.lname,
    //   };
    // }else if(name==='lname'){
    //   return{
    //     fname:preValue.fname,
    //     lname:value,
    //   };
    // }
    // else if(name==='email'){
    //   return{
    //     fname:preValue.fname,
    //     lname:preValue.lname,
    //     email:value,
    //     phone:preValue.phone,

    //   };
    // }
    // else if(name==='phone'){
    //   return{
    //     fname:preValue.fname,
    //     lname:preValue.lname,
    //     phone:value,
    //     email:preValue.email,
    //   };
    // }
    
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
          <p>{fullname.email}</p>
          <p>{fullname.phone}</p>
           <h1>Enter your First Name</h1>
            <input
            
              type='text'
              placeholder="Enter your first name"
              name='fname'
              onChange= {inputEvent}
              value={fullname.fname}
            />
            <br />
            <h1>Enter Your Last Name</h1>
            <input
              type='text'
              placeholder='Enter your last name'
              name="lname"
              onChange={inputEvent}
              value={fullname.lname}
            />
            <h1>Enter Your Email Id</h1>
            <input
              
              type='email'
              placeholder='Enter your e mail id'
              name="email"
              onChange={inputEvent}
              value={fullname.email}
            />
            <h1>Enter Your Mobile Number</h1>
            <input
             
              type='number'
              placeholder='Enter your phone number'
              name="phone"
              onChange={inputEvent}
              value={fullname.phone}
            />
          </div>
          <br />
          <button
            
            type='submit'>Submit</button>
        </form>
      </div>
    </>
  );
}

export default App;
