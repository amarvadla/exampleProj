import React, { Component } from 'react';
import { Form, Button } from 'react-bootstrap';
import { connect } from 'react-redux';
import * as userActions from '../store/actions';

class Profile extends Component {

    state = {
        name: '',
        age: '',
        about: '',
        profileImage: '',
        validated: false
    }

    handleChange = (event) => {
        let value = event.target.value;
        this.setState({
            ...this.state,
            [event.target.name]: value
        })
    }


    handleSubmit = (event) => {
        const form = event.currentTarget;

        console.log(form.checkValidity());

        if (form.checkValidity() === false) {
            event.stopPropagation();
            this.setState({
                validated: true
            })
        } else {
            let user = {
                'name': this.state.name,
                'age': this.state.age,
                'about': this.state.about,
                'profileImage': 'https://www.cochawaii.org/wp-content/uploads/avt.jpg'
            }
            this.props.onUserProfileAdded(user);
            this.form.reset();
            this.setState({
                validated: false
            })
        }

        event.preventDefault();

    }

    render() {
        return (
            <div>
                <Form style={{ marginLeft: '50px', marginTop: "30px", width: "50%" }}
                    ref={form => this.form = form} noValidate
                    validated={this.state.validated} onSubmit={this.handleSubmit}>
                    <Form.Group controlId="formBasicName">
                        <Form.Label>Name</Form.Label>
                        <Form.Control name="name" type="text" required
                            placeholder="Enter Name" onChange={this.handleChange} />
                        <Form.Control.Feedback type="invalid">
                            Please provide the name.
                        </Form.Control.Feedback>
                    </Form.Group>

                    <Form.Group controlId="formBasicAge">
                        <Form.Label>Age</Form.Label>
                        <Form.Control name="age" type="number"
                            required
                            placeholder="Enter Age" onChange={this.handleChange} />
                        <Form.Control.Feedback type="invalid">
                            Please provide the age.
                        </Form.Control.Feedback>
                    </Form.Group>
                    <Form.Group controlId="exampleForm.ControlTextarea1">
                        <Form.Label>About</Form.Label>
                        <Form.Control name="about" as="textarea" rows="3"
                            required
                            onChange={this.handleChange} />
                        <Form.Control.Feedback type="invalid">
                            Please provide about.
                        </Form.Control.Feedback>
                    </Form.Group>
                    <Button variant="primary" type="submit">
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