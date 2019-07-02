import React from "react";
import "./styles/App.scss";
import Container from "react-bootstrap/Container";
import Header from "./components/Header";
var axios = require("axios");

  
axios.get("https://blog-bidprime.herokuapp.com/api/post")
  .then(function(result){
    console.log(result); // ex.: { user: 'Your User'}
    console.log(result.status); // ex.: 200
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
