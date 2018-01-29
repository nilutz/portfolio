import React, { Component } from "react";

import UserLinks from "../UserLinks/UserLinks";

import config from "../../../data/SiteConfig";
import "./Footer.scss";

class Footer extends Component {
  render() {
    const copyright = config.copyright;
    if (!copyright) {
      return null;
    }
    return (
      <footer className="footer">
        <UserLinks config={config} />
        <div className="notice-container">
          <div className="copyright">
            <h4>{copyright}</h4>
          </div>
        </div>
      </footer>
    );
  }
}

export default Footer;
