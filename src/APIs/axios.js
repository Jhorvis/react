import * as axios from 'axios';
import { API_URL } from 'react-native-dotenv'
var instance = axios.create();
console.log(process.env.REACT_APP_APP_NAME);
instance.defaults.baseURL = process.env.REACT_APP_API_URL;
//... mas opciones

export { instance as default };