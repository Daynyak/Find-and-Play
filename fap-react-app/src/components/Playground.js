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
      playground: [],
      targetPlayground: id,
    };
    this.handleReload = this.handleReload.bind(this);
    this.handleReload();
  }

  async handleReload(event) {
    const response = await api.playground({
      playground: this.state.targetPlayground,
    });
    this.setState({ playground: response });
  }

  render() {
    return (
      <div class="playground">
        {this.state.playground.map((playground) => (
          <div class="playground-info">
            {" "}
            <h2 class="playground-title">Playground "{playground.name}"</h2>
            <div class="playground-desc">
              <img
                src={playground.image}
                alt="playground"
                class="playground-image"
              ></img>
              <div class="playground-description-container">
                <h3 class="playground-description-det">Detailed information</h3>
                <ul class="playground-description-list">
                  <li class="playground-description-item">
                    Adress: {playground.address}
                  </li>
                  <li class="playground-description-item">
                    Type of sport: {playground.sport}
                  </li>
                  <li class="playground-description-item">
                    Size: {playground.size} m²
                  </li>
                  <li class="playground-description-item">
                    Capacity: {playground.capacity} human
                  </li>
                  <li class="playground-description-item">
                    Surface: {playground.surface}
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
