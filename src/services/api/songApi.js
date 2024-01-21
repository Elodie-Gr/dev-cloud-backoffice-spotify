// songApi.js
import {get, BASE_URL, handleResponse} from './apiProxy';

export const fetchSongs = async () => {
  try {
    const response = await get('/song');
    return response;
  } catch (error) {
    console.error('Error fetching songs:', error);
    throw error;
  }
};

export const deleteSong = async id => {
  try {
    const authTokenCookie = document.cookie
      .split('; ')
      .find(row => row.startsWith('authToken='));
    const authToken = authTokenCookie ? authTokenCookie.split('=')[1] : null;

    const response = await fetch(`${BASE_URL}/song/${id}`, {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json',
        Authorization: authToken ? authToken : '',
      },
      credentials: 'include',
    });

    return handleResponse(response);
  } catch (error) {
    console.error('Error deleting song:', error);
    throw error;
  }
};

export const editSong = async (id, songData) => {
  try {
    const authTokenCookie = document.cookie
      .split('; ')
      .find(row => row.startsWith('authToken='));
    const authToken = authTokenCookie ? authTokenCookie.split('=')[1] : null;

    const formData = new URLSearchParams();
    formData.append('title', songData.title);

    const response = await fetch(`${BASE_URL}/song/${id}`, {
      method: 'PUT',
      body: formData,
      headers: {
        Authorization: authToken ? authToken : '',
      },
    });

    return handleResponse(response);
  } catch (error) {
    console.error('Error editing artist:', error);
    throw error;
  }
};
