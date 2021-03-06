import React, { Component } from 'react'
import { getCurrentUser } from '../actions/currentUser'
import { connect } from 'react-redux'
import Header from '../components/Header'
import Features from '../components/Features'
import Demo from '../components/Demo'
import Stories from '../components/Stories'
import Footer from '../components/Footer'

class Home extends Component {

    componentDidMount(){
        this.props.getCurrentUser()
    }

    render() {
        return (
            <div className='page'>
                <Header history={this.props.history}/>
                <Features />
                <Demo />
                <Stories />
                <Footer />
            </div>
        )
    } 
}
  
  export default connect(null, { getCurrentUser })(Home)