import axios from 'axios';
import AuthService from './auth.js';

const API_URL = 'http://localhost:8080/api/';

const getAulaById = async (id) => {
  try {
    let response = await axios.get(API_URL + 'lesson/' + id);
    let lesson = response.data;

    let username = AuthService.getCurrentUser()?.username;
    let completed = false;
    if (username) {
      let progressReponse = await axios.post(API_URL + 'lesson/progress', {
        username,
        id
      }, { headers: AuthService.getAuthHeader() });

      completed = progressReponse.data;
    }

    let aula = {
      'id': lesson.id,
      'title': lesson.name,
      'desc': lesson.description,
      'status': completed,
      'fonte': lesson.source
    };

    return aula;
  } catch (error) {
    console.error(error);
  }
};

const getTopicoById = async (id, trilhaName) => {
  try {
    let response = await axios.get(API_URL + 'topic/' + id);
    let topic = response.data;

    let username = AuthService.getCurrentUser()?.username;
    let completedLessonIds = new Set();
    if (username) {
      let progressReponse = await axios.post(API_URL + 'path/progress', {
        username,
        id
      }, { headers: AuthService.getAuthHeader() });

      completedLessonIds = new Set(progressReponse.data);
    }

    let aulas = topic.lessons.map((lesson, index) => {
      return {
        'id': lesson.id,
        'index': index + 1,
        'nome': lesson.name,
        'desc': lesson.description,
        'fonte': lesson.source,
        'status': completedLessonIds.has(lesson.id) ? 'done' : 'progress',
        'topico': topic.name,
        'trilha': trilhaName
      };
    });

    let exercicios = topic.exercises.map((exercise, index) => {
      return {
        'index': index + 1,
        'nome': exercise.name,
        'desc': exercise.description,
        'fonte': exercise.source
      };
    });

    let topico = {
      'id': topic.id,
      'nome': topic.name,
      'desc': topic.description,
      'aulas': aulas,
      'exercicios': exercicios
    };

    return topico;
  } catch (error) {
    console.error(error);
  }
};

const sendAulaStatus = async (id, status) => {
  try {
    let username = AuthService.getCurrentUser()?.username;
    if (username)
      await axios.put(API_URL + 'lesson/updateStatus', {username, id, status}, { headers: AuthService.getAuthHeader() });
  } catch (error) {
    console.error(error);
  }
};

const AulaService = {
  getAulaById,
  getTopicoById,
  sendAulaStatus
};

export default AulaService;
