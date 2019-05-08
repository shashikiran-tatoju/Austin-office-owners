import React, { Component } from 'react';
import './TopOfficeOwner.scss'; 
import WorlClass from '../../assets/images/wcpc.png';
import Tier from '../../assets/images/tier.png';
import Calstrs from '../../assets/images/calstrs.png';
import Dell from '../../assets/images/dell.png';
import BrandWine from '../../assets/images/brandWine.png';
import Accesso from '../../assets/images/accesso.png';
import Dra from '../../assets/images/dra.png';
import Equity from '../../assets/images/equity.png';
import Cousins from '../../assets/images/cousins.png';
import Intercontinental from '../../assets/images/intercontinental.png';

export default class TopOfficeOwner extends Component {
    state={
        TOOCIMG1:WorlClass,
        text1: "1 - World Class Property Company",
        TOOCIMG2: Tier,
        text2: "2 - TIER REIT",
        TOOCIMG3: Calstrs, 
        text3: "3  -  CalSTRS", 
        TOOCIMG4: Dell,
        text4: "4  -  Dell, Inc.", 
        TOOCIMG5: BrandWine,
        text5: "5  -  Brandywine Realty Trust", 
        TOOCIMG6: Accesso,
        text6: "6  -  Accesso Partners", 
        TOOCIMG7: Dra,
        text7: "7  -  DRA Advisors", 
        TOOCIMG8: Equity,
        text8: "8  -  Equity Commonwealth", 
        TOOCIMG9: Cousins,
        text9: "9  -  Cousins Properties", 
        TOOCIMG10: Intercontinental,
        text10: "10  -  Intercontinental Real Estate"
    }

  render() {   
    return (
      <div className="TopOfficeOwner" id="austinLargestOfficeOwner"  >
        <h3 className="TopOfficeOwner__heading">Austin's Largest Office Owners</h3>
        <div className="container clr--white padng--0px">
          <div className="row">
              <div className="col-md-5 pdg--cntr">
              <p className="TopOfficeOwnerContent__text1 display--none">{this.state.text1}</p>
                  <img className="TopOfficeOwnerContent__image" src={this.state.TOOCIMG1}/>       
              </div>
              <div className="col-md-7 pdg--top">
                  <p className="TopOfficeOwnerContent__text1 display--block">{this.state.text1}</p>
                  <p className="TopOfficeOwnerContent__text2">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris </p> 
                  <button className="TopOfficeOwnerContent__button" onClick={this.props.ALOOP1} >get in touch</button>
              </div>
          </div>
          <div className="row">
            <div className="col-md-5 pdg--cntr">
              <p className="TopOfficeOwnerContent__text1 display--none">{this.state.text2}</p>
                <img className="TopOfficeOwnerContent__image" src={this.state.TOOCIMG2}/>       
            </div>
            <div className="col-md-7 pdg--top">
                <p className="TopOfficeOwnerContent__text1 display--block">{this.state.text2}</p>
                <p className="TopOfficeOwnerContent__text2">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris </p> 
                <button className="TopOfficeOwnerContent__button"  onClick={this.props.ALOOP2} >get in touch</button>
            </div>
          </div>
          <div className="row">
            <div className="col-md-5 pdg--cntr">
              <p className="TopOfficeOwnerContent__text1 display--none">{this.state.text3}</p>
                <img className="TopOfficeOwnerContent__image" src={this.state.TOOCIMG3}/>       
            </div>
            <div className="col-md-7 pdg--top">
                <p className="TopOfficeOwnerContent__text1 display--block">{this.state.text3}</p>
                <p className="TopOfficeOwnerContent__text2">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris </p> 
                <button className="TopOfficeOwnerContent__button"  onClick={this.props.ALOOP3} >get in touch</button>
            </div>
          </div>
          <div className="row">
            <div className="col-md-5 pdg--cntr">
              <p className="TopOfficeOwnerContent__text1 display--none">{this.state.text4}</p>
                <img className="TopOfficeOwnerContent__image" src={this.state.TOOCIMG4}/>       
            </div>
            <div className="col-md-7 pdg--top">
                <p className="TopOfficeOwnerContent__text1 display--block">{this.state.text4}</p>
                <p className="TopOfficeOwnerContent__text2">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris </p> 
                <button className="TopOfficeOwnerContent__button" onClick={this.props.ALOOP4} >get in touch</button>
            </div>
          </div>
          <div className="row">
            <div className="col-md-5 pdg--cntr">
              <p className="TopOfficeOwnerContent__text1 display--none">{this.state.text5}</p>
                <img className="TopOfficeOwnerContent__image" src={this.state.TOOCIMG5}/>       
            </div>
            <div className="col-md-7 pdg--top">
                <p className="TopOfficeOwnerContent__text1 display--block">{this.state.text5}</p>
                <p className="TopOfficeOwnerContent__text2">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris </p> 
                <button className="TopOfficeOwnerContent__button" onClick={this.props.ALOOP5} >get in touch</button>
            </div>
          </div>
          <div className="row">
            <div className="col-md-5 pdg--cntr">
            <p className="TopOfficeOwnerContent__text1 display--none">{this.state.text6}</p>
                <img className="TopOfficeOwnerContent__image" src={this.state.TOOCIMG6}/>       
            </div>
            <div className="col-md-7 pdg--top">
                <p className="TopOfficeOwnerContent__text1 display--block">{this.state.text6}</p>
                <p className="TopOfficeOwnerContent__text2">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris </p> 
                <button className="TopOfficeOwnerContent__button" onClick={this.props.ALOOP6} >get in touch</button>
            </div>
          </div>
          <div className="row">
            <div className="col-md-5 pdg--cntr">
              <p className="TopOfficeOwnerContent__text1 display--none">{this.state.text7}</p>
                <img className="TopOfficeOwnerContent__image" src={this.state.TOOCIMG7}/>       
            </div>
            <div className="col-md-7 pdg--top">
                <p className="TopOfficeOwnerContent__text1 display--block">{this.state.text7}</p>
                <p className="TopOfficeOwnerContent__text2">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris </p> 
                <button className="TopOfficeOwnerContent__button" onClick={this.props.ALOOP7}>get in touch</button>
            </div>
          </div>
          <div className="row">
            <div className="col-md-5 pdg--cntr">
              <p className="TopOfficeOwnerContent__text1 display--none">{this.state.text8}</p>
                <img className="TopOfficeOwnerContent__image" src={this.state.TOOCIMG8}/>       
            </div>
            <div className="col-md-7 pdg--top">
                <p className="TopOfficeOwnerContent__text1 display--block">{this.state.text8}</p>
                <p className="TopOfficeOwnerContent__text2">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris </p> 
                <button className="TopOfficeOwnerContent__button" onClick={this.props.ALOOP8}>get in touch</button>
            </div>
          </div>
          <div className="row">
            <div className="col-md-5 pdg--cntr">
              <p className="TopOfficeOwnerContent__text1 display--none">{this.state.text9}</p>
                <img className="TopOfficeOwnerContent__image" src={this.state.TOOCIMG9}/>       
            </div>
            <div className="col-md-7 pdg--top">
                <p className="TopOfficeOwnerContent__text1 display--block">{this.state.text9}</p>
                <p className="TopOfficeOwnerContent__text2">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris </p> 
                <button className="TopOfficeOwnerContent__button" onClick={this.props.ALOOP9}>get in touch</button>
            </div>
          </div>
          <div className="row pading--bottom">
            <div className="col-md-5 pdg--cntr">
              <p className="TopOfficeOwnerContent__text1 display--none">{this.state.text10}</p>
                <img className="TopOfficeOwnerContent__image" src={this.state.TOOCIMG10}/>       
            </div>
            <div className="col-md-7 pdg--top">
                <p className="TopOfficeOwnerContent__text1 display--block">{this.state.text10}</p>
                <p className="TopOfficeOwnerContent__text2">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris </p> 
                <button className="TopOfficeOwnerContent__button" onClick={this.props.ALOOP10}>get in touch</button>
            </div>
          </div>
      </div>
      </div>
    )
  }
}
