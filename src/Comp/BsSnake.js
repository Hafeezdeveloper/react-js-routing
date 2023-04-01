import * as React from 'react';
import Button from '@mui/material/Button';
import Snackbar from '@mui/material/Snackbar';

export default function BsSnake(props) {
    let { mess , open , close  } = props
 


  const handleClose = () => {
      close(false)
  };

//   const buttons = (
//     <React.Fragment>
 
//     </React.Fragment>
//   );

  return (
    <div>
      <Snackbar
        anchorOrigin={{ vertical : "bottom", horizontal: "center" }}
        open={open}
        onClose={handleClose}
        message={mess}
        key={ "bottom" + "center"}
      />
    </div>
  );
}