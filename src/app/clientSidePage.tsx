'use client'
import MyDrawer from '@/components/drawer'
import { AppBar, IconButton, Toolbar } from '@mui/material'
import React, { useState } from 'react'
import MenuIcon from '@mui/icons-material/Menu';
import {List,Settings} from '@mui/icons-material';
import { DrawerBtn } from '@/types/type';


function ClientSidePage() {
    const [drawerOpen, setDrawerOpen] = useState<boolean>(false);
    const drawerBtnList:DrawerBtn[] =[{icon:List,name:'List'},{icon:Settings,name:'Setings'}]

  const handleDrawerToggle = () => {
    setDrawerOpen(!drawerOpen);
  };
  return (
    <div>
        <AppBar position="fixed">
          <Toolbar >
            <IconButton
              color="inherit"
              aria-label="open drawer"
              edge="start"
              onClick={handleDrawerToggle}
            >
              <MenuIcon />
            </IconButton>
          </Toolbar>
        <MyDrawer open={drawerOpen} onClose={handleDrawerToggle} drawerBtnList={drawerBtnList}/>
        </AppBar>
    </div>
  )
}

export default ClientSidePage