import React from 'react'

function Dog(props){
    return(
        <div className="centering">
            <div className="dog-image">
                <img id={props.dog.id} src={`http://random.dog/${props.dog.url}`} alt="cute doggo" />
            </div>
        </div>
    )
}