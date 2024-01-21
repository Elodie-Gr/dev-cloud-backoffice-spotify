// albumApi.js
import {get, BASE_URL, handleResponse} from './apiProxy';

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

export const deleteAlbum = async id => {
  try {
    const authTokenCookie = document.cookie
      .split('; ')
      .find(row => row.startsWith('authToken='));
    const authToken = authTokenCookie ? authTokenCookie.split('=')[1] : null;

    const response = await fetch(`${BASE_URL}/album/${id}`, {
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

export const editAlbum = async (id, albumData) => {
  try {
    const authTokenCookie = document.cookie
      .split('; ')
      .find(row => row.startsWith('authToken='));
    const authToken = authTokenCookie ? authTokenCookie.split('=')[1] : null;

    const formData = new FormData();

    // Append album data to the formData
    Object.entries(albumData).forEach(([key, value]) => {
      formData.append(key, value);
    });

    const response = await fetch(`${BASE_URL}/album/${id}`, {
      method: 'PUT',
      headers: {
        Authorization: authToken ? authToken : '',
      },
      credentials: 'include',
      body: formData,
    });

    console.log('Album data:', albumData);
    console.log('Edit album response:', response);
    return handleResponse(response);
  } catch (error) {
    console.error(`Error editing album with ID ${id}:`, error);
    throw error;
  }
};

/* export const editAlbum = async (id, albumData) => {
  try {
    const authTokenCookie = document.cookie
      .split('; ')
      .find(row => row.startsWith('authToken='));
    const authToken = authTokenCookie ? authTokenCookie.split('=')[1] : null;

    const response = await fetch(`${BASE_URL}/album/${id}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
        Authorization: authToken ? authToken : '',
      },
      credentials: 'include',
      body: JSON.stringify(albumData),
    });

    console.log('Album data:', albumData);
    console.log('Edit album response:', response);
    return handleResponse(response);
  } catch (error) {
    console.error(`Error editing album with ID ${id}:`, error);
    throw error;
  }
}; */
