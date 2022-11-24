import axios from 'axios';

// axios.defaults.baseURL = `${process.env.REACT_APP_BACKEND_URL}`

const axiosWithAuth = () => {
  const token = localStorage.getItem('token');
  const instance = axios.create({
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${token}`,
    },
  });

  return instance;
}

export default axiosWithAuth;