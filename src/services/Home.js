import axios from 'axios';

const API_URL = 'http://localhost:8080/api/';

const getTrilhas = async () => {
  try {
    let response = await axios.get(API_URL + 'path/all');

    let trilhas = response.data.map((value) => {
      let test = {
        'id': value.id,
        'nome': value.name,
        'area': value.description,
        'qtdAulas': value.topics.reduce((acc, topic) => acc + topic.lessons.length, 0),
        'qtdExercicios': value.topics.reduce((acc, topic) => acc + topic.exercises.length, 0),
        'logo': require(`../assets/logo/trilhas/${value.name.toLowerCase()}-logo.png`),
      };

      return test;
    });

    return trilhas;
  } catch (error) {
    console.error(error);
  }
};

const HomeService = {
  getTrilhas
};

export default HomeService;
