// artistApi.js
import {get, BASE_URL, handleResponse} from './apiProxy';

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

export const deleteArtist = async id => {
  try {
    const authTokenCookie = document.cookie
      .split('; ')
      .find(row => row.startsWith('authToken='));
    const authToken = authTokenCookie ? authTokenCookie.split('=')[1] : null;
    console.log('artist id', id);
    const response = await fetch(`${BASE_URL}/artist/${id}`, {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json',
        Authorization: authToken ? authToken : '',
      },
      credentials: 'include',
    });

    return handleResponse(response);
  } catch (error) {
    console.error('Error deleting album:', error);
    throw error;
  }
};
