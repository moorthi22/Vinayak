import React from "react";
import { connect } from "react-redux";
import "./styles.css";
import LoginWidget from "../components/LoginWidget";
import SignupWidget from "../components/SignupWidget";

function App() {
  return (
    <div className="App">
      <LoginWidget />
      <SignupWidget />
    </div>
  );
}

export default connect()(App);
