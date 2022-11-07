import React from 'react'
import Alert from '@mui/material/Alert';

function Message({severity, error}) {
  return (
      <Alert severity={severity}>{error}</Alert>
  )
}

export default Message
