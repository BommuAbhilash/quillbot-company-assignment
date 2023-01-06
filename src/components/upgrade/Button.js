import React from 'react'
import Button from '@mui/material/Button';
function MyButton({text}) {
  return (
    <div>
      <Button variant="contained" color="success" className='sub-header' >
                    {text}
      </Button>
    </div>
  )
}

export default MyButton
