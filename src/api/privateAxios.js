import axios from "./axios";

const privateAxios = axios.create({
  withCredentials: true,
});

privateAxios.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem("accessToken");
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => Promise.reject(error)
);

export default privateAxios;
