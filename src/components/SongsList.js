//SongList.js
import * as React from 'react';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import Pagination from '@mui/material/Pagination';
import {Item} from './SongItem.js';

export const ItemsList = ({
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
    <div
      style={{display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
      <List sx={{width: '100%', bgcolor: 'background.paper'}}>
        {displayedItems.map((item, index) => (
          <React.Fragment key={index}>
            <Item {...item} onDelete={onDelete} onEdit={onEdit} />
            {index < displayedItems.length - 1 && (
              <Divider variant="inset" component="li" />
            )}
          </React.Fragment>
        ))}
      </List>
      <Pagination
        count={Math.ceil(items.length / itemsPerPage)}
        page={currentPage}
        onChange={(event, value) => onPageChange(value)}
        style={{marginTop: '16px'}}
      />
    </div>
  );
};
