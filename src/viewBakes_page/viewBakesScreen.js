import React, { Component } from 'react'
import ViewBakesContainer from './ViewBakesContainer'
import '../Styles.css'
import Nav from '../other/Nav'
import LoginHOC from '../other/LoginHOC';
import Footer from '../other/Footer'

export class ViewBakesScreen extends Component {
    

    render() {
        return (
            <div >

                <Nav 
                loggedInUser={this.props.email} 
                handleLogOut={this.props.handleLogOut} />
                
                <ViewBakesContainer 
                userId={this.props.userId}
                bakes={this.props.bakes} 
                handleDelete={this.props.handleDelete} 
                handleNotePost={this.props.handleNotePost}
                deleteNote={this.props.deleteNote}
                notePatchRequest={this.props.notePatchRequest}
                loggedIn={this.props.loggedIn}
                handleRatingPatch={this.props.handleRatingPatch}
                // newBake={this.props.newBake}
                // addNewBakeToDOM={this.props.addNewBakeToDOM}
                />
                <Footer />
            </div>
        )
    }
}

// export default ViewBakesScreen
export default LoginHOC(ViewBakesScreen)