import React, { Component } from "react";
import { Fragment } from "react";
import { Button } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import Header from "./Header";
import "./App.css";

class App extends Component {
  render() {
    return (
      <Fragment>
        <Header />
        <div className="component-body-container">
          <Button className="btn btn-success">Add</Button>
          <div className="grid-container heading-container">
            <label className="grid-item name-heading" htmlFor="name">
              Name
            </label>
            <input
              id="name"
              type="text"
              placeholder="Your Name"
              defaultValue="DesmonD"
            ></input>
            <br />
            <label className="grid-item phone-heading" htmlFor="phone">
              Phone
            </label>
            <input
              id="phone"
              type="number"
              placeholder="Your Phone Number"
              defaultValue="8888888888"
            ></input>
          </div>
        </div>
      </Fragment>
    );
  }
}

export default App;
