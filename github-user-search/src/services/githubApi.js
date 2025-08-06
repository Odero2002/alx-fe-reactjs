// src/services/githubApi.js
import axios from 'axios';

const API_URL = 'https://api.github.com/users';

export const searchUsers = async (username) => {
  try {
    const response = await axios.get(`${API_URL}/${username}`);
    return response.data;
  } catch (error) {
    console.error('Error fetching data: ', error);
    throw error;
  }
};
