import { useState } from 'react'

const AboutPage = () => {
  const [fanStatus , setFanStatus] = useState(false);
  const [speed , setSpeed] = useState(1);
  const display = (fanStatus) ? 'ON' : 'OFF';
  const status = () => {   
    setFanStatus(!fanStatus);
  }
  const fanSpeed = ()=>{
    if(display === 'ON'){
        if(speed == 3){
          setSpeed(1);
        }else{
          setSpeed(speed + 1);
        }
    }else{
      alert('شغل يعمم')
    }
   
  }
  return (
    <div className='flex flex-col gap-4 ml-3'>
      <h1 className='flex justify-center items-center'> About page </h1>
      
      <h1>fan status is {display}</h1>
      <h1>fan speed is {speed}</h1>
      <button className='btn btn-accent' onClick={status}> open/close </button>
      <button className='btn btn-primary' onClick={fanSpeed}> speed </button>
    </div>
  )
}

export default AboutPage
