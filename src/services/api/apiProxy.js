// services/api/apiProxy.js
const BASE_URL = process.env.REACT_APP_API_BASE_URL;

const handleResponse = async response => {
  if (!response.ok) {
    const error = await response.json();
    console.error('API Error:', error);
    throw new Error(error.message || 'Unknown API error');
  }
  return response.json();
};

export const get = url => fetch(BASE_URL + url).then(handleResponse);
export const post = (url, data, options = {}) => {
  const authTokenCookie = document.cookie
    .split('; ')
    .find(row => row.startsWith('authToken='));
  const authToken = authTokenCookie ? authTokenCookie.split('=')[1] : null;

  return fetch(BASE_URL + url, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Authorization: authToken ? authToken : '',
    },
    body: JSON.stringify(data),
    credentials: 'include',
    ...options,
  }).then(handleResponse);
};
