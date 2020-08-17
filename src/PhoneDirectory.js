import React, { Component } from "react";
import AddSubscriber from "./AddSubscriber";
import ShowSubscribers from "./ShowSubscribers";
import { BrowserRouter as Router, Route } from "react-router-dom";

class PhoneDirectory extends Component {
  constructor() {
    super();
    this.state = {
      subscribersList: [
        {
          id: 1,
          name: "Desmond Miles",
          phone: "0123456789",
        },
      ],
    };
  }

  deleteSubscriberHandler = (subscriberId) => {
    let subscribersList = this.state.subscribersList;
    let subscriberIndex = 0;
    subscribersList.forEach((subscriber, index) => {
      if (subscriber.id === subscriberId) {
        subscriberIndex = index;
      }
    }, this);

    let newSubscribersList = subscribersList;
    newSubscribersList.splice(subscriberIndex, 1);
    this.setState({ subscribersList: newSubscribersList });
  };

  addSubscriberHandler = (newSubscriber) => {
    let subscribersList = this.state.subscribersList;
    if (subscribersList.length > 0) {
      newSubscriber.id = subscribersList[subscribersList.length - 1].id + 1;
    } else {
      newSubscriber.id = 1;
    }
    subscribersList.push(newSubscriber);
    this.setState({ subscribersList: subscribersList });
  };
  render() {
    return (
      <Router>
        <div>
          <Route
            exact
            path="/"
            render={(props) => (
              <ShowSubscribers
                {...props}
                subscribersList={this.state.subscribersList}
                deleteSubscriberHandler={this.deleteSubscriberHandler}
              />
            )}
          ></Route>
          <Route
            exact
            path="/subscriber"
            render={({ history }, props) => (
              <AddSubscriber
                history={history}
                {...props}
                addSubscriberHandler={this.addSubscriberHandler}
              />
            )}
          ></Route>
        </div>
      </Router>
    );
  }
}

export default PhoneDirectory;
