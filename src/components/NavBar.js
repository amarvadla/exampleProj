import React, { Component } from 'react';
import { Navbar, Nav, NavDropdown, Form, FormControl, Button } from 'react-bootstrap';
import { NavLink } from 'react-router-dom'
import { connect } from 'react-redux';
import * as userActions from '../store/actions';

class NavigatorBar extends Component {


    handleLogout = () => {

        this.props.onLogout();
    }

    render() {
        return (
            <Navbar bg="light" expand="lg">
                <Navbar.Brand href="/">MY APP</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="mr-auto">
                        <Nav.Link as={NavLink} to="/home">Home</Nav.Link>
                        <Nav.Link as={NavLink} to="/profile">Add</Nav.Link>
                        <NavDropdown title="Dropdown" id="basic-nav-dropdown">
                            <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                            <NavDropdown.Divider />
                            <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
                        </NavDropdown>
                    </Nav>
                    <Form inline>
                        <Button onClick={this.handleLogout}>Log Out</Button>
                    </Form>
                </Navbar.Collapse>
            </Navbar>
        )
    }

}

const mapDispatchToProps = dispatch => {
    return {
        onLogout: () => dispatch(userActions.logOutUser())
    };
};

export default connect(null, mapDispatchToProps)(NavigatorBar);