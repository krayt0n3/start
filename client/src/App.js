import React from "react";
import "./styles/App.scss";
import Container from "react-bootstrap/Container";
import Header from "./components/Header";
var axios = require("axios");

  
axios.get("/")
  .then(function (response) {
    console.log(response);
  })
  .catch(function (error) {
    console.log(error);
  });

function App() {
  return <div>
    <Header />
    <Container>
      <h1>Home</h1>
    </Container>
  </div>;
}

export default App;
