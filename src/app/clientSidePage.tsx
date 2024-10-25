'use client'
import MyDrawer from '@/components/drawer';
import React, { useState } from 'react';
import { AppBar, IconButton, Toolbar, Popper, Paper, MenuList, MenuItem, ClickAwayListener } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import { List, Settings } from '@mui/icons-material';
import { DrawerBtn, Role } from '@/types/type';
import Cookies from 'js-cookie';
import { useRouter } from 'next/navigation';

type ClientSidePageProps = {
  role: Role;
}

const ClientSidePage: React.FC<ClientSidePageProps> = ({ role }) => {
  const [drawerOpen, setDrawerOpen] = useState<boolean>(false);
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const router = useRouter();

  const drawerBtnList: DrawerBtn[] = role === Role.admin ? 
    [{ icon: List, name: 'List' }, { icon: Settings, name: 'Settings' }] : 
    [{ icon: List, name: 'List' }];

  const handleDrawerToggle = () => {
    setDrawerOpen(!drawerOpen);
  };

  const handleAccountIconClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(anchorEl ? null : event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleLogout = () => {
    Cookies.remove('userData');
    router.push('/login');
    handleClose();
  };

  const handleLoginRedirect = () => {
    router.push('/login');
    handleClose();
  };

  const open = Boolean(anchorEl);

  return (
    <div>
      <AppBar position="fixed">
        <Toolbar>
          <IconButton color="inherit" aria-label="open drawer" edge="start" onClick={handleDrawerToggle}>
            <MenuIcon />
          </IconButton>
          <IconButton color="inherit" edge="end" onClick={handleAccountIconClick}>
            <AccountCircleIcon />
          </IconButton>
          <Popper open={open} anchorEl={anchorEl} role={undefined} transition disablePortal>
            {({ TransitionProps, placement }) => (
              <Paper>
                <ClickAwayListener onClickAway={handleClose}>
                  <MenuList autoFocusItem={open}>
                    {role ? (
                      <MenuItem onClick={handleLogout}>Logout</MenuItem>
                    ) : (
                      <MenuItem onClick={handleLoginRedirect}>Login</MenuItem>
                    )}
                  </MenuList>
                </ClickAwayListener>
              </Paper>
            )}
          </Popper>
        </Toolbar>
        <MyDrawer open={drawerOpen} onClose={handleDrawerToggle} drawerBtnList={drawerBtnList} />
      </AppBar>
    </div>
  );
}

export default ClientSidePage;