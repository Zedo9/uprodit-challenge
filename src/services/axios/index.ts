import axios from "axios";
import { apiEndpoints } from "../../config";
import generateSignature from "../utils/signature";

const client = axios.create({
  baseURL: apiEndpoints.baseURL,
  headers: {
    "Content-Type": "application/json",
  },
});

client.interceptors.request.use(
  async (config) => {
    if (config.url && !config.url.includes("/v1/authheader")) {
      const result = generateSignature(config.url);
      config.headers = { ...config.headers, Authorization: result };
    }

    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

export { client };
