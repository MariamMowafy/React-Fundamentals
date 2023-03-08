import React, { useState, useEffect } from 'react';
// by default runs after every re-render
// cleanup function
// second parameter
const UseEffectBasics = () => {

  const [value, setValue] = useState(0);

  
  useEffect(()=>{
    console.log('call use effect');
    if(value>=1)
    document.title = `New Messages(${value})`
  },[value] //as no dependencies, run only on initial render, else we can
  //change what is inside the array [value] to trigger if the 
  //dependant value is changed

  )
  useEffect(()=>{
    console.log('Hello world');
    document.title = `New Text(${value})`
  },[] //as no dependencies, run only on initial render, else we can
  //change what is inside the array [value] to trigger if the 
  //dependant value is changed

  )
  console.log('render component');
  return <>
  <h1> {value} </h1>
  <button className='btn' onClick={()=> setValue(value+1)}> Increase value </button>
  </>;
};

export default UseEffectBasics;
