// api/auth/authApi.js
import {post} from './apiProxy';

/**
 * @typedef {Object} LoginRequest
 * @property {string} email - The user's email.
 * @property {string} password - The user's password.
 */

/**
 * @typedef {Object} LoginResponse
 * @property {string} message - A message from the server.
 * @property {string} [token] - An optional token returned on successful login.
 */

/**
 * Log in a user.
 * @param {LoginRequest} credentials - The user's login credentials.
 * @returns {Promise<LoginResponse>} - A Promise resolving to the server response.
 */
export const login = credentials => post('/user/login', credentials);
