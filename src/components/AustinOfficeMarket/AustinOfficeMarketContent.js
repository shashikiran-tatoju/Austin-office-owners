import React, { Component } from 'react';
import './AustinOfficeMarketContent.scss';

export default class AustinOfficeMarketContent extends Component {
  render() {
    return ( 
          <div className="AOMC ">
            <img className="AOMC__img" src={this.props.Arrowimg} />
            <p className="AMOC__text">{this.props.text}</p>
            <p className="AMOC__number">{this.props.number}</p>
          </div> 
    )
  }
}
