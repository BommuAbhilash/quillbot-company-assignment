import React from 'react'
import Button from '@mui/material/Button';
import "./home.css";

function Home() {
    return (
        <div>
            <div className='heading'>
                <p className='header'>
                    Save time and write with confidence
                </p>
                <div className='header'><Button variant="contained" color="success" className='sub-header'>
                    Upgrade to QuillBot Premium
                </Button>
                </div>
            </div>
        </div>
    )
}

export default Home
