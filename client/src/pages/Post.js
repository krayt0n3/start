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
    this.setState({ [e.target.name]: e.target.value });
  }


  onSubmit = (e) => {
    e.preventDefault();
    // get our form data out of state
    const { title, author, image, body} = this.state;

    var url = "https://blog-bidprime.herokuapp.com/api/post/create";
    
    
    fetch(url, {
      method: "POST",
      body: JSON.stringify({
        title: title,
        author: author,
        image: image,
        body: body
      }),
      // data can be `string` or {object}!
    }).then(res => console.log(res.json()));   
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
