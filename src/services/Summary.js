import axios from 'axios';

const API_URL = 'http://localhost:8080/api/';

const getTrilhaById = async (id) => {
  try {
    let response = await axios.get(API_URL + 'path/' + id);
    let path = response.data;

    let topicos = [];
    path.topics.forEach((topic) => {
      let aulas = topic.lessons.map((lesson, index) => {
        return {
          'index': index,
          'nome': lesson.name,
          'desc': lesson.description,
          'fonte': lesson.source
        };
      });

      let exercicios = topic.exercises.map((exercise, index) => {
        return {
          'index': index,
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

const SummaryService = {
  getTrilhaById
};

export default SummaryService;
