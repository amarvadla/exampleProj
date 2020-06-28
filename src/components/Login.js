import React, { Component } from 'react';
import { Form, Button, Spinner } from 'react-bootstrap';
import { connect } from 'react-redux';
import * as userActions from '../store/actions';
import './Login.css';


class Login extends Component {

    state = {
        email: '',
        password: '',
        validated: false,
        isSignUp: false,
        submit: false
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

            this.setState({
                submit: true
            })

            let user = {
                'email': this.state.email,
                'password': this.state.password
            }

            console.log(user);

            this.props.authenticateUsers(user.email, user.password, this.state.isSignUp);
            this.form.reset();
            this.setState({
                validated: false
            })
        }

        event.preventDefault();

    }


    handleSign = () => {
        this.setState({
            isSignUp: !this.state.isSignUp
        })
    }

    render() {

        let spinner = <Spinner
            as="span"
            animation="border"
            size="sm"
            role="status"
            aria-hidden="true"
        />

        return (
            <div className="form-login">

                <Form ref={form => this.form = form} noValidate
                    validated={this.state.validated} onSubmit={this.handleSubmit}>
                    <Form.Group controlId="formBasicEmail">
                        <Form.Label style={{ textAlign: "left" }}>Email address</Form.Label>
                        <Form.Control name="email" type="email" required
                            onChange={this.handleChange}
                            placeholder="Enter email" />
                        <Form.Text className="text-muted">
                            We'll never share your email with anyone else.
                        </Form.Text>
                    </Form.Group>

                    <Form.Group controlId="formBasicPassword">
                        <Form.Label>Password</Form.Label>
                        <Form.Control name="password" type="password"
                            onChange={this.handleChange}
                            required placeholder="Password" />
                    </Form.Group>
                    <Form.Group controlId="formBasicCheckbox">
                        <Form.Check type="checkbox" required label="Agree to terms and conditions" />
                    </Form.Group>
                    <Form.Group >
                        <h4 onClick={this.handleSign} >
                            {this.state.isSignUp ? "Already have an Account? sign in" : "Not a member yet? sign up"}
                        </h4>
                    </Form.Group>
                    <Button variant="primary" type="submit">
                        {this.state.submit ? spinner : null}
                        {this.state.isSignUp ? "Sign Up" : "Sign In"}
                    </Button>
                </Form>

            </div >
        )
    }

}


const mapDispatchToProps = dispatch => {
    return {
        authenticateUsers: (email, password, isSignIn) => dispatch(userActions.authenticate(email, password, isSignIn)),
    }
}


export default connect(null, mapDispatchToProps)(Login);