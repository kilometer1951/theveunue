import React, { Component } from "react";
import { Element } from "react-scroll";

import "./resources/styles.css";
import Header from "./components/Header";
import Featured from "./components/Featured";
import VenueInfo from "./components/VenueInfo";
import Highlights from "./components/highlight";
import Price from "./components/Price";
import Location from "./components/Location";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <Element name="featured">
          <Featured />
        </Element>

        <Element name="venueinfo">
          <VenueInfo />
        </Element>

        <Element name="highlights">
          <Highlights />
        </Element>

        <Element name="price">
          <Price />
        </Element>

        <Element name="location">
          <Location />
        </Element>
      </div>
    );
  }
}

export default App;
