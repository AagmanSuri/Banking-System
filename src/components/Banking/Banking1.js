import "./Banking.css";
import React from "react";
import bank from "./Banking2.svg";

const Banking1 = (props) => {
  const tranferbtn = () => {
    alert(`Transcation sucessful`);
    console.log("useState", props.input3);
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
          <option>Harshit</option>
          <option>Vansh</option>
          <option>Hargun</option>
          <option>Assad</option>
          <option>Rakshit</option>
          <option>Samridh</option>
          <option>Aditya</option>
        </select>
        <br></br>
        <br></br>
        <label>Transfer From : </label>
        <select required>
          <option>Aagman</option>
          <option>Ashray</option>
          <option>Sanket</option>
          <option>Harshit</option>
          <option>Vansh</option>
          <option>Hargun</option>
          <option>Assad</option>
          <option>Rakshit</option>
          <option>Samridh</option>
          <option>Aditya</option>
        </select>
        <br></br>
        <br></br>
        <label>Amount to transfer : </label>
        <input type="Number" required></input>
        <button type="submit" onClick={tranferbtn}>
          Transfer
        </button>
      </form>
    </div>
  );
};

export default Banking1;
