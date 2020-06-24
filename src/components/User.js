import React, { Component } from 'react';
import { Card, Button } from 'react-bootstrap';
import './User.css'

class User extends Component {

    render() {
        return (
            <div className="child-user" >
                <Card style={{ width: '18rem' }}>
                    <Card.Img variant="top" src={this.props.profileImage} style={{ maxHeight: '200px' }} />
                    <Card.Body>
                        <Card.Title>{this.props.name}</Card.Title>
                        <Card.Text>
                            {this.props.about}
                        </Card.Text>
                        <Button variant="primary" onClick={() => this.props.clickVisit(this.props.name)}>Visit Profile</Button>
                    </Card.Body>
                </Card>
            </div>
        )
    }

}

export default User;