// artistApi.js
import {get} from './apiProxy';

export const fetchArtists = async () => {
  try {
    const response = await get('/artist');
    return response;
  } catch (error) {
    console.error('Error fetching artists:', error);
    throw error;
  }
};

export const fetchArtistById = async artistId => {
  try {
    const response = await get(`/artist/${artistId}`);
    return response;
  } catch (error) {
    console.error(`Error fetching artist with ID ${artistId}:`, error);
    throw error;
  }
};
