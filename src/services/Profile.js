import axios from 'axios';
import AuthService from './auth.js';

const API_URL = 'http://localhost:8080/api/user/';

const getUserProfile = () => {
  return axios.get(API_URL + AuthService.getCurrentUser().username, { headers: AuthService.getAuthHeader() });
};

const ProfileService = {
  getUserProfile
};

export default ProfileService;
