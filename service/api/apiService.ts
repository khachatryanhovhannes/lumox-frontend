// import { BASE_URL } from "@/constants";
import UseCookies from "@/hooks/useCookies";
import axios from "axios";

const instance = axios.create({
  baseURL: "http://localhost:8800",
  headers: {
    "Content-Type": "application/json",
    Accept: "application/json",
  },
});

instance.interceptors.request.use(
  function (config) {
    const tokens = UseCookies({ type: "get" });
    if (tokens) {
      const { access_token } = tokens;
      config.headers.Authorization = `Bearer ${access_token}`;
      return config;
    }
    return config;
  },
  function (error) {
    return Promise.reject(error);
  }
);

instance.interceptors.response.use(
  function (response) {
    return response;
  },
  function (error) {
    return Promise.reject(error);
  }
);

export default instance;
