
import axios from 'axios';

const API_URL = 'http://swapi.dev/api/people/';

function fetchPeople() {
  return axios.get(API_URL);
}

export default fetchPeople;