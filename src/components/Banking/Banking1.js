import './Banking.css';
const Banking1 = (props) => {

  return (
    <div>
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

      {/* <div>
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
      </div> */}
    </div>
  );
};

export default Banking1;
