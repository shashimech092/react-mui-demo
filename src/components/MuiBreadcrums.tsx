import React from 'react'
import {Box, Breadcrumbs, Link, Typography} from '@mui/material'
import NavigateNetxIcon from '@mui/icons-material/NavigateNext'

const MuiBreadcrums = () => {
  return (
    <Box m={2}>
      <Breadcrumbs aria-aria-label='breadcrumb' separator={<NavigateNetxIcon fontSize='small'/>} 
      maxItems={2}
    //   itemsAfterCollapse={2}
      itemsBeforeCollapse={2}
      >
        <Link underline='hover' href='#'>Home</Link>
        <Link underline='hover' href='#'>Catlog</Link>
        <Link underline='hover' href='#'>Accessories</Link>
        <Typography color='text.primary'>Shoes</Typography>
      </Breadcrumbs>
    </Box>
  )
}

export default MuiBreadcrums
