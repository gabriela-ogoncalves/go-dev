import axios from 'axios';
import AuthService from './Auth.js';

const API_URL = 'http://localhost:8080/api/profile/';

const getPublicContent = () => {
  return axios.get(API_URL + 'all');
};

const getUserProfile = () => {
  return axios.get(API_URL + 'user', { headers: AuthService.getAuthHeader() });
};

const getModeratorBoard = () => {
  return axios.get(API_URL + 'mod', { headers: AuthService.getAuthHeader() });
};

const getAdminBoard = () => {
  return axios.get(API_URL + 'admin', { headers: AuthService.getAuthHeader() });
};

const ProfileService = {
  getPublicContent,
  getUserProfile,
  getModeratorBoard,
  getAdminBoard,
};

export default ProfileService;
