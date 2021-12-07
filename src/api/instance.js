import axios from "axios";
import URL from "configs";

const instance = () => {
  return axios.create({
    baseURL: `${URL}`,
  });
};

export default instance