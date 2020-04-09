import React from 'react'
import {fetchDogs} from '../actions/dogActions'
import {connect} from 'react-redux'
import Dog from '../components/Dog'

class DogContainer extends React.Component {

    componentDidMount(){
        console.log("component did mount")
        // call an action that fetches all dogs & stores them in state
        this.props.fetchDogs()  //async

        console.log("component finished action calls")
    }

    render(){
        return(
            <div>
                {this.props.loading ? <h1>Loading all the cuteness!</h1>  : this.props.dogs.map(d => <Dog key={d.id} dog={d} />)}
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        dogs: state.dogReducer.dogs,
        loading: state.dogReducer.loading
    }
}

export default connect(mapStateToProps, {fetchDogs})(DogContainer)