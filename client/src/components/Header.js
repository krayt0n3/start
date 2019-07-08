import React from "react";
import { NavLink, Link } from "react-router-dom";

export default class Header extends React.Component {
  render(){
    return <header>
      <Link to="/"><img src="https://blog.bidprime.com/wp-content/uploads/2018/03/bidoprime.png" className="logo" alt="logo" /></Link>
     
      <NavLink exact activeClassName="active" to="/">
            HOME
      </NavLink> 
      <NavLink exact activeClassName="active" to="/view">
            VIEW
      </NavLink> 
      <NavLink exact activeClassName="active" to="/post">
            POST
      </NavLink>

    </header>;

        
  }
}