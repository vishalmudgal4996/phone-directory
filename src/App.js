import React, { Component } from "react";
import { Fragment } from "react";
import { Button } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import Header from "./Header";

class App extends Component {
  render() {
    return (
      <Fragment>
        <Header />
        <Button variant="primary">Add</Button>
        <br />
        <label htmlFor="name">Name: </label>
        <input
          id="name"
          type="text"
          placeholder="Your Name"
          defaultValue="DesmonD"
        ></input>
        <br />
        <label htmlFor="phone">Phone: </label>
        <input
          id="phone"
          type="number"
          placeholder="Your Phone Number"
          defaultValue="8888888888"
        ></input>
      </Fragment>
    );
  }
}

export default App;
