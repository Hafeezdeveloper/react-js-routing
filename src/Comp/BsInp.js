import React from 'react'
import TextField from '@mui/material/TextField';

const BsInp = (props) => {
    let { onChange  ,label } = props
  return (
    <div>
      <TextField  onChange={onChange} label={label} />

    </div>
  )
}

export default BsInp
