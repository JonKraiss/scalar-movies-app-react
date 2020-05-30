import  React, { Component } from  'react';
import  MoviesService  from  './MoviesService';

const  moviesService  =  new  MoviesService();

class  MovieDetails  extends  Component {

    constructor(props) {
        super(props);
        this.state = {
            title: '',
            year: '',
            rated: '',
            released_on: '',
            genre: '',
            director: '',
            plot: ''
        }
    }

    componentDidMount(){
        const { match: { params } } = this.props;
        if(params && params.movie_id)
        {
            moviesService.getMovie(params.movie_id).then((movie)=>{
                this.setState({
                    title: movie.title,
                    year: movie.year,
                    rated: movie.rated,
                    released_on: movie.released_on,
                    genre: movie.genre,
                    director: movie.director,
                    plot: movie.plot
            })
          })
        }
      }

    render() {
        return (
            <table>
                <td>Title</td>
                <td>{this.state.title}</td>
                <td>Year</td>
                <td>{this.state.year}</td>
                <td>Rated</td>
                <td>{this.state.rated}</td>
                <td>Released</td>
                <td>{this.state.released_on}</td>
                <td>Genre</td>
                <td>{this.state.genre}</td>
                <td>Director</td>
                <td>{this.state.director}</td>
                <td>Plot</td>
                <td>{this.state.plot}</td>
            </table>
        );
    }

}
export default MovieDetails;