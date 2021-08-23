import * as axios from 'axios';
import { API_URL } from 'react-native-dotenv'
var instance = axios.create();
console.log(API_URL)
instance.defaults.baseURL = 'https://fakestoreapi.com';
//... mas opciones

export { instance as default };