// ItemList.tsx
import React from 'react';
import { List, ListItem, ListItemIcon, ListItemText } from '@mui/material';
import { DrawerBtn, DrawerBtnName } from '@/types/type';
import { useRouter } from 'next/navigation';

type Item={
    drawerBtnList:DrawerBtn[]
}
const ItemList: React.FC<Item> = ({drawerBtnList}) => {
  const router = useRouter()
  const handleClick=(name:string)=>{
    switch (name) {
      case DrawerBtnName.Settings:
        router.push('/settings')
        break;
      case DrawerBtnName.List:
        router.push('/list')
        break
      default:
        router.push('/list')
    }
  }
  return (
    <List >
      {drawerBtnList.map((text) => (
        <ListItem component={'button'} color='secondary' onClick={()=>handleClick(text.name)} key={text.name}>
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