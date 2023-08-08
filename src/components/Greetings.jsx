import React from 'react'
import waveimg from '../assets/hand.png'

const Greetings = ({Name}) => {
  return (
    <div>Hello, {Name?Name:"there!"}
    {Name&&<img src={waveimg} style={{width:"20px", height:"20px"}}/>}
    </div>
  )
}

export default Greetings