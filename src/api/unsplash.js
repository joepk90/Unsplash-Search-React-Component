import axios from 'axios';

export default axios.create({
    baseURL: 'https://api.unsplash.com',
    headers: {
        Authorization: 'Client-ID yt9sxQ14-cT0f4SsjkeRvQlsI9O9XFLJ_pmyvMZd4EM',
        client_id: '',
    }
});