import React, { useState } from 'react'

const AirConditioning = () => {
    const [fanStatus , setFanStatus] = useState(false);
    const [change , setChange] = useState(16);
   
    const display = fanStatus ? 'ON' : 'OFF';
    const status = () =>{
       setFanStatus(!fanStatus);
    }
    const increment = () =>{
        if(display === 'ON'){
            if(change<=31){
              setChange(change + 1);
            }else{
                setChange(16);            }
        }else{
            alert('please open first')
        }
        
    }
    const decrement = () =>{
       if(display === 'ON'){
            if(change >= 17){
              setChange(change - 1);
            }else{
                setChange(32);            }
        }else{
            alert('please open first')
        }
    }
  return (
    <div className='flex flex-col gap-4 ml-3 mt-3'>    
      <h1>fanStatus is {display}</h1>
      <h1>{change} <sup>o</sup>C</h1>
      <button className='btn btn-error' onClick={status}>ON/OFF</button>  
      <button className='btn btn-primary' onClick={increment}>+</button>  
      <button className='btn btn-secondary' onClick={decrement}>-</button>  
    </div>
  )
}

export default AirConditioning
