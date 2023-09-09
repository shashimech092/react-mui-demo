import React from 'react'
import {Box} from '@mui/material'

export default function MuiResponsiveness() {
  return (
    <Box sx={{height: '300px', width: {
        xs: 100,    // coresponding width for the breakpoint, 0
        sm: 200,    // 600 and above
        md: 300,    // 900 and above
        lg: 400,    // 1200 and above
        xl: 500     // 1536 and above
    }, 
    bgcolor: 'secondary.main'}}>
     </Box>
  )
}
