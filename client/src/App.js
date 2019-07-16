import React, { useState } from "react";
import "./styles/App.scss";
import PostCard from "./components/PostCard";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Sidebar from "./components/Sidebar";
import Layout from "./components/Layout";
  


function App() {
  const [posts, setPosts] = useState([]);

  function fetchData() {
    
      
    setTimeout(fetch("https://blog-bidprime.herokuapp.com/api/post", {
      method: "GET"
    })
      .then(res => res.json())
      .then(data => {
        setPosts(data);
      }));
  }

  fetchData();
  

  return <Layout>
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
  </Layout>;
}

export default App;
