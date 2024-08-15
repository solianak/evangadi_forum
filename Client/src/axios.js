import axios from 'axios';

const api = axios.create({
  baseURL: "https://evangadi-forum-api-gmpc.onrender.com/api",
});


export default api;
