const API_URL = 'http://localhost:8080/api/';

const getAulaById = async (id) => {
  try {
    let response = await axios.get(API_URL + 'lesson/' + id);
    let lesson = response.data;

    let username = AuthService.getCurrentUser().username;
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
}

const AulaService = {
  getAulaById
};

export default AulaService;
