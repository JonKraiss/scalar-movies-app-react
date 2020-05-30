import  React, { Component } from  'react';
import { BrowserRouter } from  'react-router-dom'
import { Route, Link } from  'react-router-dom'
import  MoviesList  from  './MoviesList'
import  MovieDetails  from  './MovieDetails'
import MovieCreate from "./MovieCreate";
import MovieUpdate from "./MovieUpdate";
import  './App.css';

class  App  extends  Component {

render() {
    return (
    <BrowserRouter>
        <Route  path="/"  exact  component={MoviesList}  />
        <Route  path="/movies/:movie_id"  component={MovieDetails}  />
        <Route  path="/movies/create"  component={MovieCreate}  />
        <Route  path="/movies/update/:movie_id"  component={MovieUpdate}  />
    </BrowserRouter>
    );
}
}
export  default  App;