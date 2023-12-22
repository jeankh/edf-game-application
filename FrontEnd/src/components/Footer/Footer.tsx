import { FooterProps, useFooter } from "./useFooter";
import React from "react";
import "./Footer.css";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebookF,
  faTwitter,
  faInstagram,
  faLinkedinIn,
} from "@fortawesome/free-brands-svg-icons";

const Footer: React.FC<FooterProps> = (props) => {
  const { currentYear } = useFooter(props);

  return (
    <footer className="myFooter">
      <div className="myFooterDiv">
        <div className="rightReserved">
          &copy; {currentYear} EDF . All Right Reserved
        </div>
        <div className="socialMediaIds">
          <Link to="/">
            <FontAwesomeIcon icon={faFacebookF} />
          </Link>
          <Link to="/">
            <FontAwesomeIcon icon={faTwitter} />
          </Link>
          <Link to="/">
            <FontAwesomeIcon icon={faInstagram} />
          </Link>
          <Link to="/">
            <FontAwesomeIcon icon={faLinkedinIn} />
          </Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
