import { useState } from "react";
import Banking1 from "./components/Banking/Banking1";
import Table from "./components/Table/Table";
import Navbar from "./components/Navbar/Navbar";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
function App() {
  const [balance, setBalance] = useState({
    value1: 1000, //ashray
    value2: 2000, //aagman
    value3: 3000, //sanket
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
    <div style={{ textAlign: "center" }}>
      <Router>
        <Switch>
          <Navbar />
          <Route path="/" exact component={<Table balance={balance} />} />
          <Route
            path="/Banking"
            component={<Banking1 handleForm={handleForm} balance={balance} />}
          />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
