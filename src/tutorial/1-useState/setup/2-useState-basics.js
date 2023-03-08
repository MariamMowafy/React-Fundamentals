import React, { useState } from 'react'; //function from react

const UseStateBasics = () => {
  // const value = useState(1)[[0]]
  // const handler = useState(1)[[1]]
  // console.log(value,handler)

  const [text,setText] = useState('Default Title')
  const handleClick = ()=>{
    if (text == 'Default Title') setText('Title One')
    else if(text == 'Title One') setText('Title Two')
    else setText('Default Title')
  }

  return <React.Fragment>
    <h1>{text}</h1>
    <button className='btn' onClick={handleClick}> change</button>
  </React.Fragment>;
};

export default UseStateBasics;
