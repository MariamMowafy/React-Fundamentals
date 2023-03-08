import React from 'react';
import { useState } from 'react';

// The title does not change to 'Title Two' after clicking even though it printed 'Title Two' in the console
const data = [
    { id: 1,img: "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png", name: 'Mariam Mowafy', age:23 },
    { id: 2,img:"https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png", name: 'Omar Eissa',age:24 },
    { id: 3, img: "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png",name: 'Jana Tamer', age:22 },
    { id: 4, img:"https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png",name: 'Zeina Mohamed',age:20 },
    { id: 5, img:"https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png",name: 'Salma Mohamed',age:20 },
  ];
const Birthday = () => {
    const[people, setPeople] = useState(data)
  return <React.Fragment>
    <div  className='container-div'>
    <h3>{people.length} Birthdays Today</h3>

  {people.map((person) => {
    const {id,img,name,age} = person
    // console.log(person);
    return <article >
    <div key ={id} className='container-div-1'>
        <div className="circle">
      <img src={img} alt="User profile" />
    </div>
    <div className='container-div-2'>
    <h4> {name}</h4>
    <h5> {age} years</h5>
    </div>
    </div> 
    </article>
    
  })}
<button className='btn1' onClick={() => setPeople([])}> clear all </button>
  {/* <button className='btn' onClick={() => setPeople([])}> */}
    {/* clear people */}
  {/* </button> */}
  </div>
</React.Fragment>;
};

export default Birthday;