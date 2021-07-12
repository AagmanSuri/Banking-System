import "./Banking.css";
import React from "react";
import bank from './banking.svg'
const Banking1 = (props) => {
  return (
    <div style={{ textAlign: "center" }}>
       <img src={bank} alt="finance"></img>
      <h1>Transfer Money</h1>
      <h2>This portal allows you to transfer money.</h2>
      <h3>Please fill the required details</h3>
      <form onSubmit={props.handleForm}>
        <label>Transfer to : </label>
        <select>
          <option>Ashray</option>
          <option>Aagman</option>
          <option>Sanket</option>
        </select>
<br></br><br></br>
        <label>Transfer From : </label>
        <select>
          <option>Sanket</option>
          <option>Aagman</option>
          <option>Ashray</option>
        </select>
        <h4>Amount to Transfer</h4>
        <input></input>
        <button type="submit">transfer</button>
      </form>
    </div>
  );
};

export default Banking1;
