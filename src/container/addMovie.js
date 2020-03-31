import React, { Component } from "react";
import { Modal, Button } from "react-bootstrap";
import { v4 as uuidv4 } from 'uuid'
import { connect } from 'react-redux'
import { addBtn, edited } from '../action/movieAction'

class AddModal extends Component {
  constructor(props) {
    super(props);
    this.state = {
      show: false,
      name: this.props.editMode ? this.props.data.name : "",
      year: this.props.editMode ? this.props.data.year : "",
      rating: this.props.editMode ? this.props.data.rating : "",
      imgUrl: this.props.editMode ? this.props.data.imgUrl : ""
    };
  }
  handleShow = () => {
    this.setState({ show: !this.state.show });
  };
  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value
    });
  }
  add = () => {
    var newMovie = {
      id: uuidv4(),
      name: this.state.name,
      year: this.state.year,
      image: this.state.image,
      rating: this.state.rating
    };
    this.props.addNewMovie(newMovie);
  };
  editMovie = () => {
    this.props.editNewMovie( this.state,this.props.data.id )
    this.setState({show : false})
  }
  render() {
    return (
      <div>
        <Button className='add' variant="primary add" onClick={this.handleShow}>
          {this.props.editMode ? "Edit Movie" : "Add new Movie "}
        </Button>

        <Modal show={this.state.show} onHide={this.handleShow}>
          <Modal.Header closeButton>
            <Modal.Title>Modal heading</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <div>
              <div>
                <label>Title:</label>
                <input type="text" name='name' onChange={this.handleChange} value={this.state.name}/>
              </div>
              <div>
                <label>Image:</label>
                <input type="text" name='imgUrl' onChange={this.handleChange} value= {this.state.imgUrl}/>
              </div>
              <div>
                <label>Rating:</label>
                <input type="text" name='rating' onChange={this.handleChange} value={this.state.rating}/>
              </div>
              <div>
                <label>Year:</label>
                <input type="text" name="year" onChange={this.handleChange} value={this.state.year}/>
              </div>
            </div>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={this.handleShow}>
              Close
            </Button>
            <Button
              variant="primary"
              onClick={this.props.editMode ? this.editMovie : this.add}
            >
              {this.props.editMode ? "Edit" : "Add Movie"}
              </Button>
          </Modal.Footer>
        </Modal>
      </div>
    );
  }
}
const mapDispatchToProps = dispatch => {
  return {
    addNewMovie: newMovie => dispatch(addBtn(newMovie)),
    editNewMovie: (id, newList) => dispatch(edited(id, newList))
  }
}
export default connect(null, mapDispatchToProps)(AddModal);