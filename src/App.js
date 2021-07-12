import { useState } from "react";
import React from "react";
import Banking1 from "./components/Banking/Banking1";
import Table from "./components/Table/Table";
import Navbar from "./components/Navbar/Navbar";
import Home from "./components/Home/Home";
 import Particles from 'react-particles-js';
 import './App.css'
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
  const particlesOption={
    particles: {
        number:{
          value:30,
          density:{
            enable:true,
            value_area:800
          }
        }
    }
  }
  return (
    <Router>
      <div className="App">
      <Particles className='particles' params={particlesOption} />   
        <Navbar />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route
            path="/Banking"
            component={(props) => <Banking1 handleForm={handleForm} />}
          />
          <Route
            path="/CoustomerData"
            component={(props) => <Table balance={balance} />}
          />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
