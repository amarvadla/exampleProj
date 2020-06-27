import React, { Component } from 'react';
import User from './User'
import './Home.css'
import UserProfile from './UserProfile';
import { connect } from 'react-redux';
import * as actions from '../store/actions';

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

    componentDidMount() {
        this.props.intializeUsers();
    }

    render() {

        let userProfile = null;
        let selectedUser;

        if (this.state.isProfileClicked) {

            selectedUser = this.props.userProfiles.find((element) => {
                return selectedUser = element;
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
                        return <User key={user.id} name={user.name} age={user.age} about={user.about}
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
        intializeUsers: () => dispatch(actions.initUsers())
    }
}

const mapStateToProps = state => {
    return {
        userProfiles: state.allUsers,
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Home);