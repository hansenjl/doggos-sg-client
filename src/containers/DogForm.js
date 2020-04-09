import React from 'react'
import {createDog} from '../actions/dogActions'
import {connect} from 'react-redux'


class DogForm extends React.Component {

    state = {
        url: ""
    }

    handleChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    handleSubmit = (e) => {
        // grab form data from state
        // trigger an action to make a POST request
        // clear form
        e.preventDefault()
        let dog = this.state
        this.props.createDog(dog)
        this.setState({
            url: ""
        })
    }

    render(){
        return(
            <div>
                <h3>Add a new dog image url:</h3>
                <p><input onChange={this.handleChange} type="text" name="url" value={this.state.url}></input></p>
                <button onClick={this.handleSubmit} type="submit">Add Dog</button>
            </div>
        )
    }
}

export default connect(null,{createDog})(DogForm)