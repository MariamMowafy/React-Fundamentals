import React, { useState } from 'react';

const UseStateCounter = () => {

  const [count, setCount] = useState(0)

  const increaseCount = () =>{
    setCount(count+1)
  }

  const decreaseCount = () =>{
    if(count>0)
    setCount(count-1)
  }

  const resetCount = () =>{
    setCount(0)
  }
  const complexCount = () =>{
    setTimeout(() => {
      // setCount(count+1)  //doesnt chnge on multiple clicks
      setCount((prevCount)=>{
      return prevCount+1  //changes on multiple clicks
      })
    }, 2000);
  }

  return <>
  <section style ={{margin: '4rem 0'}}>
    <h2> regular counter</h2>
    <h1>{count}</h1>
    <button className='btn' onClick={decreaseCount}> Decrease </button>
    <button className='btn' onClick={resetCount}> Reset </button>
    <button className='btn' onClick={increaseCount}> Increase </button>

  </section>
  <section style ={{margin: '4rem 0'}}>
    <h2> complex counter</h2>
    <h1>{count}</h1>
    <button className='btn' onClick={complexCount}> Increase Later</button>

  </section>
  </>;
};

export default UseStateCounter;
