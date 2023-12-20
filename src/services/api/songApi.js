// songApi.js
import {get} from './apiProxy';

export const fetchSongs = async () => {
  try {
    const response = await get('/song');
    return response;
  } catch (error) {
    console.error('Error fetching songs:', error);
    throw error;
  }
};
