import * as React from 'react';
import {Droppable} from 'react-beautiful-dnd';
import List from '@mui/material/List';
import {DraggableItem} from './DraggableItem';

export const DraggableItemsList = ({items}) => (
  <Droppable droppableId="droppable">
    {provided => (
      <List
        ref={provided.innerRef}
        {...provided.droppableProps}
        sx={{width: '100%', maxWidth: 600, bgcolor: 'background.paper'}}>
        {items.map((item, index) => (
          <DraggableItem key={item.albumTitle} {...item} index={index} />
        ))}
        {provided.placeholder}
      </List>
    )}
  </Droppable>
);
