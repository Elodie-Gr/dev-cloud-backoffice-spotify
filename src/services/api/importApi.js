// services/api/importApi.js
import axios from 'axios';
const apiUrl =
  process.env.REACT_APP_API_BASE_URL || 'http://localhost:4000/api/v1';

/**
 * Import a file.
 * @param {File[]} file - The file to be imported.
 * @returns {Promise} - A Promise resolving to the server response.
 */

export const importFile = async files => {
  try {
    const formData = new FormData();

    for (let i = 0; i < files.length; i++) {
      formData.append('audio', files[i]);
    }

    const authTokenCookie = document.cookie
      .split('; ')
      .find(row => row.startsWith('authToken='));
    const authToken = authTokenCookie ? authTokenCookie.split('=')[1] : null;

    const response = await fetch(`${apiUrl}/song`, {
      method: 'POST',
      body: formData,
      headers: {
        Authorization: authToken ? authToken : '',
      },
    });

    if (response.ok) {
      console.log('Files uploaded successfully');
    } else {
      console.error('Error uploading files');
    }
  } catch (error) {
    console.error('Error uploading files:', error);
  }
};
