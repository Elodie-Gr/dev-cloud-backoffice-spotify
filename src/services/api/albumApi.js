// albumApi.js
import {get} from './apiProxy';

export const fetchAlbums = async () => {
  try {
    const response = await get('/album');
    return response;
  } catch (error) {
    console.error('Error fetching albums:', error);
    throw error;
  }
};

export const fetchAlbumById = async albumId => {
  try {
    const response = await get(`/album/${albumId}`);
    return response;
  } catch (error) {
    console.error(`Error fetching album with ID ${albumId}:`, error);
    throw error;
  }
};

export const fetchAlbumCoverById = async albumId => {
  try {
    const response = await get(`/album/cover/${albumId}`);
    return response;
  } catch (error) {
    console.error(`Error fetching album with ID ${albumId}:`, error);
    throw error;
  }
};
