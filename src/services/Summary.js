import axios from 'axios';
import AuthService from './auth.js';

const API_URL = 'http://localhost:8080/api/';

const getTrilhaById = async (id) => {
  try {
    let response = await axios.get(API_URL + 'path/' + id);
    let path = response.data;

    let username = AuthService.getCurrentUser()?.username;
    let completedLessonIds = new Set();
    if (username) {
      let progressReponse = await axios.post(API_URL + 'path/progress', {
        username,
        id
      }, { headers: AuthService.getAuthHeader() });

      completedLessonIds = new Set(progressReponse.data);
    }

    let topicos = [];
    path.topics.forEach((topic) => {
      let aulas = topic.lessons.map((lesson, index) => {
        return {
          'id': lesson.id,
          'index': index+1,
          'nome': lesson.name,
          'desc': lesson.description,
          'fonte': lesson.source,
          'status': completedLessonIds.has(lesson.id) ? 'done' : 'progress',
          'topico': topic.name,
          'trilha': path.name
        };
      });

      let exercicios = topic.exercises.map((exercise, index) => {
        return {
          'id': exercise.id,
          'index': index+1,
          'nome': exercise.name,
          'desc': exercise.description,
          'fonte': exercise.source,
          'topico': topic.name,
          'trilha': path.name
        };
      });

      let topico = {
        'id': topic.id,
        'nome': topic.name,
        'desc': topic.description,
        'aulas': aulas,
        'exercicios': exercicios
      };
      topicos.push(topico);
    });

    let trilha = {
      'id': path.id,
      'nome': path.name,
      'area': path.description,
      'qtdAulas': path.topics.reduce((acc, topic) => acc + topic.lessons.length, 0),
      'qtdExercicios': path.topics.reduce((acc, topic) => acc + topic.exercises.length, 0),
      'logo': require(`../assets/logo/trilhas/${path.name.toLowerCase()}-logo.png`),
      'topicos': topicos
    };

    return trilha;
  } catch (error) {
    console.error(error);
  }
};

const getSummaryByUser = async () => {
  try {
    const username = AuthService.getCurrentUser()?.username;

    if (username) {
      const response = await axios.get(
        API_URL + 'user/progress/' + username, 
        { headers: AuthService.getAuthHeader() }
      );
      
      return response.data;
    }
  } catch (err) {
    console.error('Error to get summary by user: ', err.message);
  }
};

const formatTrilhaData = (trilhas) => {
  return trilhas.map((value) => {
    const trilhaName = value.name || value.nome;
    const formattedData = {
      'id': value.id,
      'nome': trilhaName,
      'area': value.description,
      'status': value.status,
      'qtdAulas': value.topics ? value.topics?.reduce((acc, topic) => acc + topic.lessons.length, 0) : value.qtdAulas,
      'qtdExercicios': value.topics ? value.topics?.reduce((acc, topic) => acc + topic.exercises.length, 0) : value.qtdExercicios,
      'logo': require(`../assets/logo/trilhas/${trilhaName.toLowerCase()}-logo.png`),
    };

    return formattedData;
  });
};

const getTrilhaByUser = async (id) => {
  try {
    const username = AuthService.getCurrentUser()?.username;
    let data;

    if (username) {
      const response = await axios.get(
        API_URL + 'user/progress/' + username, 
        { headers: AuthService.getAuthHeader() }
      );

      const userPerfomance = response?.data;
      const {completedPaths, uncompletedPaths} = userPerfomance;

      let performance = [];
  
      if (completedPaths.length > 0) {
        completedPaths.map(path => {
          Object.assign(path, { status: 'done' });
          performance.push(path);
        });
      }
  
      if (uncompletedPaths.length > 0) {
        uncompletedPaths.map(path => {
          Object.assign(path, { status: 'progress' });
          performance.push(path);
        });
      }
  
      const trilha = performance.filter(item => item.id === id);
      data = formatTrilhaData(trilha)[0];
    }

    return data;
  } catch (err) {
    console.error('Error to get trilha by user: ', err.message);
  }
};

const SummaryService = {
  getTrilhaById,
  getSummaryByUser,
  formatTrilhaData,
  getTrilhaByUser
};

export default SummaryService;
