import React, { Component } from "react";
import { Fragment } from "react";
import { Button } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

class App extends Component {
  render() {
    return (
      <Fragment>
        {/* <div className="header">Phone Directory</div>
        <Button variant="primary">Add</Button>
        <div>
          <span>Name</span>
          <br />
          <span>Phone</span>
        </div> */}
        <label htmlFor="name">Name: </label>
        <input
          id="name"
          type="text"
          placeholder="Your Name"
          defaultValue="DesmonD"
        ></input>
      </Fragment>
    );
  }
}

export default App;
