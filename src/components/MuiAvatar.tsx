import React from 'react'
import {Avatar, Stack, AvatarGroup} from '@mui/material'

const MuiAvatar = () => {
  return (
    <Stack spacing={4}> 
      <Stack direction='row' spacing={1}>
        <Avatar sx={{backgroundColor: 'primary.light'}}>BW</Avatar>
        <Avatar sx={{backgroundColor: 'success.light'}}>CK</Avatar>
      </Stack>
      <Stack direction='row' spacing={1}>
        <AvatarGroup max={3}>
        <Avatar sx={{backgroundColor: 'primary.light'}}>BW</Avatar>
        <Avatar sx={{backgroundColor: 'success.light'}}>CK</Avatar>
        <Avatar src='https://randomuser.me/api/portraits/men/75.jpg' alt='Jane Doe'/>
        <Avatar src='https://randomuser.me/api/portraits/med/men/74.jpg' alt='Jane Doe'/>
        </AvatarGroup>
      </Stack>
      <Stack direction='row' spacing={1}>
        <Avatar variant='square' sx={{backgroundColor: 'primary.light', width: '48px', height: '48px'}}>BW</Avatar>
        <Avatar variant='rounded' sx={{backgroundColor: 'success.light'}}>CK</Avatar>
      </Stack>
    </Stack>
  )
}

export default MuiAvatar
