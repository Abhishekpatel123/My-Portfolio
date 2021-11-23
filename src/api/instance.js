import axios from "axios";

const instance = () => {
  return axios.create({
    baseURL: `https://portfolio-backend-12345.herokuapp.com`,
  });
};

export default instance