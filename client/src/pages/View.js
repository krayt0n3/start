import React from "react";
import { Route, Link } from "react-router-dom";
import Header from "../components/Header";
const Views = ({ match }) => <p>{match.params.id}</p>;
class View extends React.Component {
  render() {
    const { url } = this.props.match;
    return <div>
      <Header />
      <h1>Users</h1>
      <strong>select a user</strong>
      <ul>
        <li>
          <Link to="/view/Government">Government </Link>
        </li>
        <li>
          <Link to="/view/bids">Bids </Link>
        </li>
        <li>
          <Link to="/view/Austin">Austin </Link>
        </li>
      </ul>
      <Route path="/view/:title" component={Views} />
    </div>;
  }
}
export default View;