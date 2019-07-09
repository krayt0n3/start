import React, { Component } from "react";
import { Redirect } from "react-router-dom";
import Header from "../components/Header";
import {Container, Col, Row} from "react-bootstrap";
import TextArea from "../components/TextEditor";
var axios = require("axios");


export default class SignUp extends Component {
  constructor() {
    super();
    this.state = {
      title: "",
      author: "",
      image: "",
      body: "",
      category1: "",
      category2: "",
      category3: "",
      tag1: "",
      tag2: "",
      tag3: "",
      toHome: false
    };
  }

  onChange = (e) => {	
    this.setState({ [e.target.name]: e.target.value });	
  }


  onSubmit = (e) => {
    e.preventDefault();
    // get our form data out of state
    const { title, author, image, body, category1, category2, category3, tag1, tag2, tag3} = this.state;

    var url = "https://blog-bidprime.herokuapp.com/api/post/create";
    var data = {title, author, image, body, category1, category2, category3, tag1, tag2, tag3};
    console.log(data);
    axios.post(url, data, {
      headers: {
        "content-type": "application/json",
      },
    })
      .then((result) => {
        console.log(result);
      })
      .catch(function (error) {
        console.log(error);
      });
    
    // fetch(url, {
    //   method: "POST",
    //   body: JSON.stringify(data),
    //   headers:{
    //     "Content-Type": "application/json",
    //     "Accept": "application/json"
    //   }
    //   // data can be `string` or {object}!
    // }).then(res => res.json())   
    //   .then(response => console.log("Success:", JSON.stringify(response)))
    //   .then(() => this.setState(() => ({	
    //     toHome: true	
    //   })))
    //   .catch(error => console.error("Error:", error));
    
  }

  // componentDidMount() {
  //   fetch("https://blog-bidprime.herokuapp.com/api/post/")	
  //     .then(res => res.json())	
  //     .then(	
  //       (result) => {	
  //         this.setState({	
  //           title: result.title,	
  //           author: result.author,	
  //           image: result.image,	
  //           body: result.body
  //         });	
  //         console.log(result);
  //       },	

  //       (error) => {	
  //         this.setState({	
  //           error	
  //         });	
  //       }	
  //     );	
  // }
  



  render() {
    const { title, author, image, body, category1, category2, category3, tag1, tag2, tag3, error} = this.state;
    if (this.state.toHome === true) {
      return <Redirect to='/' />;}
    if (error) {
      return <div>Error: {error.message}</div>;
    } else {
      return (
        <div>
          <Header />
          <Container>
            <form onSubmit={this.onSubmit}>
              <Row></Row>
              <input
                type="text"
                name="title"
                value={title}
                onChange={this.onChange}
                placeholder="Title"
              />
              <input
                type="text"
                name="author"
                value={author}
                onChange={this.onChange}
                placeholder="Author"
              />
              <input
                type="text"
                name="image"
                value={image}
                onChange={this.onChange}
                placeholder="Image URL"
              />
              <input
                type="text"
                name="category1"
                value={category1}
                onChange={this.onChange}
                placeholder="Category 1"
              />
              <input
                type="text"
                name="category2"
                value={category2}
                onChange={this.onChange}
                placeholder="Category 2"
              />
              <input
                type="text"
                name="category3"
                value={category3}
                onChange={this.onChange}
                placeholder="Category 3"
              />
              <input
                type="text"
                name="tag1"
                value={tag1}
                onChange={this.onChange}
                placeholder="Tag 1"
              />
              <input
                type="text"
                name="tag2"
                value={tag2}
                onChange={this.onChange}
                placeholder="Tag 2"
              />
              <input
                type="text"
                name="tag3"
                value={tag3}
                onChange={this.onChange}
                placeholder="Tag 3"
              />
              <input
                type="textarea"
                name="body"
                value={body}
                onChange={this.onChange}
                placeholder="Write your post here ..."
              />
              <TextArea />
              <button type="submit">Submit</button>
            </form>
          </Container>
        </div>
      );
    }}
}