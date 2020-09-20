import axios from 'axios'; //consumindo api

const api = axios.create({ baseURL: 'https://rocketseat-node.herokuapp.com/api' 
});

export default api; //exportando a api