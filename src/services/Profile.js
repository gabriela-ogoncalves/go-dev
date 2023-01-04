import axios from 'axios';
import AuthService from './Auth.js';

const API_URL = 'http://localhost:8080/api/profile/';

const getUserProfile = () => {
  return axios.post(API_URL + 'user', { username: AuthService.getCurrentUser().username }, { headers: AuthService.getAuthHeader() });
};


const ProfileService = {
  getUserProfile
};

export default ProfileService;
