import React from 'react'
import {Stack, Link, Typography} from '@mui/material'

const MuiLink = () => {
  return (
    <Stack spacing={2} direction='row' m={4}>
    <Typography variant='h6'>
      <Link href='#' variant='body2'>Link</Link>
      <Link href='#' color='secondary' underline='none'>Secondary</Link>
      </Typography>
    </Stack>
  )
}

export default MuiLink
