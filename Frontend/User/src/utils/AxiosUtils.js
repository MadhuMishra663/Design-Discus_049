// apiUtils.js
import axios from 'axios';

// Define a base URL if you have one
const BASE_URL = 'http://localhost:9090';

// Utility function for making POST requests
export const AxioPost = async (endpoint, payload, withCredentials = true) => {
  try {
    const response = await axios.post(`${BASE_URL}/${endpoint}`, payload, {
      headers: {
        'Content-Type': 'application/json',
      },
      withCredentials,
    });
    return response;
  } catch (error) {
    console.error('API request error:', error);
    throw error; 
  }
};
