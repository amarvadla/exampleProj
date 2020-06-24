import React, { Component } from 'react';
import User from './User'
import './Home.css'
import UserProfile from './UserProfile';
import { connect } from 'react-redux';
import * as actionTypes from '../store/action';

class Home extends Component {


    state = {
        isProfileClicked: false,
        profileName: ''
    }

    visitProfileClickListener = (name) => {

        this.setState({ isProfileClicked: true, profileName: name })
    }

    profileClosedListener = () => {

        this.setState({ isProfileClicked: false, profileName: '' })

    }


    render() {

        let userProfile = null;
        let selectedUser;

        if (this.state.isProfileClicked) {

            this.props.userProfiles.map((user) => {
                if (user.name === this.state.profileName) {
                    selectedUser = user;
                }
            })

            userProfile = <UserProfile
                user={selectedUser}
                show={this.state.isProfileClicked}
                clicked={this.profileClosedListener} />
        }

        return (
            <div className="container">
                {
                    this.props.userProfiles.map((user) => {
                        return <User name={user.name} age={user.age} about={user.about}
                            profileImage={user.profileImage}
                            clickVisit={this.visitProfileClickListener}></User>
                    })
                }
                {userProfile}
            </div>

        );
    }
}

const mapDispatchToProps = dispatch => {
    return {
        onUserProfileAdded: (userProfile) => dispatch({ type: actionTypes.ADD_USER, user: userProfile }),
        onUserProfileRemoved: (userProfile) => dispatch({ type: actionTypes.REMOVE_USER, user: userProfile }),
    }
}

const mapStateToProps = state => {
    return {
        userProfiles: state.profile
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Home);