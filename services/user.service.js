import axios from "axios";
import authHeader from "./auth-header";
import { api_URL, auth_URL } from "../config/env";

const getUserData = async () => {
  try {
    const res = axios.get(`${auth_URL.AUTH_URI}/users/me`, {
      headers: authHeader(),
    });
  } catch (e) {
    return e.response.data;
  }
};

export default {
  getUserData,
};
