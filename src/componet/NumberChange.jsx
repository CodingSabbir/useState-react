import React, { useState } from 'react';

const NumberChange = () => {
    const [number,setNumber]=useState(0)
 
    const chnage=()=>{
        setNumber(number+1)
    }
    return (
        <>
           <h1 className='text-[25px]'>Number: {number}</h1>
           <button className='text-[20px] bg-black text-white px-3 py-2 text-center' onClick={chnage}>click</button>
        </>
    );
};

export default NumberChange;


