import React from 'react'

function Transcation(props) {
    return (
        <div>
            <h1>Transcation</h1>
            <h2>Money Tranfered to {props.name[props.indexofOption1]}</h2>
            <p>updated balance{props.balance[props.indexofOption1]}</p>
            <h2>Money Tranfered from {props.name[props.indexofOption2]}</h2>
            <p>updated balance{props.balance[props.indexofOption2]}</p>
 
        </div>
    )
}

export default Transcation;
