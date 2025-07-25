const API_BASE_URL = 'http://localhost:3001';

export const userApi = {
  // GET /api/user-profile
  getUserProfile: async () => {
    const response = await fetch(`${API_BASE_URL}/api/user-profile`);
    if (!response.ok) throw new Error('User API failed');
    return await response.json();
  }
};