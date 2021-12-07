import axios from "axios";

const instance = () => {
  return axios.create({
    baseURL: `http://localhost:1337`,
  });
};

export default instance