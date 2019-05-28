import axios from 'axios';


const API_URL = 'https://api.nytimes.com';
const SPECIALITY_URL = "/svc/mostpopular/v2/mostviewed/all-sections/30.json?api-key=";
const API_KEY = 'Y7r3KD5c6iSk6lb9p0mKuN02R2U5xVgT';

export function getArticles() {
	return axios.get(`${API_URL}${SPECIALITY_URL}${API_KEY}`)
		.then(response => response.data);
}