import BsButton from './BsButton';
import { Box } from '@mui/system';
import { Typography } from '@mui/material';
import FullWidInp from './FullWidInp';

function BsForm() {
  return (
    <Box className='container m-auto border border-5' sx={{ width: { md: '450px', sm: '350px', xs: '100% ' } }}>
      <Box className='px-3 '>
        <Typography variant='h4' className='text-center'>Login</Typography>
        <Box className='w-75 m-auto'>
          <Box className=''>
            <Box className=' my-3  '>

              <FullWidInp label='Email'  />
            </Box>
            <Box className=' my-3  '>

              <FullWidInp  label='Password'  />
            </Box>

            <Box sx={{ display: 'flex', justifyContent: 'center' }} className='  py-3'>
              <BsButton  name='Submit' />
            </Box>

          </Box>
        </Box>
      </Box>
    </Box>
  );
}

export default BsForm;
