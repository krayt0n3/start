import React, { Component } from "react";


export default class SignUp extends Component {
  constructor() {
    super();
    this.state = {
      title: "",
      author: "",
      image: "",
      body: ""

    };
  }

  onChange = (e) => {
    /*
      Because we named the inputs to match their
      corresponding values in state, it's
      super easy to update the state
    */
    this.setState({ [e.target.name]: e.target.value });
  }


  onSubmit = (e) => {
    e.preventDefault();
    // get our form data out of state
    const { title, author, image, body} = this.state;

    var url = "https://blog-bidprime.herokuapp.com/api/customers/create";
    var data = {title, author, image, body};
    
    fetch(url, {
      method: "POST", // or 'PUT'
      body: JSON.stringify(data), // data can be `string` or {object}!
      headers:{
        "Content-Type": "application/json",
        "Accept": "application/json"
      }
    }).then(res => res.json())
      .then(response => console.log("Success:", JSON.stringify(response)))
      .catch(error => console.error("Error:", error));
    this.props.history.push("/");
  }


  componentDidMount() {
    fetch("https://blog-bidprime.herokuapp.com/api/")
      .then(res => res.json())
      .then(
        (result) => {
          this.setState({
            title: result.title,
            author: result.author,
            image: result.image,
            body: result.body
          });
        },
        
        (error) => {
          this.setState({
            error
          });
        }
      );
  }


  render() {
    const { title, author, image, body, error} = this.state;
    if (error) {
      return <div>Error: {error.message}</div>;
    } else {
      return (
        <form onSubmit={this.onSubmit}>
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
            type="textarea"
            name="body"
            value={body}
            onChange={this.onChange}
            placeholder="Write your post here ..."
          />
          
          <button type="submit">Submit</button>
        </form>
      );
    }}
}
