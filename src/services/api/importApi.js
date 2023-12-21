// services/api/importApi.js
import axios from 'axios';

/**
 * Import a file.
 * @param {File} file - The file to be imported.
 * @returns {Promise} - A Promise resolving to the server response.
 */

export const importFile = async file => {
  try {
    const formData = new FormData();
    formData.append('audio', file);

    const authTokenCookie = document.cookie
      .split('; ')
      .find(row => row.startsWith('authToken='));
    const authToken = authTokenCookie ? authTokenCookie.split('=')[1] : null;

    const response = await axios.post(
      'http://localhost:4000/api/v1/song',
      formData,
      {
        headers: {
          'Content-Type': 'multipart/form-data',
          Authorization: authToken ? authToken : '',
        },
      },
    );

    return response.data;
  } catch (error) {
    console.error('Error uploading song:', error.message);
    throw error;
  }
};
