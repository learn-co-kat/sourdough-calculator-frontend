import React, { Component } from 'react'
import NewBakeComponent from './NewBakeComponent'

export default class NewBakeContainer extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
            newBake: {
                userId: this.props.userId,
                total_flour_g: '',
                total_flour_p: 100,
                water_g: '',
                water_p: '',
                salt_g: '',
                salt_p: '',
                leaven_g: '',
                leaven_p: '',
                hydration: '',
                rating: '',
                name: '',
                date: this.props.date
            }
        }
    }

    updateState = event => {
        console.log('name', event.target.name)
        console.log('value', event.target.value)
        let value = event.target.value
        let item = event.target.name
        this.setState(prevState => {
            return {
                newBake: {...prevState.newBake, [item]: value}
            }
        }, () => console.log('state after user changes', this.state.newBake))
    }

    render(){
        return (
            <div>
                <NewBakeComponent updateState={this.updateState} />
            </div>
        )
    }
}

// this.props.handlePost
