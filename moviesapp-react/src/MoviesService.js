import axios from 'axios';
const API_URL = 'http://localhost:8000';

export default class MoviesService{

    constructor(){}

    getMoviesList() {
        const url = `${API_URL}/api/movies/`;
        return axios.get(url).then(response => response.data);
    }
    getMovie(id) {
        const url = `${API_URL}/api/movies/${id}`;
        return axios.get(url).then(response => response.data);
    }
    deleteMovie(movie){
        const url = `${API_URL}/api/movies/${movie.id}`;
        return axios.delete(url);
    }
    createMovie(movie){
        const url = `${API_URL}/api/movies/`;
        return axios.post(url,movie);
    }
    updateMovie(movie){
        const url = `${API_URL}/api/movies/${movie.id}`;
        return axios.put(url,movie);
    }
}
