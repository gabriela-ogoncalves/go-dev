import axios from 'axios';

const API_URL = 'http://localhost:8080/api/';

const getTrilhas = async () => {
  try {
    let response = await axios.get(API_URL + 'paths');

    let trilhas = response.data.map((value) => {
      return {
        'id': value.id,
        'nome': value.name,
        'area': value.description,
        'qtdAulas': value.topics.reduce((acc, topic) => acc + topic.lessons, length),
        'qtdExercicios': value.topics.reduce((acc, topic) => acc + topic.exercises, length),
        'logo': require(`../assets/logo/trilhas/${value.name.toLowerCase()}-logo.png`),
      };
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
