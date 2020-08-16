import React, { Component } from "react";
import { Fragment } from "react";
import { Button } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import Header from "./Header";
import "./App.css";

class App extends Component {
  constructor() {
    super();
    this.state = {
      subscribersListToShow: [],
    };
  }
  render() {
    // let subscribers = [
    //   {
    //     id: 1,
    //     name: "Desmond Miles",
    //     phone: 9999999999,
    //   },
    //   {
    //     id: 2,
    //     name: "Haytham Kenway",
    //     phone: 8888888888,
    //   },
    // ];

    return (
      <Fragment>
        <div className="component-container">
          <Header heading="Phone Directory" />
          <div className="component-body-container">
            <Button className="btn btn-success">Add</Button>
            <div className="grid-container heading-container">
              <span className="grid-item name-heading" htmlFor="name">
                Name
              </span>
              <span className="grid-item phone-heading" htmlFor="phone">
                Phone
              </span>
            </div>
            {this.state.subscribersListToShow.map((sub) => {
              return (
                <div key={sub.id} className="grid-container">
                  <span className="grid-item">{sub.name}</span>
                  <span className="grid-item">{sub.phone}</span>
                  <Button className="btn btn-danger">Delete</Button>
                </div>
              );
            })}
          </div>
        </div>
      </Fragment>
    );
  }
}

export default App;
