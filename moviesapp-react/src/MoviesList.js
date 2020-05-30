import  React, { Component } from  'react';
import MoviesService from "./MoviesService";

const  moviesService  =  new  MoviesService();

class  MoviesList  extends  Component {

    constructor(props) {
        super(props);
        this.state  = {
            movies: [],
        };
    }

    componentDidMount() {
    var  self  =  this;
    moviesService.getMoviesList().then(function (result) {
        console.log(result);
        self.setState({ movies:  result.data})
    });
}

    render()
    {
        return (
            <table  className="table">
                <thead  key="thead">
            <tr>
                <th>#</th>
                <th>Title</th>
                <th>Year</th>
                <th>Rated</th>
                <th>Released</th>
                <th>Genre</th>
                <th>Director</th>
                <th>Plot</th>
            </tr>
            </thead>
            <tbody>
            {this.state.movies.map( movie =>
                <tr  key={movie.id}>
                    <td>{movie.id}  </td>
                    <td>{movie.title}</td>
                    <td>{movie.year}</td>
                    <td>{movie.rated}</td>
                    <td>{movie.released_on}</td>
                    <td>{movie.genre}</td>
                    <td>{movie.director}</td>
                    <td>{movie.plot}</td>
                </tr>
            )}
            </tbody>
            </table>
        );
  }
}
export  default  MoviesList;