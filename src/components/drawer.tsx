// MyDrawer.tsx
import React from 'react';
import { Drawer, Toolbar, Divider, Typography, IconButton } from '@mui/material';
import ItemList from './itemList';
import CloseIcon from '@mui/icons-material/Close';
import { DrawerBtn } from '@/types/type';

type MyDrawerProps = {
  open: boolean;
  onClose: () => void;
  drawerBtnList:DrawerBtn[]
}

const MyDrawer: React.FC<MyDrawerProps> = ({ open, onClose,drawerBtnList }) => {
  return (
    <Drawer
      variant="temporary"
      open={open}
      onClose={onClose}
      ModalProps={{
        keepMounted: true, 
      }}
    >
        
      <Toolbar sx={{width:'300px',display:'flex',justifyContent:'space-between'}}>
        <Typography variant='h5'>PSP Express</Typography>
            <IconButton
              color="inherit"
              aria-label="open drawer"
              edge="start"
              onClick={onClose}
            >
              <CloseIcon />
            </IconButton>
      </Toolbar>
      <Divider />
      <ItemList drawerBtnList={drawerBtnList}/>
    </Drawer>
  );
};

export default MyDrawer;