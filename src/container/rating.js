import React, { Component } from 'react'
import Box from '@material-ui/core/Box';
import Rating from '@material-ui/lab/Rating';
import { getRating } from '../action/movieAction'
import { connect } from 'react-redux'
import StarRatingComponent from "react-star-rating-component";





class SimpleRating extends Component {
  constructor(props) {
    super(props)
    this.state = {
      rating: 1,
      text: ''
    }
  }
  onStarClick = (nextValue, prevValue, name) => {
    this.setState({ rating: nextValue }, () =>
      this.props.getRating(this.state.rating)
    );
  };

  
  render() {
    return (
      <div className='d-flex justify-content-center'>
        <Box component="fieldset"  borderColor="transparent">
          <StarRatingComponent
            name="rate1"
            starCount={5}
            value={this.state.rating}
            onStarClick={this.onStarClick}
          />
        </Box>
      </div>)
  }
}
const mapDispatchToProps = dispatch => {
  return {

    getRating: rating => dispatch(getRating(rating))
  };
};

export default connect(null, mapDispatchToProps)(SimpleRating);

