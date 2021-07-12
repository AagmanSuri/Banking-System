import "./Banking.css";
import React from "react";
import bank from "./banking.svg";
const Banking1 = (props) => {
  const tranferbtn = () => {
    alert(`Transcation sucessful`);
  };
  return (
    <div style={{ textAlign: "center" }}>
      <img src={bank} alt="finance"></img>
      <h1>Transfer Money</h1>
      <h2>This portal allows you to transfer money.</h2>
      <h3>Please fill the required details</h3>
      <form onSubmit={props.handleForm}>
        <label>Transfer to : </label>
        <select required>
          <option>Ashray</option>
          <option>Aagman</option>
          <option>Sanket</option>
        </select>
        <br></br>
        <br></br>
        <label>Transfer From : </label>
        <select required>
          <option>Sanket</option>
          <option>Aagman</option>
          <option>Ashray</option>
        </select>
        <br></br>
        <br></br>
        <label>Amount to transfer : </label>
        <input type="Number" required></input>
        <button type="submit" onClick={tranferbtn}>
          transfer
        </button>
      </form>
    </div>
  );
};

export default Banking1;
