import React, { useState } from 'react'

const HomePage = () => {

  const [count , setCount] = useState(10);
  const [userName , setUserName] = useState('yousef');
  const increment = () => {
    setCount(count+ 1);
  }
  const decrement = () => {
    if(count <= 1){
      return count;
    }else{
      setCount(count- 1);
    }
      
  }
  const changeName = () => {
    const newName = prompt('Enter Your Name');
    setUserName(newName);
  }

  return (
    <div className='mt-5 ml-10 flex flex-col gap-4'>
      <h1 className='flex justify-center items-center'> Hello this is landing page</h1>

      <h1 className='mt-5'>count is :{count}</h1>
      <button className="btn btn-primary w-10" onClick={increment}> + </button>
      <button className='btn btn-error w-10' onClick={decrement}> - </button>

      <h1 className='text-2xl' > hello {userName}</h1>
      <button className='btn btn-info' onClick={changeName}>change Name</button>
    </div>
  )
}

export default HomePage
