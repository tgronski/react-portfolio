import React, { Component } from "react";
import quizapp from "./wine-icon.png";
import "./Code.css";
import ParkApp from "./travel-icon.png";
import noteful from "./note-icon.png";
import fisave from "./fisave.png";
import MediaQuery from "react-responsive";
import sustainability from "./monstrera.png";

export default class Code extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showfinance: true,
      showsustainable: false,
      shownotes: false,
      showparks: false,
      showquiz: false
    };
  }

  handleClickFinance = () => {
    if (this.state.showfinance === false) {
      this.setState({
        showfinance: true,
        showparks: false,
        showsustainable: false,
        shownotes: false,
        showquiz: false
      });
    }
  };
  handleClickSustainable = () => {
    if (this.state.showsustainable === false) {
      this.setState({
        showfinance: false,
        showparks: false,
        showsustainable: true,
        shownotes: false,
        showquiz: false
      });
    }
  };
  handleClickNotes = () => {
    if (this.state.shownotes === false) {
      this.setState({
        showfinance: false,
        showparks: false,
        shownotes: true,
        showsustainable: false,
        showquiz: false
      });
    }
  };
  handleClickParks = () => {
    if (this.state.showparks === false) {
      this.setState({
        showfinance: false,
        showparks: true,
        showsustainable: false,
        shownotes: false,
        showquiz: false
      });
    }
  };
  handleClickQuiz = () => {
    if (this.state.showquiz === false) {
      this.setState({
        showfinance: false,
        showparks: false,
        showsustainable: false,
        shownotes: false,
        showquiz: true
      });
    }
  };
  handleAll = () => {
    this.setState({
      showfinance: false,
      showparks: false,
      showsustainable: false,
      shownotes: false,
      showquiz: false
    });
  };
  render() {
    return (
      <section className="projectPage">
        <MediaQuery minDeviceWidth={800}>
          {matches =>
            matches ? (
                <>
              <section className="projects">
                <section>
                  <a
                    href="https://github.com/tcgronk/networth-client"
                    target="_blank" rel="noopener noreferrer" 
                  >
                    <img
                      src={fisave}
                      className="networthphoto"
                      alt="networth-app"
                    />
                  </a>{" "}
                  <section className="description">
                    <b onClick={this.handleClickFinance} className="title">
                      Finance
                    </b>
                    {this.state.showfinance ? (
                      <div className="arrow-down"></div>
                    ) : null}
                    <span className="project-detail">
                      This full stack project helps users track their networth
                      over time <br /> <br /> The PostgreSQL data is stored on
                      Heroku, and the app is deployed using Zeit.
                      <ul className="projectList">
                        Technologies Used:
                        <li>D3 for data visualizations</li>
                        <li>Javascript</li>
                        <li>React</li>
                        <li>HTML/CSS</li>
                        <li>Express.js</li>
                        <li>Node.js</li>
                        <li>PostgreSQL</li>
                      </ul>
                    </span>
                  </section>
                </section>
                <section>
                  <a
                    href="https://github.com/tcgronk/sustainability"
                    target="_blank"
                    rel="noopener noreferrer" 
                  >
                    <img
                      src={sustainability}
                      className="sustainablephoto"
                      alt="sustainable-app"
                    />
                  </a>{" "}
                  <section className="description">
                    <b onClick={this.handleClickSustainable} className="title">
                      Eco-Database
                    </b>
                    {this.state.showsustainable ? (
                      <div className="arrow-down"></div>
                    ) : null}
                    <span className="project-detail">
                      This full stack project helps users find sustainable
                      stores in a variety of categories. <br /> <br /> The
                      PostgreSQL data is stored on Heroku, and the app is
                      deployed using Zeit.
                      <ul className="projectList">
                        Technologies Used:
                        <li>Javascript</li>
                        <li>React</li>
                        <li>HTML/CSS</li>
                        <li>Express.js</li>
                        <li>Node.js</li>
                        <li>PostgreSQL</li>
                      </ul>
                    </span>
                  </section>
                </section>
                <section>
                  <a
                    href="https://github.com/tcgronk/Noteful-App"
                    target="_blank"
                    rel="noopener noreferrer" 
                  >
                    <img src={noteful} className="notephoto" alt="quiz-app" />{" "}
                  </a>
                  <section className="description">
                    <b className="title" onClick={this.handleClickNotes}>
                      Note Taking
                    </b>
                    {this.state.shownotes ? (
                      <div className="arrow-down"></div>
                    ) : null}
                    <span className="project-detail">
                      This was one of my first projects using React. Users can
                      add new folders and notes to the notetaking app. They can
                      also delete old notes.{" "}
                      <ul className="projectList">
                        Technologies Used:
                        <li>Javascript</li>
                        <li>HTML/CSS</li>
                        <li>React</li>
                        <li>Express server</li>
                        <li>Heroku</li>
                      </ul>
                    </span>
                  </section>
                </section>
                <section>
                  <a
                    target="_blank"
                    href="https://github.com/tcgronk/outdoorApp"
                    rel="noopener noreferrer" 
                  >
                    <img src={ParkApp} className="parkphoto" alt="quiz-app" />
                  </a>{" "}
                  <section className="description">
                    <b onClick={this.handleClickParks} className="title">
                      External API
                    </b>
                    {this.state.showparks ? (
                      <div className="arrow-down"></div>
                    ) : null}
                    <span className="project-detail">
                      This was my first experience implementing data from
                      multiple APIs. Users can search for their state or a state
                      they want to travel to. Then, they will be provided with a
                      description of National Parks in the state, the 3-day
                      forecast in each park, and nearby restaurants and
                      attractions. I used the National Parks API for the park
                      information, Weatherbit API for the forecast, and the
                      Foursquare API for the nearby attractions.{" "}
                      <ul className="projectList">
                        Technologies Used:
                        <li>Javascript</li>
                        <li>jQuery</li>
                        <li>HTML/CSS</li>
                      </ul>
                    </span>
                  </section>
                </section>
                <section>
                  <a href="https://github.com/tcgronk/Quiz-App" target="_blank" rel="noopener noreferrer" >
                    <img src={quizapp} className="winephoto" alt="quiz-app" />
                  </a>{" "}
                  <section className="description">
                    <b onClick={this.handleClickQuiz} className="title">
                      Quiz App
                    </b>
                    {this.state.showquiz ? (
                      <div className="arrow-down"></div>
                    ) : null}
                    <span className="project-detail">
                      This was one of my first projects. I have a personal
                      interest in studying the wine industry, so I created a
                      wine quiz to test wine industry knowledge.
                      <ul className="projectList">
                        Technologies Used:
                        <li>Javascript</li>
                        <li>jQuery</li>
                        <li>HTML/CSS</li>
                      </ul>
                    </span>
                  </section>
                </section>
              </section>
                      <section className="second-section">
                      {this.state.showfinance ? (
                        <span className="project-detail-large">
                          <a href="https://networth-client.now.sh" rel="noopener noreferrer"  target="_blank">
                            <h3>Fisave</h3>
                          </a>
                          This full stack project helps users track their networth over time{" "}
                          <br /> <br /> The PostgreSQL data is stored on Heroku, and the app
                          is deployed using Zeit.
                          <br /> <br />
                          <span className="projectList">
                            <a
                              href="https://github.com/tcgronk/networth-client"
                              target="_blank"
                              rel="noopener noreferrer" 
                            >
                              Technologies Used:
                            </a>
                            <ul>
                            <li>D3 for data visualizations</li>
                            <li>Javascript</li>
                            <li>React</li>
                            <li>HTML/CSS</li>
                            <li>Express.js</li>
                            <li>Node.js</li>
                            <li>PostgreSQL</li>
                            </ul>
                          </span>
                        </span>
                      ) : null}
            
                      {this.state.showsustainable ? (
                        <span className="project-detail-large">
                          <a href="https://sustainability.now.sh" rel="noopener noreferrer"  target="_blank">
                            <h3>Shop Sustainably</h3>
                          </a>
                          This full stack project helps users find sustainable stores in a
                          variety of categories. <br /> <br /> The PostgreSQL data is stored
                          on Heroku, and the app is deployed using Zeit.
                          <br /> <br />
                          <ul className="projectList">
                            <a
                              href="https://github.com/tcgronk/sustainability"
                              target="_blank"
                              rel="noopener noreferrer" 
                            >
                              Technologies Used:
                            </a>
                            <li>Javascript</li>
                            <li>React</li>
                            <li>HTML/CSS</li>
                            <li>Express.js</li>
                            <li>Node.js</li>
                            <li>PostgreSQL</li>
                          </ul>
                        </span>
                      ) : null}
                      {this.state.shownotes ? (
                        <p className="project-detail-large">
                          <a href="https://noteful-app-pi-seven.now.sh" rel="noopener noreferrer" target="_blank">
                            <h3>Note Taking App</h3>
                          </a>
                          This was one of my first projects using React. Users can add new
                          folders and notes to the notetaking app. They can also delete old
                          notes. <br /> <br />
                          <ul className="projectList">
                            <a
                              href="https://github.com/tcgronk/Noteful-App"
                              target="_blank"
                              rel="noopener noreferrer" 
                            >
                              Technologies Used:
                            </a>
                            <li>Javascript</li>
                            <li>HTML/CSS</li>
                            <li>React</li>
                            <li>Express server</li>
                            <li>Heroku</li>
                          </ul>
                        </p>
                      ) : null}
                      {this.state.showparks ? (
                        <span className="project-detail-large">
                          <a href="https://tcgronk.github.io/outdoorApp/" rel="noopener noreferrer" target="_blank">
                            <h3>National Park Trip Planner</h3>
                          </a>
                          This was my first experience implementing data from multiple APIs.
                          Users can search for their state or a state they want to travel
                          to. Then, they will be provided with a description of National
                          Parks in the state, the 3-day forecast in each park, and nearby
                          restaurants and attractions. I used the National Parks API for the
                          park information, Weatherbit API for the forecast, and the
                          Foursquare API for the nearby attractions. <br /> <br />
                          <ul className="projectList">
                            <a href="https://github.com/tcgronk/outdoorApp" rel="noopener noreferrer" target="_blank">
                              Technologies Used:
                            </a>
                            <li>Javascript</li>
                            <li>jQuery</li>
                            <li>HTML/CSS</li>
                          </ul>
                        </span>
                      ) : null}
                      {this.state.showquiz ? (
                        <span className="project-detail-large">
                          <a href="https://tcgronk.github.io/Quiz-App/" target="_blank" rel="noopener noreferrer" >
                            <h3>Wine Industry Quiz</h3>
                          </a>
                          This was one of my first projects. I have a personal interest in
                          studying the wine industry, so I created a wine quiz to test wine
                          industry knowledge.
                          <br />
                          <br />
                          <ul className="projectList">
                            <a href="https://github.com/tcgronk/Quiz-App" target="_blank" rel="noopener noreferrer" >
                              {" "}
                              Technologies Used:
                            </a>
                            <li>Javascript</li>
                            <li>jQuery</li>
                            <li>HTML/CSS</li>
                          </ul>
                        </span>
                      ) : null}
                    </section>
                    </>
             
            ) : (
              <section className="projects">
                <section>
                  <a
                    href="https://github.com/tcgronk/networth-client"
                    target="_blank"
                    rel="noopener noreferrer" 
                  >
                    <img
                      src={fisave}
                      className="networthphoto"
                      alt="networth-app"
                    />
                  </a>{" "}
                  <section className="description">
                    <b className="title">Finance</b>

                    <span className="project-detail">
                        <br/>
                      This full stack project helps users track their networth
                      over time <br /> <br /> The PostgreSQL data is stored on
                      Heroku, and the app is deployed using Zeit.
                      <ul className="projectList">
                        Technologies Used:
                        <li>D3 for data visualizations</li>
                        <li>Javascript</li>
                        <li>React</li>
                        <li>HTML/CSS</li>
                        <li>Express.js</li>
                        <li>Node.js</li>
                        <li>PostgreSQL</li>
                      </ul>
                    </span>
                  </section>
                </section>
                <section>
                  <a
                    href="https://github.com/tcgronk/sustainability"
                    target="_blank"
                    rel="noopener noreferrer" 
                  >
                    <img
                      src={sustainability}
                      className="sustainablephoto"
                      alt="sustainable-app"
                    />
                  </a>{" "}
                  <section className="description">
                    <b className="title">Eco-Database</b>
                    <br/>
                    <span className="project-detail">
                      This full stack project helps users find sustainable
                      stores in a variety of categories. <br /> <br /> The
                      PostgreSQL data is stored on Heroku, and the app is
                      deployed using Zeit.
                      <ul className="projectList">
                        Technologies Used:
                        <li>Javascript</li>
                        <li>React</li>
                        <li>HTML/CSS</li>
                        <li>Express.js</li>
                        <li>Node.js</li>
                        <li>PostgreSQL</li>
                      </ul>
                    </span>
                  </section>
                </section>
                <section>
                  <a
                    href="https://github.com/tcgronk/Noteful-App"
                    target="_blank"
                    rel="noopener noreferrer" 
                  >
                    <img src={noteful} className="notephoto" alt="quiz-app" />{" "}
                  </a>
                  <section className="description">
                    <b className="title">Note Taking</b>
                    <br/>
                    <span className="project-detail">
                      This was one of my first projects using React. Users can
                      add new folders and notes to the notetaking app. They can
                      also delete old notes.{" "}
                      <ul className="projectList">
                        Technologies Used:
                        <li>Javascript</li>
                        <li>HTML/CSS</li>
                        <li>React</li>
                        <li>Express server</li>
                        <li>Heroku</li>
                      </ul>
                    </span>
                  </section>
                </section>
                <section>
                  <a
                    target="_blank"
                    href="https://github.com/tcgronk/outdoorApp"
                    rel="noopener noreferrer" 
                  >
                    <img src={ParkApp} className="parkphoto" alt="quiz-app" />
                  </a>{" "}
                  <section className="description">
                    <b className="title">External API</b>
                    <br/>
                    <span className="project-detail">
                      This was my first experience implementing data from
                      multiple APIs. Users can search for their state or a state
                      they want to travel to. Then, they will be provided with a
                      description of National Parks in the state, the 3-day
                      forecast in each park, and nearby restaurants and
                      attractions. I used the National Parks API for the park
                      information, Weatherbit API for the forecast, and the
                      Foursquare API for the nearby attractions.{" "}
                      <ul className="projectList">
                        Technologies Used:
                        <li>Javascript</li>
                        <li>jQuery</li>
                        <li>HTML/CSS</li>
                      </ul>
                    </span>
                  </section>
                </section>
                <section className='LastSection'>
                  <a href="https://github.com/tcgronk/Quiz-App" target="_blank" rel="noopener noreferrer" >
                    <img src={quizapp} className="winephoto" alt="quiz-app" />
                  </a>{" "}
                  <section className="description">
                    <b className="title">Quiz App</b>
                    <br/>
                    <span className="project-detail">
                      This was one of my first projects. I have a personal
                      interest in studying the wine industry, so I created a
                      wine quiz to test wine industry knowledge.
                      <ul className="projectList">
                        Technologies Used:
                        <li>Javascript</li>
                        <li>jQuery</li>
                        <li>HTML/CSS</li>
                      </ul>
                    </span>
                  </section>
                </section>
              </section>
            )
          }
        </MediaQuery>

      </section>
    );
  }
}
