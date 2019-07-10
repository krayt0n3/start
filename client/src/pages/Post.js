import React, { Component } from "react";
import { Redirect } from "react-router-dom";
import Header from "../components/Header";
import {Container, Col, Row} from "react-bootstrap";
import CKEditor from "@ckeditor/ckeditor5-react";
import ClassicEditor from "@ckeditor/ckeditor5-build-classic";
var axios = require("axios");


export default class SignUp extends Component {
  constructor() {
    super();
    this.state = {
      title: "",
      author: "",
      image: "",
      body: "",
      category: "",
      toHome: false
    };
  }

  onChange = (e) => {	
    this.setState({ [e.target.name]: e.target.value });	
  }


  onSubmit = (e) => {
    e.preventDefault();
    // get our form data out of state
    const { title, author, image, body, category } = this.state;

    var url = "https://blog-bidprime.herokuapp.com/api/post/create";
    var data = {title, author, image, body, category };
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
    
  }

  render() {
    const { title, author, image, body, category, error} = this.state;
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
              <Row>
                <Col>
                  <input
                    type="text"
                    name="title"
                    value={title}
                    onChange={this.onChange}
                    placeholder=" Title"
                    className="formTabs"
                  /></Col>
                <Col>
                  <input
                    type="text"
                    name="author"
                    value={author}
                    onChange={this.onChange}
                    placeholder=" Author"
                    className="formTabs"
                  /></Col>
              </Row>
              <br />
              <Row>
                <Col>
                  <input
                    type="text"
                    name="image"
                    value={image}
                    onChange={this.onChange}
                    placeholder=" Image URL"
                    className="formTabs"
                  /></Col>
                <Col>
                  <input
                    type="text"
                    name="category"
                    value={category}
                    onChange={this.onChange}
                    placeholder=" Category"
                    className="formTabs"
                  /></Col>
              </Row>
              <br />
              <Row>
                <Col>
                  <div className="editor">
        
                    <CKEditor
                      editor={ ClassicEditor }
                      data="<p>Write your post here!</p>"
                      onInit={ editor => {
                        // You can store the "editor" and use when it is needed.
                        console.log( "Editor is ready to use!", editor );
                      } }
                      onChange={ ( event, editor ) => {
                        const data = editor.getData();
                        window.editor = editor;
                        this.setState({ body: data});
                      } }
                      
                      onBlur={ editor => {
                        console.log( "Blur.", editor );
                      } }
                      onFocus={ editor => {
                        console.log( "Focus.", editor );
                      } }
                    />
                  </div>
                </Col>
              </Row>
              <br />
              <button type="submit">Submit</button>
            </form>
          </Container>
        </div>
      );
    }}
}