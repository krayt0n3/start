import React, { useState } from "react";
import "./styles/App.scss";
import Container from "react-bootstrap/Container";
import Header from "./components/Header";
import PostCard from "./components/PostCard";
var axios = require("axios");


function App() {
  const [posts, setPosts] = useState([]);


  axios.get("https://blog-bidprime.herokuapp.com/api/post")
    .then(res => res.json())
    .then(data => {
      setPosts(data);
    });
  return <div>
    <Header />
    <Container>
      {posts.map(post => (
        <PostCard 
          name= {post.title}
          image= {post.image}/>
      ))}
    </Container>
  </div>;
}

export default App;
