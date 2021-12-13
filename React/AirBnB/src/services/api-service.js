import axios from 'axios';

const annonymousInstance = axios.create({
  baseURL: 'http://localhost:5000',
  timeout: 10000,
  headers: {
    'Content-Type': 'application/json',
  },
});

const fetchCities = async () => {
  const response = await annonymousInstance.get('/cities');
  return response.data;
};

const APIService = {
  fetchCities,
};

export default APIService;
