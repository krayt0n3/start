import React from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";

export default function PostCard(props) {
 
  return ( <Card style={{ width: "18rem" }}>
    <Card.Img variant="top" src={props.image} />
    <Card.Body>
      <Card.Title>{props.name}</Card.Title>
      
      <Button variant="primary">Read More</Button>
    </Card.Body>
  </Card>
  );
}

