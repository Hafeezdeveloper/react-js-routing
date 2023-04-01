import { TextField } from '@mui/material'
import React from 'react'

const FullWidInp = (props) => {
    let { onChange  , label } = props

  return (
    <div>
      <TextField fullWidth label={label} onChange={onChange} />
    </div>
  )
}

export default FullWidInp
