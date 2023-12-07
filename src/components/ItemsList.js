import * as React from 'react';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import {Item} from './Item.js';

export const ItemsList = ({items}) => (
  <List sx={{width: '100%', maxWidth: 600, bgcolor: 'background.paper'}}>
    {items.map((item, index) => (
      <React.Fragment key={index}>
        <Item {...item} />
        {index < items.length - 1 && <Divider variant="inset" component="li" />}
      </React.Fragment>
    ))}
  </List>
);
