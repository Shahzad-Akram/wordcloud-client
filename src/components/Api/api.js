import axios from 'axios';

const route = 'http://localhost:4000/resource/';

const createComment = comment => {
  return axios
    .post(route, comment)
    .then(res => res)
    .catch(error => {
      throw error.response;
    });
};

const getWordCloud = videoId => {
  return axios
    .get(`${route}/${videoId}`)
    .then(res => res)
    .catch(error => {
      throw error.response;
    });
};
export default {
  createComment,
  getWordCloud
};
