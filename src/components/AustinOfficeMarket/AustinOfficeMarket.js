import React, { Component } from 'react';
import './AustinOfficeMarket.scss';
import AustinOfficeContent from './AustinOfficeMarketContent';
import UpArrowImage from '../../assets/images/Group13.png';
import DownArrowImage from '../../assets/images/Group11.png';

export default class AustinOfficeMarket extends Component {
    state={
        Arrowimg1: UpArrowImage,
        text1: "Vacancy",
        number1: '10.2%',
        Arrowimg2: DownArrowImage,
        text2: "Under Construction",
        number2: '4,445,358 SF',
        text3: "Deliveries",
        number3: '580,487 SF',
        text4: "Net Absorption",
        number4: '575,927 SF',
        text5: "Avg. Asking Rate",
        number5: '$35.49 PSF',
    }
  render() {
    return (
      <div className="container pding--0px" id="austinOfficeMarket" >
            <h3 className="AOM__heading">Austin Office Market</h3>
            <div className="row AOM--pdng">
                <div className="col-md-4">
                    <AustinOfficeContent Arrowimg={this.state.Arrowimg1} text={this.state.text1} number={this.state.number1} />
                    <AustinOfficeContent Arrowimg={this.state.Arrowimg2} text={this.state.text2} number={this.state.number2} />
                    <AustinOfficeContent Arrowimg={this.state.Arrowimg2} text={this.state.text3} number={this.state.number3} />
                    <AustinOfficeContent Arrowimg={this.state.Arrowimg2} text={this.state.text4} number={this.state.number4} />
                    <AustinOfficeContent Arrowimg={this.state.Arrowimg1} text={this.state.text5} number={this.state.number5} />
                    <p className="AOM__cbre"><span className="AOM__source">Source: </span>CBRE Research, Q3 2018</p>
                </div>
                <div className="col-md-8 mob--pdg0px">
                    <p className="AOM__downWith">
                        Down with vacancy and up with absorption in Q3 2018
                    </p>
                    <p className="AOM__absorption">
                    Absorption levels in the Austin Office Market rebounded in Q3 2018 from a relatively flat first
                    half of the year, cresting 575,000 sq. ft of positive space demand during the quarter. With 
                    vacancy steadily floating around the 10.0% mark and asking rates near historic highs, developers
                    continue to read positively into Austin’s position during the late expansion stage of the market 
                    cycle.
                    </p>
                    <button className="AOM__findmore"> Find out more</button>
                </div>
            </div>
      </div>
    )
  }
}
