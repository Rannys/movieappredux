import React, { Component } from 'react'
import { Card, Button } from 'react-bootstrap'
import { connect } from 'react-redux'
import AddModal from './addMovie'
import SimpleRating from './rating'
import { deleteBtn } from '../action/movieAction'
import StarRatingComponent from "react-star-rating-component";
import { Link } from "react-router-dom";




class MovieList extends Component {







    render() {
        return (
            <div className='container movieList'>
                <div className='row'>
                    <div className='col d-flex'>
                        {this.props.movielist.movies.filter(
                            el =>
                                el.rating >= this.props.movielist.rating &&
                                el.name
                                    .toLowerCase()
                                    .includes(this.props.movielist.keyword.trim().toLowerCase())
                        )
                            .map(el =>
                                <Card style={{ width: '18rem' }}>
                                    <Card.Img className='imgStyle' variant="top" src={el.imgUrl} />
                                    <Card.Body>
                                        <Card.Title className='nameStyle'>{el.name}</Card.Title>
                                        <Card.Title className='nameStyle'>{el.year}</Card.Title>
                                        <div>
                                            <StarRatingComponent
                                                name="rate1"
                                                starCount={5}
                                                value={el.rating}

                                            />
                                        </div>
                                        <div className='btnStyle' >
                                            <Link to={`/movie/${el.id}`}>
                                                <Button variant="info">Movie Description</Button>
                                                </Link >
                                        </div>
                                            <div className='btnStyle'>
                                                <AddModal editMode={true} data={el} />
                                                <Button variant="info" onClick={() => this.props.delete(el.id)}>Remove</Button>
                                            </div>
                                    </Card.Body>
                                </Card>
                            )}
                        <AddModal editMode={false} />


                    </div>

                </div>

                </div >
        )
    }
}
const mapStateToProps = state => {
    return {
                    movielist: state.movies
    }
}
const mapDispatchToProps = dispatch => {
    return {
                    delete: id => dispatch(deleteBtn(id)),

    }
}



export default connect(mapStateToProps, mapDispatchToProps)(MovieList);