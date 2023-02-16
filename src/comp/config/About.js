import React from 'react'
import { useParams } from 'react-router-dom'

const About = () => {
  const param  = useParams()
  console.log(param)
  return (
    <div>
      I m about{param}
    </div>
  )
}

export default About
