import React from 'react'
import TextField from '@mui/material/TextField';


const BsTextFeild = (props) => {
    let { onChange  , label } = props
  return (
    <div>
    <TextField onChange={onChange}  label="Filled" variant="filled" label={label} />

    </div>
  )
}

export default BsTextFeild
