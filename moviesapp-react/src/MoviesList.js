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
        self.setState({ movies:  result.data})
    });
}

    render()
    {
        return (
            <table  className="table">
            <tbody>
            {this.state.movies.map( movie =>
                <tr  key={movie.id}>
                    <td>{movie.id}  </td>
                    <td><a  href={"/movies/" + movie.id}>{movie.title}</a></td>
                </tr>
            )}
            </tbody>
            </table>
        );
  }
}
export  default  MoviesList;