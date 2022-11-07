import React from 'react'
import LinearProgress from '@mui/material/LinearProgress';

function Loader() {
  return (
    //   <CircularProgress style={{textAlign: 'center', width: '6rem', height: '6rem'}} color="success" />
    <LinearProgress variant="determinate" color="info" />
  )
}

export default Loader
