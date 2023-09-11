import { useState } from "react";

const Object = () => {
    const [myObj,setObj]=useState({
        name:'sabbir',
        age:22,
        city:'Bogura',
    });
    const changeValue=()=>{
        setObj(
            prevObj=>({
                ...prevObj, 

                    name:'Razu',
                    age:20,
                    city:'Dhaka',

            })
        ); 
    };
  
    return (
        <>
          <div className="mt-10">
            <h1>{myObj.name}</h1>
            <h1>{myObj.age}</h1>
            <h1>{myObj.city}</h1>
            <button onClick={changeValue}>click me</button>
          </div>
        </>
    );
};

export default Object;


