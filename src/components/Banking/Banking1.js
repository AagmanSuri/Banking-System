import "./Banking.css";
import React from 'react';
const Banking1 = (props) => {
  return (
    <div style={{ textAlign: "center" }}>
      <form onSubmit={props.handleForm}>
        <h4>Transfer To</h4>
        <select>
          <option>Ashray</option>
          <option>Aagman</option>
          <option>Sanket Bhaiya</option>
        </select>
        <h4>Transfer from</h4>
        <select>
          <option>Sanket Bhaiya</option>
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
