import React from "react";
import "./components.css";
import * as Api from "typescript-fetch-api";
import { withRouter } from "react-router";
import { Link } from "react-router-dom";
import moment from "moment";

const api = new Api.DefaultApi();

class Evevnts extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      events: [],
    };
    this.handleReload = this.handleReload.bind(this);
    this.handleReload();
  }

  async handleReload(event) {
    const response = await api.events();
    this.setState({ events: response });
  }

  render() {
    return (
      <div class="playgrounds-wrapper">
        <h2 class="playgrounds-search-title">
          Actual events on {moment().format("DD.MM.YYYY")}
        </h2>
        <p class="playgrounds-search-subtitle">
          Take part in the most interesting events, raise your level of play,
          communicate with experienced players. This and more can be found at
          the events below
        </p>
        <div class="playgrounds-cards-container">
          {this.state.events.map((event) => (
            <div class="playgrounds-card">
              <Link to={`/events/${event.name}`}>
                <img
                  src={event.image}
                  alt="playground"
                  class="playgrounds-image"
                ></img>
              </Link>
              <div class="playgrounds-description-container">
                <Link to={`/events/${event.name}`}>
                  <p class="playgrounds-description-title">
                    "{event.name}" event
                  </p>
                </Link>
                <p class="playgrounds-description-adress">
                  Adress: {event.address}
                </p>
                <p class="playgrounds-description-sport">
                  Organizer: {event.organizer}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  }
}

export default withRouter(Evevnts);
