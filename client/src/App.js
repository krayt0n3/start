import React, { useState } from "react";
import "./styles/App.scss";
import PostCard from "./components/PostCard";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Sidebar from "./components/Sidebar";
import Layout from "./components/Layout";
var axios = require("axios");


function App() {
  const [posts, setPosts] = useState([]);


  axios({
    method: "get",
    url: "https://blog-bidprime.herokuapp.com/posts",
    responseType: "json"
  })
    
    .then(res => res.json());
    
      



  

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
