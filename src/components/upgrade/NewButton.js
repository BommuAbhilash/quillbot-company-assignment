import React from 'react'
import Button from '@mui/material/Button';
function NewButton({text}) {
  return (
    <div>
      <Button variant="contained" color="success" className='sub-header' style={{backgroundColor: "orange"}} >
                    {text}
      </Button>
    </div>
  )
}

export default NewButton
