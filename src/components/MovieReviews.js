// Code MovieReviews Here
import React from 'react'

function MovieReviews(props) {
    const reviews = props.reviews.map(review => <li className="review" key={review.display_title}>{review.summary_short}</li>)
    return(
        <div className="review-list">
            <ul>
                {reviews}
            </ul>
        </div>
    )
}

export default MovieReviews