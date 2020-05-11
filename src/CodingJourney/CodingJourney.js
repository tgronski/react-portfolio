import React, { Component } from "react";
import "./CodingJourney.css";
import Nav from "../Nav/Nav"
export default class CodingJourney extends Component {
  render() {
    return (<section className="CodingJourney">
        <p className="CodingJourney-bio">
          <b className='CodingJourney-title'>My Coding Journey:</b>
          <br />
          <br />
          My favorite class in college was Computer Science, and I've always
          gravitated towards roles that have analytical and technical
          challenges. I currently work full time as a Technical Project Manager,
          and one year ago, I made the exciting decision to invest in a part
          time coding bootcamp. <br />
          <br />
          After work & on the weekends, I'm studying Javascript, React, Node,
          and Express. I'm also learning about jQuery, HTML, CSS, responsive
          design, mobile-first design, testing with Mocha and Chai, deploying
          API servers with Node & Express, PostgreSQL, and more.{" "}
        </p>
      </section>
    );
  }
}
