import React from 'react';

// The title does not change to 'Title Two' after clicking even though it printed 'Title Two' in the console

const ErrorExample = () => {
  let title = 'Title One'
  const handleClick = () =>{
    title = 'Title Two'
    console.log(title)
  }
  return <React.Fragment>
    <h2>{title}</h2>
    <button type='button' className='btn' onClick={handleClick}>
      change title </button>
  </React.Fragment>;
};

export default ErrorExample;
