import  React, { Component } from  'react';
import  MoviesService  from  './MoviesService';

const  moviesService  =  new  MoviesService();

class  MovieUpdate  extends  Component {

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
            plot: ''
        }

        this.handleTitle = this.handleTitle.bind(this);
        this.handleYear = this.handleYear.bind(this);
        this.handleRated = this.handleRated.bind(this);
        this.handleReleasedOn = this.handleReleasedOn.bind(this);
        this.handleGenre = this.handleGenre.bind(this);
        this.handleDirector = this.handleDirector.bind(this);
        this.handlePlot = this.handlePlot.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
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
                    plot: movie.plot
            })
          })
        }
    }

    handleTitle(event) {
        this.setState({ title: event.target.value});
    }

    handleYear(event){
        this.setState({ year: event.target.value});
    }

    handleRated(event){
        this.setState({ rated: event.target.value});
    }

    handleReleasedOn(event){
        this.setState({ released_on: event.target.value});
    }

    handleGenre(event){
        this.setState({ genre: event.target.value});
    }

    handleDirector(event){
        this.setState({ director: event.target.value});
    }

    handlePlot(event){
        this.setState({ plot: event.target.value});
    }

    handleSubmit(event){
        event.preventDefault();
        moviesService.updateMovie({
            'id': this.state.id,
            'title': this.state.title,
            'year': this.state.year,
            'rated': this.state.rated,
            'released_on': this.state.released_on,
            'genre': this.state.genre,
            'director': this.state.director,
            'plot': this.state.plot
        }).then((result)=>{
          alert("Movie updated!");
        }).catch(()=>{
          alert('Movie update failed.');
        });
    }

    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <div className="form-group">
                    <label>Title:</label>
                    <input type="text" value={this.state.title} onChange={this.handleTitle} />

                    <label>Year:</label>
                    <input type="text" value={this.state.year} onChange={this.handleYear} />

                    <label>Rated:</label>
                    <input type="text" value={this.state.rated} onChange={this.handleRated} />

                    <label>Released:</label>
                    <input type="text" value={this.state.released_on} onChange={this.handleReleasedOn} />

                    <label>Genre:</label>
                    <input type="text" value={this.state.genre} onChange={this.handleGenre} />

                    <label>Director:</label>
                    <input type="text" value={this.state.director} onChange={this.handleDirector} />

                    <label>Plot:</label>
                    <textarea value={this.state.plot} onChange={this.handlePlot} />

                    <input className="btn btn-primary" type="submit" value="Create" />
                </div>
          </form>
        );
    }

}
export default MovieUpdate;