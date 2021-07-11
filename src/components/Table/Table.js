import React from "react";

const Table = (props) => {
  return (
    <div>
      <table>
        <thead>
          <tr>
            <th>Firstname</th>
            <th>Lastname</th>
            <th>Balance</th>
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
