import React from 'react'
import { useLocation } from 'react-router-dom'

const Contact = () => {
    const location = useLocation()
    console.log(location)
  return (
    <div>
      i m contact <br />
       <img src={location.state.src} alt="" /> <br />
       {location.state.id} <br />
       {location.state.name} <br />
    </div>
  )
}

export default Contact
