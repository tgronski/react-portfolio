import React from "react";
import "./Learn.css";
import MediaQuery from "react-responsive";

function Learn() {
  let today = new Date();
  let dd = today.getDate();
  let mm = today.getMonth() + 1; 
  let yyyy = today.getFullYear();
  if (dd < 10) {
    dd = "0" + dd;
  }
  if (mm < 10) {
    mm = "0" + mm;
  }
  today = mm + "/" + dd + "/" + yyyy;
  let d2 = new Date(today);
  let d1 = new Date("05/11/2019");
  let timeDiff = d2.getTime() - d1.getTime();
  let DaysDiff = (timeDiff / (1000 * 3600 * 24)).toFixed(0);
  return (
    <div className="bottomMain">
      <MediaQuery minDeviceWidth={1000}>
        {matches =>
          matches ? (
            <span className="largeScreen">
              <p className="learn-code">
                <span role="img" aria-label="wave-emoji" className="wave">
                  👋
                </span>{" "}
                I've been learning to <br /> code for: {DaysDiff} days
              </p>
              <p className="quote">
                "The most dangerous phrase <br /> in the English language is,{" "}
                <br /> 'We've always done it this way.'" <br />
                -Grace Hopper
              </p>
            </span>
          ) : (
            <span className="bottom-banner">
              <p className="learn-code">
                <span role="img" aria-label="wave-emoji" className="wave">
                  👋
                </span>{" "}
                I've been learning to <br /> code for: {DaysDiff} days
              </p>

              <p className="quote">
                "The most dangerous phrase <br /> in the English language is,{" "}
                <br /> 'We've always done it this way.'" <br />
                -Grace Hopper
              </p>
            </span>
          )
        }
      </MediaQuery>
    </div>
  );
}

export default Learn;
