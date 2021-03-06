import React, { Component } from "react";
import { Fragment } from "react";
import { Button } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import Header from "./Header";
import "./ShowSubscribers.css";
import { Link } from "react-router-dom";

class ShowSubscribers extends Component {
  onDeletedClick = (subscriberId) => {
    this.props.deleteSubscriberHandler(subscriberId);
  };

  render() {
    return (
      <Fragment>
        <div className="component-container">
          <Header heading="Phone Directory" />
          <div className="component-body-container">
            <Link to="/subscriber">
              <Button className="btn btn-success">Add</Button>
            </Link>
            <div className="grid-container heading-container">
              <span className="grid-item name-heading" htmlFor="name">
                Name
              </span>
              <span className="grid-item phone-heading" htmlFor="phone">
                Phone
              </span>
            </div>
            {this.props.subscribersList.map((sub) => {
              return (
                <div key={sub.id} className="grid-container">
                  <span className="grid-item">{sub.name}</span>
                  <span className="grid-item">{sub.phone}</span>
                  <Button
                    className="btn btn-danger"
                    onClick={this.onDeletedClick.bind(this, sub.id)}
                  >
                    Delete
                  </Button>
                </div>
              );
            })}
          </div>
        </div>
      </Fragment>
    );
  }
}

export default ShowSubscribers;
