import  React, { Component } from  'react';
import  MoviesService  from  './MoviesService';
import MovieRatings from "./MovieRatings";

const  moviesService  =  new  MoviesService();

class  MovieDetails  extends  Component {

    constructor(props) {
        super(props);
        this.state = {
            id: '',
            title: '',
            year: '',
            rated: '',
            released_on: '',
            genre: '',
            director: '',
            plot: '',
            ratings: []
        }
    }

    componentDidMount(){
        const { match: { params } } = this.props;
        if(params && params.movie_id)
        {
            moviesService.getMovie(params.movie_id).then((movie)=>{
                this.setState({
                    id: params.movie_id,
                    title: movie.title,
                    year: movie.year,
                    rated: movie.rated,
                    released_on: movie.released_on,
                    genre: movie.genre,
                    director: movie.director,
                    plot: movie.plot,
                    ratings: movie.ratings
            })
          })
        }
    }

    render() {
        return (
            <div>
                <a href={'/'}>Movies List</a>
                <table>
                <tbody>
                    <tr>
                        <td>Title</td>
                        <td>{this.state.title}</td>
                    </tr>
                    <tr>
                        <td>Year</td>
                        <td>{this.state.year}</td>
                    </tr>
                    <tr>
                        <td>Rated</td>
                        <td>{this.state.rated}</td>
                    </tr>
                    <tr>
                        <td>Released</td>
                        <td>{this.state.released_on}</td>
                    </tr>
                    <tr>
                        <td>Genre</td>
                        <td>{this.state.genre}</td>
                    </tr>
                    <tr>
                        <td>Director</td>
                        <td>{this.state.director}</td>
                    </tr>
                    <tr>
                        <td>Plot</td>
                        <td>{this.state.plot}</td>
                    </tr>
                </tbody>
                </table>
                <MovieRatings movie_id={this.state.id} ratings={this.state.ratings} ></MovieRatings>
            </div>
        );
    }

}
export default MovieDetails;