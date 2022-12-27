import axios from "axios";
import AuthService from "./Auth.js";

const API_URL = "http://localhost:8080/api/test/";

const getPublicContent = () => {
  return axios.get(API_URL + "all");
};

const getUserBoard = () => {
  return axios.get(API_URL + "user", { headers: AuthService.getAuthHeader() });
};

const getModeratorBoard = () => {
  return axios.get(API_URL + "mod", { headers: AuthService.getAuthHeader() });
};

const getAdminBoard = () => {
  return axios.get(API_URL + "admin", { headers: AuthService.getAuthHeader() });
};

const ContentService = {
  getPublicContent,
  getUserBoard,
  getModeratorBoard,
  getAdminBoard,
};

export default UserService;
