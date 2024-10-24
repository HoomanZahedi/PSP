// ItemList.tsx
import React from 'react';
import { List, ListItem, ListItemIcon, ListItemText } from '@mui/material';
import { DrawerBtn } from '@/types/type';

type Item={
    drawerBtnList:DrawerBtn[]
}
const ItemList: React.FC<Item> = ({drawerBtnList}) => {
  return (
    <List >
      {drawerBtnList.map((text) => (
        <ListItem component={'button'} color='secondary' key={text.name}>
          <ListItemIcon>
            {<text.icon/>}
          </ListItemIcon>
          <ListItemText primary={text.name} color='primary'/>
        </ListItem>
      ))}
    </List>
  );
};

export default ItemList;