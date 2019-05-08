import React, { Component } from 'react';
import '../header/HeaderBoxContent.scss';

export default class headerBoxContent extends Component {
  render() {
    return (
        <React.Fragment>
            <p className="col__text col__text1">{this.props.text1}</p>
            <p className="col__text col__text2">{this.props.text2}</p>
            <p className=" col__text col__text3 ">{this.props.text3}</p>
        </React.Fragment>
    )
  }
}
