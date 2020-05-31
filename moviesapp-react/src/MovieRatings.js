import  React, { Component } from  'react';
import  MoviesService  from  './MoviesService';

const  moviesService  =  new  MoviesService();

class  MovieRatings  extends  Component {
    constructor(props) {
        super(props);

        this.state = {
            movie_id: this.props.movie_id,
            ratings: this.props.ratings,
            new_rating_score:'',
            new_rating_review:'',
        }

        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleNewRatingScore = this.handleNewRatingScore.bind(this);
        this.handleNewRatingReview = this.handleNewRatingReview.bind(this);
    }

    handleSubmit(event){
        event.preventDefault();

        let newRatingsArray = this.state.ratings.slice();
        newRatingsArray.push({score:this.state.new_rating_score, review: this.state.new_rating_review});
        this.setState({
                ratings: newRatingsArray,
                new_rating_score: '',
                new_rating_review: ''
         })
    }

    handleNewRatingScore(event){
        this.setState({new_rating_score: event.target.value});
    }

    handleNewRatingReview(event){
        this.setState({new_rating_review: event.target.value});
    }

    render() {
        return (
            <div>
                <h4>Create new rating</h4>
                 <form onSubmit={this.handleSubmit}>
                        <div className="form-group">
                            <label>Score:</label>
                            <input type="text" value={this.state.new_rating_score} onChange={this.handleNewRatingScore} />

                            <label>Review:</label>
                            <input type="text" value={this.state.new_rating_review} onChange={this.handleNewRatingReview} />

                            <input className="btn btn-primary" type="submit" value="Create" />
                        </div>
                    </form>
                <h4>Ratings</h4>
                <table className="table">
                <tbody>
                    {this.state.ratings.map( rating =>
                        <tr key={rating.id}>
                            <td>{rating.score} -</td>
                            <td>- {rating.review}</td>
                        </tr>
                    )}
                </tbody>
                </table>
            </div>
        );
    }

}
export default MovieRatings;