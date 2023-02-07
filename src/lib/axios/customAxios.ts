import axios from "axios";
import config from "../../config/config.json";
import { ACCESS_KEY, REQUEST_KEY } from "../../constants/token/token.constant";

export const customAxios = axios.create({
  baseURL: `${config.server}`,
  headers: {
    [REQUEST_KEY]: `Bearer ${localStorage.getItem(ACCESS_KEY)}`,
  },
});
