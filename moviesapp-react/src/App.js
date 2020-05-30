import  React, { Component } from  'react';
import { BrowserRouter } from  'react-router-dom'
import { Route } from  'react-router-dom'
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
        <Route  path="/movies/create/new"  exact component={MovieCreate}  />
        <Route  path="/movies/update/:movie_id" exact component={MovieUpdate}  />
        <Route  path="/movies/:movie_id" exact component={MovieDetails}  />
    </BrowserRouter>
    );
}
}
export  default  App;