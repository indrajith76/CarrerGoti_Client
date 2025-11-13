import axios from "./axios";

const publicAxios = axios.create({
  withCredentials: true,
});

export default publicAxios;
