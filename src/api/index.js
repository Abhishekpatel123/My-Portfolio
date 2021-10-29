import axios from "axios";
import instance from "./instance";

const api = {
  getSkills: () => instance.get("/skills"),
};



export default api
