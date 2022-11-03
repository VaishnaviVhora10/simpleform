import * as React from 'react';
import { useState } from 'react';
import {useNavigate} from 'react-router-dom';
import "./form.css";
// import List from './List';

export default function Form() {

  let navigate = useNavigate();

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [number, setNumber] = useState("");
  const [data, setData] = useState([]);
  
  function submit(){

    let email_val = "[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,3}$";
    if(name.length < 6){
  alert("Name must have atleast 6 characters");
    }
    else if(!email.match(email_val)){
      alert("Enter Proper Email");
    }
    else if(number.length<1){
      alert("Please Enter Your Age");
    }
    else{
    setData([...data, name, email, number]);
    }
  }

function gotolist(){
  navigate('/list',{state:{data}},{state:{name}})
}
  return (
    <div className='mainbody'>
        <div className='formbody'>
      <label> <p>Name:</p>
        <input type="text"
        placeholder='Enter your Name'
        value={name}
        onChange={(e) => setName(e.target.value)}/>
       </label>
      
      <label>
        <p>Email:</p>
      <input type="email" 
      placeholder='Enter your Email Id'
      value={email}
      onChange={(e) => setEmail(e.target.value)}/>
      </label>
      
      <label>
        <p>Age:</p>
      <input type="number"
      placeholder='Enter your Age'
      value={number}
      onChange={(e) => setNumber(e.target.value)} />
      </label>
      <div>
      <button type="submit" onClick={submit}> Submit </button>
      </div>
      <div>
      <button type="toList" onClick={gotolist}> Go to list </button>
      </div>
       </div>   
    </div>
     );
}