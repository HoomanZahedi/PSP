import React from 'react'
import Cookies from 'js-cookie';
import Typography from '@mui/material/Typography'

function Settings() {
    const userCookie = Cookies.get('userData');
    console.log(userCookie)
  return (
    <div>
        <Typography variant="body1" color="initial">user name: </Typography>
        <Typography variant="body1" color="initial">role: </Typography>

    </div>
  )
}

export default Settings