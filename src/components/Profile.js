import React, { Component } from 'react';
import { Form, Button } from 'react-bootstrap';
import { connect } from 'react-redux';
import * as userActions from '../store/actions';

class Profile extends Component {

    state = {
        name: '',
        age: '',
        about: '',
        profileImage: ''
    }

    handleChange = (event) => {
        let value = event.target.value;
        this.setState({
            ...this.state,
            [event.target.name]: value
        })
    }


    handleSubmit = (event) => {
        event.preventDefault();
        let user = {
            'name': this.state.name,
            'age': this.state.age,
            'about': this.state.about,
            'profileImage': 'https://www.cochawaii.org/wp-content/uploads/avt.jpg'
        }
        this.props.onUserProfileAdded(user);
        this.form.reset();
    }

    render() {
        return (
            <div>
                <Form style={{ marginLeft: '200px', marginRight: '200px' }} ref={form => this.form = form}>
                    <Form.Group controlId="formBasicName">
                        <Form.Label>Name</Form.Label>
                        <Form.Control name="name" type="text" placeholder="Enter Name" onChange={this.handleChange} />
                    </Form.Group>

                    <Form.Group controlId="formBasicAge">
                        <Form.Label>Age</Form.Label>
                        <Form.Control name="age" type="number" placeholder="Age" onChange={this.handleChange} />
                    </Form.Group>
                    <Form.Group controlId="exampleForm.ControlTextarea1">
                        <Form.Label>About</Form.Label>
                        <Form.Control name="about" as="textarea" rows="3" onChange={this.handleChange} />
                    </Form.Group>
                    <Button variant="primary" type="submit" onClick={this.handleSubmit}>
                        Submit
                    </Button>
                </Form>
            </div>
        );
    }
}


const mapDispatchToProps = dispatch => {
    return {
        onUserProfileAdded: (userProfile) => dispatch(userActions.addNewUser(userProfile)),
    }
}

const mapStateToProps = state => {
    return {
        userProfiles: state.profile
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Profile);