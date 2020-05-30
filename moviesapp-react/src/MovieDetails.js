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
        );
    }

}
export default MovieDetails;