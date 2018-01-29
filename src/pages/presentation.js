import React, { Component } from "react";
import Script from "react-load-script";

var __html = require("../../static/ownNLP.slides.html");
var template = { __html: __html };

class Presentation extends React.Component {
  handleScriptCreate() {
    this.setState({ scriptLoaded: false });
  }

  handleScriptError() {
    this.setState({ scriptError: true });
  }

  handleScriptLoad() {
    this.setState({ scriptLoaded: true });
  }
  render() {
    return (
      <div>

        <div dangerouslySetInnerHTML={template} />
      </div>
    );
  }
}

export default Presentation;
