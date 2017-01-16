import React, { PropTypes } from 'react';

import "react-big-calendar/lib/css/react-big-calendar.css";
import BigCalendar from 'react-big-calendar';
import moment from 'moment';
BigCalendar.setLocalizer(
  BigCalendar.momentLocalizer(moment)
);

import events from "../events"

export default class HelloWorld extends React.Component {
  static propTypes = {
    name: PropTypes.string.isRequired, // this is passed from the Rails view
  };

  /**
   * @param props - Comes from your rails view.
   * @param _railsContext - Comes from React on Rails
   */
  constructor(props, _railsContext) {
    super(props);

    // How to set initial state in ES6 class syntax
    // https://facebook.github.io/react/docs/reusable-components.html#es6-classes
    this.state = { name: this.props.name };
  }

  updateName = (name) => {
    this.setState({ name });
  };

  render() {
    return (
      <div>
        <h3>
          Hello, {this.state.name}!
        </h3>
        <hr />
        <form >
          <label htmlFor="name">
            Say hello to:
          </label>
          <input
            id="name"
            type="text"
            value={this.state.name}
            onChange={(e) => this.updateName(e.target.value)}
          />
        </form>

        <div style={{height: "100vh"}}>
          <BigCalendar
                  events={events}
                  defaultDate={new Date(2015, 3, 1)}
                />
        </div>
      </div>
    );
  }
}
