import axios from "axios";

axios.defaults.timeout = 2500;

export const Client = axios.create({
  baseURL: axios.defaults.url,
  timeout: 1500,
});

Client.interceptors.request.use(
  async (config) => {
    var authUser = await localStorage.getItem("accesToken");

    if (authUser && authUser.Token != "") {
      config.headers = {
        Authorization: `Bearer ${authUser.Token}`,
      };
    }
    return config;
  },
  (err) => {
    if (err.status == "401") {
      alert("Your token has been expired");
    } else {
      return Promise.reject(err);
    }
  }
);
