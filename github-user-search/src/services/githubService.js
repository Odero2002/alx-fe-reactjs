export const searchUsers = async ({ username, location, minRepos }) => {
  let query = username;
  if (location) query += ` location:${location}`;
  if (minRepos) query += ` repos:>=${minRepos}`;

  const response = await fetch(`https://api.github.com/search/users?q=${query}`);
  if (!response.ok) {
    throw new Error('Network response was not ok');
  }
  return response.json();
};
