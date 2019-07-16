import React, { Component } from "react";
import { Redirect } from "react-router-dom";
import {Col, Row} from "react-bootstrap";
import CKEditor from "@ckeditor/ckeditor5-react";
import ClassicEditor from "@ckeditor/ckeditor5-build-classic";
import Layout from "../components/Layout";
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
        <Layout>
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
                <select value={category} onChange={this.onChange} name="category" className="formTabs">
                  <option value="" disabled selected>Category</option>
                  <option value="BidPrime News">BidPrime News</option>
                  <option value="Information Technology">Information Technology</option>
                  <option value="Transportation">Transportation</option>
                  <option value="Medical, Health and Laboratory">Medical, Health and Laboratory</option>
                  <option value="Food and Food Service">Food and Food Service</option>
                  <option value="Environmental">Environmental</option>
                  <option value="Parks, Sports and Recreation">Parks, Sports and Recreation</option>
                  <option value="Clothing, Textiles and Uniforms">Clothing, Textiles and Uniforms</option>
                  <option value="Energy & Lighting">Energy & Lighting</option>
                  <option value="Security, Public Safety, Fire & Safety">Security, Public Safety, Fire & Safety</option>
                  <option value="Public Works, Water and Sanitation">Public Works, Water and Sanitation</option>
                  <option value="Consulting & Professional Services">Consulting & Professional Services</option>
                  <option value="Office Supplies, Imaging and Technology">Office Supplies, Imaging and Technology</option>
                  <option value="Rental & Leasing of Equipment and Real Estate">Rental & Leasing of Equipment and Real Estate</option>
                  <option value="Radio, Communication, Telephone and Telecom">Radio, Communication, Telephone and Telecom</option>
                  <option value="Building Operations, Cleaning and Maintenance">Building Operations, Cleaning and Maintenance</option>
                  <option value="Architecture, Engineering & Construction">Architecture, Engineering & Construction</option>
                </select></Col>
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
        </Layout>
      );
    }}
}