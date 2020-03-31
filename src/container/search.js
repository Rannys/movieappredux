import React, { Component } from 'react'
import { Navbar, Form, FormControl, Button } from 'react-bootstrap'
import SimpleRating from './rating'
import { connect } from "react-redux"
import { getKeyword } from '../action/movieAction'

class SearchMovie extends Component {
    constructor(props) {
        super(props);
        this.state = {

            text: ""
        };
    }
    handleChange = e => {
        this.setState(
            {
                text: e.target.value
            },
            () => this.props.getKeyword(this.state.text)
        );
    };
    render() {
        return (
            <div className='container'>
                <div className='row'>
                    <div className='col'>
                        <Navbar className="bg-light justify-content-center">
                            <Form inline>
                                <FormControl type="text" onChange={this.handleChange} placeholder="Search" className=" mr-sm-2" />
                                <Button variant="success">Search</Button>
                            </Form>
                            <div className='rating'>
                                <SimpleRating />
                            </div>
                        </Navbar>
                    </div>

                </div>


            </div>
        )
    }
}
const mapDispatchToProps = dispatch => {
    return {
        setKeyword: keyword => dispatch(getKeyword(keyword)),

    };
};
export default connect(null, mapDispatchToProps)(SearchMovie);