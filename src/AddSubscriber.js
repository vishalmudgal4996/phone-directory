import React, { Component } from "react";
import { Fragment } from "react";
import { Button } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import Header from "./Header";
import "./AddSubscriber.css";

class AddSubscriber extends Component {
  render() {
    return (
      <Fragment>
        <div className="component-container">
          <Header heading="Add Subscriber" />
          <div className="component-body-container">
            <Button className="btn btn-secondary">Back</Button>
            <form className="subscriber-form">
              <div className="form-group">
                <label htmlFor="name" className="label-control">
                  Name:
                </label>
                <br />
                <input
                  type="text"
                  className="form-control input-control"
                  id="name"
                  aria-describedby="emailHelp"
                  placeholder="Enter your name"
                />
              </div>
              <div className="form-group">
                <label htmlFor="phone" className="label-control">
                  Phone:
                </label>
                <br />
                <input
                  type="number"
                  className="form-control input-control"
                  id="phone"
                  placeholder="Enter your phone"
                />
              </div>
              <div className="subscriber-info-container">
                <span className="subscriber-to-add-heading">
                  Subscriber to be added:
                </span>
                <br />
                <span className="subscriber-info">Name:</span>
                <br />
                <span className="subscriber-info">Phone:</span>
                <br />
              </div>
              <button type="submit" className="btn btn-success">
                Add
              </button>
            </form>
          </div>
        </div>
      </Fragment>
    );
  }
}

export default AddSubscriber;
