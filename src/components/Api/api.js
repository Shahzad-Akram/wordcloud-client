import axios from 'axios';




const route = 'https://wordcloud-api-node.herokuapp.com/video';


const createComment = (comment) => {
    return axios.post(route,comment)
    .then(res=>res)
    .catch(error=>{throw error.response});
}

const getWordCloud = (videoId) => {
    return axios.get(`${route}/${videoId}`).then(res=>res)
    .catch(error=>{throw error.response});
}
export default {
createComment,
getWordCloud
}