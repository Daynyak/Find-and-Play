import React from "react";
import "./components.css";
import * as Api from "typescript-fetch-api";
import { withRouter } from "react-router";
import { Link } from "react-router-dom";
import moment from "moment";

const api = new Api.DefaultApi();

class Playgrounds extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      playgrounds: [],
    };
    this.handleReload = this.handleReload.bind(this);
    this.handleReload();
  }

  async handleReload(event) {
    const response = await api.playgrounds();
    this.setState({ playgrounds: response });
  }

  render() {
    return (
      <div class="playgrounds-wrapper">
        <h2 class="playgrounds-search-title">
          Free playgrounds on {moment().format("DD.MM.YYYY")}
        </h2>
        <p class="playgrounds-search-subtitle">
          Find your own playground that will appeal to you, a variety of
          parameters will help you make a choice. Coverage, size, capacity,
          address, choose what your heart desires
        </p>
        <div class="playgrounds-cards-container">
          {this.state.playgrounds.map((playground) => (
            <div class="playgrounds-card">
              <Link to={`/playgrounds/${playground.name}`}>
                <img
                  src={playground.image}
                  alt="playground"
                  class="playgrounds-image"
                ></img>
              </Link>
              <div class="playgrounds-description-container">
                <Link to={`/playgrounds/${playground.name}`}>
                  <p class="playgrounds-description-title">
                    Playground "{playground.name}"
                  </p>
                </Link>
                <p class="playgrounds-description-adress">
                  Adress: {playground.address}
                </p>
                <p class="playgrounds-description-sport">
                  Type of sport: {playground.sport}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  }
}

export default withRouter(Playgrounds);
