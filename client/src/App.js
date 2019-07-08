import React, { useState } from "react";
import "./styles/App.scss";
import Container from "react-bootstrap/Container";
import Header from "./components/Header";
import PostCard from "./components/PostCard";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Sidebar from "./components/Sidebar";
  


function App() {
  const [posts, setPosts] = useState([]);

  function fetchData() {
    
    setTimeout(fetch("https://blog-bidprime.herokuapp.com/api/posts/", {
      method: "GET"
    })
      .then(res => res.json())
      .then(data => {
        setPosts(data);
      }), 60000);
  }

  fetchData();
  

  return <div>
    <Header />
    <Container>
      <Row>
        <Col>
          {posts.map(post => (
            <PostCard 
              name= {post.title}
              image= {post.image}/>
          ))}
        </Col>
        <Col sm><Sidebar /></Col>
      </Row>
    </Container>
  </div>;
}

export default App;
