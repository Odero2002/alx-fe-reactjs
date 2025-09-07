import axios from 'axios';

// Fetch user data from GitHub API
export async function fetchUserData(username) {
  const response = await axios.get(`https://api.github.com/users/${username}`);
  return response.data;
}
