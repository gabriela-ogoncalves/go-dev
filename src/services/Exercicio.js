import axios from 'axios';
import AuthService from './auth.js';

const API_URL = 'http://localhost:8080/api/';

const getExercicioById = async (id) => {
  try {
    let response = await axios.get(API_URL + 'exercise/' + id);
    let exercise = response.data;

    let username = AuthService.getCurrentUser()?.username;
    let completed = false;
    if (username) {
      let progressReponse = await axios.post(API_URL + 'exercise/progress', {
        username,
        id
      }, { headers: AuthService.getAuthHeader() });

      completed = progressReponse.data;
    }

    let exercicio = {
      'id': exercise.id,
      'title': exercise.name,
      'desc': exercise.description,
      'status': completed,
      'respostas': exercise.answers,
      'respostaCerta': exercise.correctAnswer
    };

    return exercicio;
  } catch (error) {
    console.error(error);
  }
};

const sendExercicioStatus = async (id, resposta, user) => {
  try {
    let username = user?.username || AuthService.getCurrentUser()?.username;
    if (username)
      await axios.put(API_URL + 'exercise/updateExercise', {username, id, resposta}, { headers: AuthService.getAuthHeader() });
  } catch (error) {
    console.error(error);
  }
};

const ExercicioService = {
    getExercicioById,
    sendExercicioStatus
  };
  
  export default ExercicioService;
  