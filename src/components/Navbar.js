import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'
import { getCurrentUser } from '../actions/currentUser'
import { connect } from 'react-redux'
import Logout from '../components/Logout'


class NavBar extends Component {

  

  render() {
    return (
      <nav className='nav'>
        {this.props.loggedIn ? 
            <>
            <NavLink className='nav__link' to="/">Home</NavLink>
            <NavLink className='nav__link' to="/dashboard">Dashboard</NavLink>
            <Logout /> 
            </>:
            null
        }
      </nav>
    )
  }
}
const mapStateToProps = state => {
    return({
        loggedIn: !!state.currentUser,
        currentUser: state.currentUser
    })
  }
  
export default connect(mapStateToProps, { getCurrentUser })(NavBar)