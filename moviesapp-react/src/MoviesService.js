import axios from 'axios';
const API_URL = 'http://localhost:8000/movies/api';

export default class MoviesService{
    getMoviesList() {
        const url = `${API_URL}`;
        return axios.get(url).then(response => response.data);
    }
    getMovie(id) {
        const url = `${API_URL}/${id}`;
        return axios.get(url).then(response => response.data);
    }
    deleteMovie(movie){
        const url = `${API_URL}/${movie.id}`;
        return axios.delete(url);
    }
    createMovie(movie){
        const url = `${API_URL}/create`;
        return axios.post(url,movie);
    }
    updateMovie(movie){
        const url = `${API_URL}/${movie.id}`;
        return axios.put(url,movie);
    }
    createRating(movie_id, score, review){
        const url = `${API_URL}/ratings/${movie_id}`;
        return axios.post(url,{movie_id: movie_id, score:score, review:review});
    }
}
