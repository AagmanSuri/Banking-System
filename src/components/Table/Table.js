import React from "react";
import "./Table.css";
import bank from "./banking1.svg";
const Table = (props) => {
  return (
    <div className="center">
      <img src={bank} alt="finance"></img>
      <table className="md">
        <thead>
          <tr>
            <th>S.no</th>
            <th>Firstname</th>
            <th>Lastname</th>
            <th>Email</th>
            <th>Balance</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>1</td>
            <td>Ashray</td>
            <td>Parmar</td>
            <td>parmar@gmail.com</td>
            <td>{props.balance[0]}</td>
          </tr>
          <tr>
            <td>2</td>
            <td>Aagman</td>
            <td>Suri</td>
            <td>suri@gmail.com</td>
            <td>{props.balance[1]}</td>
          </tr>
          <tr>
            <td>3</td>
            <td>Sanket</td>
            <td>Khandekar</td>
            <td>khandekar@gmail.com</td>
            <td>{props.balance[2]}</td>
          </tr>
          <tr>
            <td>4</td>
            <td>Harshit</td>
            <td>Duggal</td>
            <td>duggal@gmail.com</td>
            <td>{props.balance[3]}</td>
          </tr>
          <tr>
            <td>5</td>
            <td>Vansh</td>
            <td>Padhiar</td>
            <td>padhiar@gmail.com</td>
            <td>{props.balance[4]}</td>
          </tr>
          <tr>
            <td>6</td>
            <td>Hargun</td>
            <td>Singh</td>
            <td>singh@gmail.com</td>
            <td>{props.balance[5]}</td>
          </tr>
          <tr>
            <td>7</td>
            <td>Assad</td>
            <td>Farooq</td>
            <td>farooq@gmail.com</td>
            <td>{props.balance[6]}</td>
          </tr>
          <tr>
            <td>8</td>
            <td>Rakshit</td>
            <td>Koul</td>
            <td>koul@gmail.com</td>
            <td>{props.balance[7]}</td>
          </tr>
          <tr>
            <td>9</td>
            <td>Samridh</td>
            <td>Gupta</td>
            <td>gupta@gmail.com</td>
            <td>{props.balance[8]}</td>
          </tr>
          <tr>
            <td>10</td>
            <td>Aditya</td>
            <td>Slathia</td>
            <td>slathia@gmail.com</td>
            <td>{props.balance[9]}</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default Table;
