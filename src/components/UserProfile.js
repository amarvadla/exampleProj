import React, { Component } from 'react';
import './UserProfile.css'
import BlackBg from './BlackBg'
import { Card } from 'react-bootstrap'

class UserProfile extends Component {

    render() {
        return (
            <div>
                <div>
                    <BlackBg show={this.props.show} clicked={this.props.clicked} />
                </div>
                <div className='Modal'>
                    <Card style={{ width: '100%' }}>
                        <Card.Img variant="top" src={this.props.user.profileImage} />
                        <Card.Body>
                            <Card.Title>{this.props.user.name}</Card.Title>
                            <Card.Text>
                                {this.props.user.about}
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </div>
            </div>
        )
    }

}

export default UserProfile;