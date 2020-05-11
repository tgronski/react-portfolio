import React, { Component } from "react";
import "./Article.css";
import { Link } from "react-router-dom";
import Data from "../Data.js";
import MediaQuery from "react-responsive";

export default class Articles extends Component {
  render() {
    for (let i = 0; i < Data.articles.length + 1; i++) {
      if (this.props.match.params.article === Data.articles[0][i].article) {
        return (
          <MediaQuery minDeviceWidth={700}>
            {matches =>
              matches ? (
                <section className="articlePage">
                  <Link to="/leadership" className="buttonLink">
                    <button className="backButton">
                      All <br />
                      Posts
                    </button>
                  </Link>
                  <span className="articleHeader">
                    <p>
                      <b className="title">{Data.articles[0][i].title}</b>
                      <br />
                      {Data.articles[0][i].author}
                      {Data.articles[0][i].date} · {Data.articles[0][i].read}
                    </p>
                  </span>
                  <br />

                  <div className="articlePhoto">
                    <img src={Data.articles[0][i].img} alt="article"></img>
                  </div>
                  <p className="credits">
                    Image is from Sandra at HerCreativeStudio.com
                  </p>
                  <p className="content">
                    {Data.articles[0][i].content1}
                    <br />
                    <br />
                    {Data.articles[0][i].original}
                  </p>
                </section>
              ) : (
                <section className="articlePage">
                  <section className="buttonLinkSmall">
                    <Link to="/leadership" className="buttonLink">
                      <button class="backButton">
                        All <br />
                        Posts
                      </button>
                    </Link>
                  </section>
                  <span className="articleHeader">
                    <p>
                      <b className="title">{Data.articles[0][i].title}</b>
                      <br />
                      {Data.articles[0][i].author}
                      {Data.articles[0][i].date} · {Data.articles[0][i].read}
                    </p>
                  </span>
                  <br />
                  <section className="articlePhotoSmall">
                    <img src={Data.articles[0][i].img} alt="article"></img>
                  </section>
                  <p className="credits">
                    Image is from Sandra at HerCreativeStudio.com
                  </p>
                  <p className="content">
                    {Data.articles[0][i].content1}
                    <br />
                    <br />
                    {Data.articles[0][i].original}
                  </p>
                </section>
              )
            }
          </MediaQuery>
        );
      }
    }
  }
}
