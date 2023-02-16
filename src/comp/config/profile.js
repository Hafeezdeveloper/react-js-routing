import { Button } from '@mui/material'
import React from 'react'
import { useNavigate } from 'react-router-dom'

const Profile = () => {
    const navigate = useNavigate()
    const  moveIdPg =() =>{
        const a = Math.ceil(Math.random() * 6 )
        navigate(`about/${a}`)
    }
  return (
    <div>
        <Button variant='contained' onClick={moveIdPg}>Click me</Button>
      i m profile
    </div>
  )
}

export default Profile
