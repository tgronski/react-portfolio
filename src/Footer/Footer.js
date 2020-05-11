import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingBag } from "@fortawesome/free-solid-svg-icons";
import {
  faLinkedinIn,
  faGithub,
  faDev,
  faCodepen
} from "@fortawesome/free-brands-svg-icons";
import "./Footer.css";

function Footer() {
  return (
    <footer>
      <section className="corner">
        <ul className="socialIcons">
          <li className="social">
            <a
              href="https://tailorandchief.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FontAwesomeIcon icon={faShoppingBag} />
            </a>
          </li>
          <li className="social">
            <a
              href="https://www.linkedin.com/in/therese-tess-gronski/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FontAwesomeIcon icon={faLinkedinIn} />
            </a>
          </li>
          <li className="social">
            <a
              href="https://github.com/tcgronk"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FontAwesomeIcon icon={faGithub} />
            </a>
          </li>
          <li className="social">
            <a
              href="https://dev.to/tcgronk"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FontAwesomeIcon icon={faDev} />
            </a>
          </li>
          <li className="social">
            <a
              href="https://codepen.io/tcgronk"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FontAwesomeIcon icon={faCodepen} />
            </a>
          </li>
        </ul>
      </section>
    </footer>
  );
}

export default Footer;
