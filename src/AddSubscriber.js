import React, { Component } from "react";
import { Fragment } from "react";
import { Button } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import Header from "./Header";
import "./AddSubscriber.css";
import { Link } from "react-router-dom";

class AddSubscriber extends Component {
  constructor() {
    super();
    this.state = {
      id: 0,
      name: "",
      phone: "",
    };
  }

  inputChangedHandler = (e) => {
    const state = this.state;
    state[e.target.name] = e.target.value;
    this.setState(state);
  };

  onFormSubmitted = (e) => {
    e.preventDefault();
    this.props.addSubscriberHandler(this.state);
    this.setState({ id: 0, name: "", phone: "" });
    e.target.reset();
    this.props.history.push("/");
  };

  render() {
    const { name, phone } = this.state;
    return (
      <Fragment>
        <div className="component-container">
          <Header heading="Add Subscriber" />
          <div className="component-body-container">
            <Link to="/">
              <Button className="btn btn-secondary">Back</Button>
            </Link>
            <form
              className="subscriber-form"
              onSubmit={this.onFormSubmitted.bind(this)}
            >
              <div className="form-group">
                <label htmlFor="name" className="label-control" name="name">
                  Name:
                </label>
                <br />
                <input
                  type="text"
                  className="form-control input-control"
                  id="name"
                  aria-describedby="emailHelp"
                  placeholder="Enter your name"
                  name="name"
                  onChange={this.inputChangedHandler}
                  required
                />
              </div>
              <div className="form-group">
                <label htmlFor="phone" className="label-control" name="phone">
                  Phone:
                </label>
                <br />
                <input
                  type="number"
                  className="form-control input-control"
                  id="phone"
                  placeholder="Enter your phone"
                  name="phone"
                  onChange={this.inputChangedHandler}
                  required
                />
              </div>
              <div className="subscriber-info-container">
                <span className="subscriber-to-add-heading">
                  Subscriber to be added:
                </span>
                <br />
                <span className="subscriber-info">Name: {name}</span>
                <br />
                <span className="subscriber-info">Phone: {phone}</span>
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
