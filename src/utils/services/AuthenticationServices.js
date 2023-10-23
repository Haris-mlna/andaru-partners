import axios from "axios";
import { INITIAL_API } from "../../apiConfig";
import { resolve } from "path";
import jwtDecode from "jwt-decode";

const Service = {
  loginUsername(params) {
    return new Promise((resolve) => {
      axios
        .post(`${INITIAL_API}Auth/UserNameAuth`, params)
        .then((res) => {
          if (res.status === 200) {
            setTimeout(() => resolve(res.data), 2000);
          }
        })
        .catch((err) => {
          resolve(undefined);
          // Handle the error here
        });
    });
  },

  loginPassWord(params) {
    return new Promise((resolve) => {
      axios.post(`${INITIAL_API}Auth`, params).then((res) => {
        if (res.status === 200) {
          var token = res.data;
          var tokenEncode = jwtDecode(token);
          axios.defaults.baseURL = tokenEncode.APIUrl;
          setTimeout(() => {
            resolve(res.data);
          }, 200);
        }
      });
    });
  },
};

export default Service;
