import  React, { Component } from  'react';
import MoviesService from "./MoviesService";

const  moviesService  =  new  MoviesService();

class  MoviesList  extends  Component {

    constructor(props) {
        super(props);
        this.state  = {
            movies: [],
        };

        this.handleDelete = this.handleDelete.bind(this);
    }

    componentDidMount() {
        var  self  =  this;
        moviesService.getMoviesList().then(function (result) {
            self.setState({ movies:  result.data})
        });
    }

    handleDelete(e, movie_id){
            moviesService.deleteMovie({id: movie_id}).then(()=>{
            let  newArr  =  this.state.movies.filter(function(obj) {
                return  obj.id  !==  movie_id;
            });
            this.setState({movies:  newArr})
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
                    <td><button onClick={(e)=>  this.handleDelete(e,movie.id) }>Delete</button></td>
                </tr>
            )}
            </tbody>
            </table>
        );
  }
}
export  default  MoviesList;