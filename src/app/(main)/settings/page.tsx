import React from 'react'
import { cookies } from 'next/headers';
import Typography from '@mui/material/Typography'
import { ReadonlyRequestCookies } from 'next/dist/server/web/spec-extension/adapters/request-cookies';
import { Role, User } from '@/types/type';
import { Alert, Box } from '@mui/material';
import Link from 'next/link';

async function Settings() {
    const cookie:ReadonlyRequestCookies = await cookies();
    const user:User = cookie && cookie.get('userData') && JSON.parse(cookie.get('userData')?.value as string);
    if(user){
      return (
        <Box display={'flex'} justifyContent={'center'} alignItems={'center'} flexDirection={'column'}>
            <Typography variant="h5" color="initial">Your Profile Settings</Typography>
            <Typography variant="body1" color="initial">user name: {user.username}</Typography>
            <Typography variant="body1" color="initial">role: {Role[user.role]}</Typography>
        </Box>
      )
    }else{
      return(
        <Box display={'flex'} justifyContent={'center'} >
          <Alert severity="error" sx={{marginTop:'2rem'}}>you are not permitted to access this page {'  '}
            <Link href={'/'} style={{textDecoration:'underline',color:'blue'}}> Home Page</Link>
          </Alert>
        </Box>
      )
    }
}

export default Settings