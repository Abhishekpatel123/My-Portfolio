import axios from "axios";

const instance = () => {
  return axios.create({
    baseURL: `${process.env.URL}`,
  });
};

export default instance