import React, { Component } from "react";


export default class SignUp extends Component {
  constructor() {
    super();
    this.state = {
      firstname: "",
      lastname: "",
      phonenumber: "",
      email: "",
      password: "",
      address1: "",
      address2: "",
      address3: "",
      city: "",
      state: "",
      zip: ""
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
    const { firstname, lastname, phonenumber, email, password, address1, address2, address3, city, state, zip} = this.state;

    var url = "https://lightbites.herokuapp.com/api/customers/create";
    var data = {firstname, lastname, phonenumber, email, password, address1, address2, address3, city, state, zip};
    
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
    fetch("https://lightbites.herokuapp.com/api/customers/")
      .then(res => res.json())
      .then(
        (result) => {
          this.setState({
            firstname: result.firstname,
            lastname: result.lastname,
            phonenumber: result.phonenumber,
            email: result.email,
            password: result.password,
            address1: result.address1,
            address2: result.address2,
            address3: result.address3,
            city: result.city,
            state: result.state,
            zip: result.zip
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
    const { firstname, lastname, phonenumber, email, password, address1, address2, address3, city, state, zip, error} = this.state;
    if (error) {
      return <div>Error: {error.message}</div>;
    } else {
      return (
        <form onSubmit={this.onSubmit}>
          <input
            type="text"
            name="firstname"
            value={firstname}
            onChange={this.onChange}
            placeholder="First Name"
          />
          <input
            type="text"
            name="lastname"
            value={lastname}
            onChange={this.onChange}
            placeholder="Last Name"
          />
          <input
            type="text"
            name="phonenumber"
            value={phonenumber}
            onChange={this.onChange}
            placeholder="Phone Number"
          />
          <input
            type="text"
            name="email"
            value={email}
            onChange={this.onChange}
            placeholder="Email"
          />
          <input
            type="text"
            name="password"
            value={password}
            onChange={this.onChange}
            placeholder="Password"
          />
          <input
            type="text"
            name="address1"
            value={address1}
            onChange={this.onChange}
            placeholder="Address 1"
          />
          <input
            type="text"
            name="address2"
            value={address2}
            onChange={this.onChange}
            placeholder="Address 2"
          />
          <input
            type="text"
            name="address3"
            value={address3}
            onChange={this.onChange}
            placeholder="Address 3"
          />
          <input
            type="text"
            name="city"
            value={city}
            onChange={this.onChange}
            placeholder="City"
          />
          <input
            type="text"
            name="state"
            value={state}
            onChange={this.onChange}
            placeholder="State"
          />
          <input
            type="number"
            name="zip"
            value={zip}
            onChange={this.onChange}
            placeholder="Zipcode"
          />
          <button type="submit">Submit</button>
        </form>
      );
    }}
}
