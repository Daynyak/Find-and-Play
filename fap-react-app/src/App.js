import "./App.css";
import React from "react";
import Playgrounds from "components/Playgrounds";
import Playground from "components/Playground";
import Event from "components/Event";
import Events from "components/Events";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

function App() {
  return (
    <Router>
      <header class="header">
        <Link class="header__heading" to="/">
          Find and Play
        </Link>
        <nav class="header__nav">
          <ul class="nav__list">
            <li class="nav__list-item">
              <Link class="nav__item-link" to="/playgrounds">
                Playgrounds
              </Link>
            </li>
            <li class="nav__list-item">
              <Link class="nav__item-link" to="/events">
                Events
              </Link>
            </li>
          </ul>
        </nav>
        <button class="header__button">Sign Up</button>
      </header>
      <div className="App" class="app">
        <Switch>
          <Route path="/playgrounds/:id">
            <Playground />
          </Route>
          <Route path="/playgrounds">
            <Playgrounds />
          </Route>
          <Route path="/events/:id">
            <Event />
          </Route>
          <Route path="/events">
            <Events />
          </Route>
          <Route path="/">
            <main class="main">
              {" "}
              <h2 class="main-heading">New view at sport</h2>
              <Link to="/playgrounds">
                <button class="main-button">Find playground</button>
              </Link>
            </main>
          </Route>
        </Switch>
      </div>
      <footer class="footer">
        <div class="footer__copyright">©Find and Play 2021</div>
      </footer>
    </Router>
  );
}
export default App;
