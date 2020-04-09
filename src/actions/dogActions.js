//define types of actions sent to reducer
// usually return an object


// normal object actions
const gotDogs = (dogs) => {
    return {
        type: 'GOT_DOGS',
        payload: dogs
    }
}

const addDog = (dog) => {
    return {
        type: 'ADD_DOG',
        payload: dog
    }
}


//   Async actions
export const fetchDogs = () => {
    return (dispatch) => {
        dispatch({type: 'FETCHING_DOGS'})
        return fetch('http://localhost:3001/dogs.json')
        .then(res => res.json())
        .then(dogs => {
           let mutatedDogs = dogs
           console.log("dogs:", dogs)
            dispatch(gotDogs(mutatedDogs))
        })
    }
}

export const createDog = (dog) => {
    return (dispatch) => {
        return fetch('http://localhost:3001/dogs', {
            method: "POST",
            headers: {
                'Content-Type': 'application/json'
              },
            body: JSON.stringify({dog: dog})
        })
        .then(res => res.json())
        .then(dog => {
            dispatch(addDog(dog))
        })
    }
}