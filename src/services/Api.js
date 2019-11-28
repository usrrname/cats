import axios from "axios";

export default () => {
  return axios.create({
    baseURL: `http://localhost:8081` // keeps front and back separated during dev; enables hot-reload
    // baseURL: `/` // for production
  });
};
