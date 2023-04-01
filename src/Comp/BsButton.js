import { Button , CircularProgress } from '@mui/material'
import React from 'react'

const BsButton = (props) => {
    let { loading , name , onClick } = props
  return (
    <div>
      <Button  disabled={loading} onClick={onClick} variant='contained' >{loading ? <CircularProgress /> : name }</Button>
    </div>
  )
}

export default BsButton
