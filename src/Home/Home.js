import React, { Component } from "react";
import "./Home.css";
import Main from "../Main/Main";
import About from "../About/About";

export default class Home extends Component {
  render() {
    return (
      <section className="page">
        <section className="homePage">
          <p className="bio">
            {" "}
            <i className="welcome"> Welcome! </i>
            <br />
            Hi, I'm Tess Gronski. I am a Bay Area developer with one year of
            full stack Javascript experience. I also have business experience in
            finance, people leadership, and technical project management.{" "}
          </p>
        </section>
        <Main />
        <About />
      </section>
    );
  }
}
