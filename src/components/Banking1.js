import { useState } from "react";

const Banking1 = () => {
  const [balance, setBalance] = useState({
    value1: 100, //ashray
    value2: 200, //aagman
    value3: 300, //sanket
  });

  const handleForm = (e) => {
    e.preventDefault();

    console.log(e.target[0].value);
    console.log(e.target[1].value);
    console.log(e.target[2].value);

    const valueToUpdate = Number(e.target[2].value);

    if (
      e.target[0].value === "Ashray" &&
      e.target[1].value === "Sanket Bhaiya"
    ) {
      setBalance({
        ...balance,
        value1: balance.value1 + valueToUpdate,
        value3: balance.value3 - valueToUpdate,
      });
    } else if (
      e.target[0].value === "Ashray" &&
      e.target[1].value === "Aagman"
    ) {
      setBalance({
        ...balance,
        value1: balance.value1 + valueToUpdate,
        value2: balance.value2 - valueToUpdate,
      });
    } else if (
      e.target[0].value === "Aagman" &&
      e.target[1].value === "Sanket Bhaiya"
    ) {
      setBalance({
        ...balance,
        value2: balance.value2 + valueToUpdate,
        value3: balance.value3 - valueToUpdate,
      });
    } else if (
      e.target[0].value === "Aagman" &&
      e.target[1].value === "Ashray"
    ) {
      setBalance({
        ...balance,
        value2: balance.value2 + valueToUpdate,
        value1: balance.value1 - valueToUpdate,
      });
    } else if (
      e.target[0].value === "Sanket Bhaiya" &&
      e.target[1].value === "Ashray"
    ) {
      setBalance({
        ...balance,
        value3: balance.value3 + valueToUpdate,
        value1: balance.value1 - valueToUpdate,
      });
    } else if (
      e.target[0].value === "Sanket Bhaiya" &&
      e.target[1].value === "Aagman"
    ) {
      setBalance({
        ...balance,
        value3: balance.value3 + valueToUpdate,
        value2: balance.value2 - valueToUpdate,
      });
    }
  };

  return (
    <div>
      <form onSubmit={handleForm}>
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
              <td>{balance.value1}</td>
            </tr>
            <tr>
              <td>Aagman</td>
              <td>Suri</td>
              <td>{balance.value2}</td>
            </tr>
            <tr>
              <td>Sanket</td>
              <td>Khandekar</td>
              <td>{balance.value3}</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Banking1;
