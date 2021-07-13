import React from 'react'
import bank from "./banking.svg";
function Transcation(props) {
    return (
        <div>
            <img src={bank} alt="finance"></img>
            <h1>Last Transcation</h1>
            <h2>Money Tranfered to {props.name[props.indexofOption1]}</h2>
            <p>updated balance{props.balance[props.indexofOption1]}</p>
            <h2>Money Tranfered from {props.name[props.indexofOption2]}</h2>
            <p>updated balance{props.balance[props.indexofOption2]}</p>

        </div>
    )
}

export default Transcation;
