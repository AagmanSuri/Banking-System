import { useState } from "react";
import React from "react";
import Banking1 from "./components/Banking/Banking1";
import Table from "./components/Table/Table";
import Navbar from "./components/Navbar/Navbar";
import Home from "./components/Home/Home";
import Particles from "react-particles-js";
import Transcation from './components/Transcations/Transcation'
import "./App.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
function App() {
  const [name,setName] = useState([
    "Ashray",
    "Aagman",
    "Sanket",
    "Harshit",
    "Vansh",
    "Hargun",
    "Assad",
    "Rakshit",
    "Samridh",
    "Aditya",
  ]);
  const [balance, setBalance] = useState(
    [
      1000, //ashray
      2000, //aagman
      3000, //sanket
      4000, //harshit
      5000, //vansh       //balance can be acessed by balance[]
      6000, //Hargun
      7000, //Assad
      8000, //Rakshit
      9000, //Samridh
      10000,
    ] //Aditya
  );
  const [indexofOption1,setIndexofOption1] =useState(0)
  const [indexofOption2,setIndexofOption2] =useState(0)
  const handleForm = (e) => {
    e.preventDefault();

    // console.log(e.target[0].value);
    // console.log(e.target[1].value);
    // console.log(e.target[2].value);

    const valueToUpdate = Number(e.target[2].value);
    const input1 = e.target[0].value;
    const input2 = e.target[1].value;

    //index value of the name input in option
    
    setIndexofOption1( name.indexOf(input1));
    // console.log(indexofOption1);

    
    setIndexofOption2( name.indexOf(input2));
    // console.log(indexofOption2);
    const increment = balance[indexofOption1] + valueToUpdate;
    const decrement = balance[indexofOption2] - valueToUpdate;
    console.log(increment);
    console.log(decrement);
    console.log((balance[indexofOption1] = increment),
    (balance[indexofOption2] = decrement))
    setBalance(balance=>
      [...balance,
      (balance[indexofOption1] = increment),
      (balance[indexofOption2] = decrement)]
    );
  };
  const particlesOption = {
    particles: {
      number: {
        value: 30,
        density: {
          enable: true,
          value_area: 800,
        },
      },
    },
  };
  return (
    <Router>
      <div className="App">
        <Particles className="particles" params={particlesOption} />
        <Navbar />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route
            path="/Banking"
            component={(props) => <Banking1 handleForm={handleForm}/>}
          />
          <Route
            path="/CoustomerData"
            component={(props) => <Table balance={balance} />}
          />
          <Route
            path="/Transcations"
            component={(props) => <Transcation name={name} indexofOption1={indexofOption1} indexofOption2={indexofOption2} balance={balance} /> }
          />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
