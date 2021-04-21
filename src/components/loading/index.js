import React, { Component } from "react";
import Logo from '../logo';

require("./style.scss");

export default class Loading extends Component {

  getLoadingText(text) {
    return text ? 
      <div className="loading-text">{text}</div> : null;
  }
    
  render() {
    const { text } = this.props;
    
    return (
      <div className="loading">
        <div><Logo size="large"/></div>                
        {this.getLoadingText(text)}
      </div>
    );
  }
};
