import React from 'react';
import {AppBar,Typography} from '@mui/material';
import "./header.css";

function Header() {
  return (
    <>
    <AppBar className="header">
      <Typography >
        Form Validation Application 
      </Typography>
    </AppBar>
    </>
  )
}

export default Header