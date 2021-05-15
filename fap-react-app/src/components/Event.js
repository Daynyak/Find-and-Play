import React from "react";
import "./components.css";
import * as Api from "typescript-fetch-api";
import { withRouter } from "react-router";

const api = new Api.DefaultApi();

class Playground extends React.Component {
  constructor(props) {
    super(props);
    const id = this.props.match?.params.id;
    this.state = {
      event: [],
      targetEvent: id,
    };
    this.handleReload = this.handleReload.bind(this);
    this.handleReload();
  }

  async handleReload(event) {
    const response = await api.event({
      event: this.state.targetEvent,
    });
    this.setState({ event: response });
  }

  render() {
    return (
      <div class="playground">
        {this.state.event.map((event) => (
          <div class="playground-info">
            {" "}
            <h2 class="playground-title">Event "{event.name}"</h2>
            <div class="playground-desc">
              <img
                src={event.image}
                alt="playground"
                class="playground-image"
              ></img>
              <div class="playground-description-container">
                <h3 class="playground-description-det">Detailed information</h3>
                <ul class="playground-description-list">
                  <li class="playground-description-item">
                    Adress: {event.address}
                  </li>
                  <li class="playground-description-item">
                    Type of sport: {event.sport}
                  </li>
                  <li class="playground-description-item">
                    Organizer: {event.organizer}
                  </li>
                  <li class="playground-description-item">
                    Price: {event.price} $
                  </li>
                  <li class="playground-description-item">
                    Seats: {event.seats}
                  </li>
                </ul>
                <button class="playground-button">Plot a route</button>
              </div>
            </div>
          </div>
        ))}
      </div>
    );
  }
}

export default withRouter(Playground);
