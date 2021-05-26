import React, { Component } from 'react';
import 'isomorphic-fetch';
import MovieReviews from './MovieReviews'

const NYT_API_KEY = 'dGpQ5OmGP2SgfvZimlpCUoF4iOag9qzZ';
const URL = 'https://api.nytimes.com/svc/movies/v2/reviews/search.json?'
            + `api-key=${NYT_API_KEY}`;

// Code SearchableMovieReviewsContainer Here
class SearchableMovieReviewsContainer extends Component {

    constructor() {
        super()
        this.state = {
            reviews: [], 
            searchTerm: ""
        }
    }

    handleOnChange = (e) => {
        this.setState({
            searchTerm: e.target.value
        })
    }

    handleOnSubmit = (e) => {
        e.preventDefault()
        fetch(URL + `&query=${this.state.searchTerm}`)
        .then(response => response.json())
        .then(response => this.setState({reviews: response.results}))
    }
    render() {
        return(
            <div>
                <form onSubmit={this.handleOnSubmit}>
                    <label>Search</label>
                    <input type="text" id="search" value={this.state.searchTerm} onChange={this.handleOnChange} />
                    <input type="submit" value="Search" />
                </form>
                <MovieReviews reviews={this.state.reviews} />
            </div>
        )
    }
}
export default SearchableMovieReviewsContainer