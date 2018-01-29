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
        <Script
          url="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.1.0/css/font-awesome.css"
          onCreate={this.handleScriptCreate.bind(this)}
          onError={this.handleScriptError.bind(this)}
          onLoad={this.handleScriptLoad.bind(this)}
        />
        <Script
          url="https://cdnjs.cloudflare.com/ajax/libs/require.js/2.1.10/require.min.js"
          onCreate={this.handleScriptCreate.bind(this)}
          onError={this.handleScriptError.bind(this)}
          onLoad={this.handleScriptLoad.bind(this)}
        />
        <Script
          url="https://cdnjs.cloudflare.com/ajax/libs/jquery/2.0.3/jquery.min.js"
          onCreate={this.handleScriptCreate.bind(this)}
          onError={this.handleScriptError.bind(this)}
          onLoad={this.handleScriptLoad.bind(this)}
        />
        <Script
          url="https://cdnjs.cloudflare.com/ajax/libs/mathjax/2.7.1/MathJax.js?config=TeX-AMS_HTML"
          onCreate={this.handleScriptCreate.bind(this)}
          onError={this.handleScriptError.bind(this)}
          onLoad={this.handleScriptLoad.bind(this)}
        />

        <div dangerouslySetInnerHTML={template} />
      </div>
    );
  }
}

export default Presentation;
