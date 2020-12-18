import axios from 'axios';
import config from 'config';

axios.defaults.withCredentials = true;

export default {
  get: path => axios.get(`${config.openSkyUrl}${path}`),
};
