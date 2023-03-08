import React, { useState } from 'react';

const UseStateObject = () => {
  const [person,setPerson] = useState(
    {name: 'Mariam', 
    age:23, 
    message:'random message'});
  const changeMessage = () => {
    setPerson({... person, message:'Not so random'}) //leave the objject as iss
    // console.log("hello world")
  }
  return <React.Fragment>
    <h3>{person.name}</h3>
    <h3>{person.age}</h3>
    <h3>{person.message}</h3>
    <button className='btn' onClick={changeMessage}> change</button>
  </React.Fragment>;
};

export default UseStateObject;
