import React from "react";
import home from "./home.svg";
function Home() {
  return (
    <div style={{ textAlign: "center" }}>
      <img src={home} alt="finance"></img>
      <h1>Bank</h1>
      <h2>Your privacy is our assurance</h2>
      <h3>This banking app allows you to transfer money from your account to other person account.</h3>
      <h4>Coustomer Data : This allows you to see registered coustomers</h4>
      <h4>Transfer Money : This allows you to transfer money with in the registered coustomers</h4>
    </div>
  );
}

export default Home;
