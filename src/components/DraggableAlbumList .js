import * as React from 'react';
import {Droppable} from 'react-beautiful-dnd';
import List from '@mui/material/List';
import {DraggableItem} from './DraggableAlbum';
import Pagination from '@mui/material/Pagination';

export const DraggableItemsList = ({
  items,
  currentPage,
  onPageChange,
  itemsPerPage,
  onDelete,
  onEdit,
}) => {
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const displayedItems = items.slice(startIndex, endIndex);

  return (
    <Droppable droppableId="droppable">
      {provided => (
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}>
          <List
            ref={provided.innerRef}
            {...provided.droppableProps}
            sx={{width: '100%', bgcolor: 'background.paper'}}>
            {displayedItems.map((item, index) => (
              <DraggableItem
                key={item.albumCover}
                onDelete={onDelete}
                onEdit={onEdit}
                {...item}
                index={index}
              />
            ))}
            {provided.placeholder}
          </List>
          <Pagination
            count={Math.ceil(items.length / itemsPerPage)}
            page={currentPage}
            onChange={(event, value) => onPageChange(value)}
            style={{marginTop: '16px'}}
          />
        </div>
      )}
    </Droppable>
  );
};
