import React from "react";
import "./Table.css";
const Table = (props) => {
  return (
    <div className="center">
      
      <table className="table,center">
        <thead>
          <tr className="tr">
            <th className="th">Firstname</th>
            <th className="th">Lastname</th>
            <th className="th">Balance</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Ashray</td>
            <td>Parmar</td>
            <td>{props.balance.value1}</td>
          </tr>
          <tr>
            <td>Aagman</td>
            <td>Suri</td>
            <td>{props.balance.value2}</td>
          </tr>
          <tr>
            <td>Sanket</td>
            <td>Khandekar</td>
            <td>{props.balance.value3}</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default Table;
