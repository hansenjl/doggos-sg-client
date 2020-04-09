import React from 'react'


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
    }

    render(){
        return(
            <div>
                <h3>Add a new dog image url:</h3>
                <p><input onChange={this.handleChange} type="text" name="url" value={this.state.url}></input></p>
                <input onSubmit={this.handleSubmit} type="submit" value="Add Dog"/>
            </div>
        )
    }
}

export default DogForm