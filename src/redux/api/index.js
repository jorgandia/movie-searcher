import axios from 'axios';

import { apiKey } from '../../config/config';

const baseURL = `https://www.omdbapi.com/?apiKey=${apiKey}`;

export const apiCall = (url, data, headers, method) => axios({
    method,
    url: baseURL + url,
    data,
    headers
})