import React,{Component} from 'react';
import './whyaustin.scss';
import carlos from '../../assets/images/carlos.png';
import Whyaustincontent from './whyaustincontent';
import peopleImg from '../../assets/images/Group 807.png';



class Whyaustin extends Component{
    state={
        peopleImg: peopleImg
    }
    render(){
        return( 
            <div className="whyContainer" id="WHYD">
                 
                <div className="container pding--0px ">
                    <div className="row WA--pdg">
                        <h3 className="whyaustin_header">Why Austin</h3> 
                    </div>
                    <div className='row whypdg--btm'>
                        <div className='col-md-7 col-sm-6 pding--0px '>
                            <img src={carlos} alt='carlos' className='img-fluid' />
                        </div>
                        <div className='col-md-5 col-sm-6'>
                          <div className="row whycont ">
                              <div className="col-md-4 col-sm-4 mobileView__bgwidth"> 
                                  <div className="BOFIcon"></div>
                              </div>
                            <div className="col-md-8 col-sm-8 mobileView__txtWidth">
                                    <h5 className="whyAustin__subheader">153 “BEST OF LISTS”</h5>
                                    <p className="whyAustin__headerpara">Through 2016 and 2017, Austin made at least 153 “Best of lists”</p>
                            </div>
                            </div>
                            <div className="row whycont ">
                              <div className="col-md-4 col-sm-4 mobileView__bgwidth"> 
                                  <div className="GRIcon"></div>
                              </div>
                            <div className="col-md-8 col-sm-8 mobileView__txtWidth">
                                    <h5 className="whyAustin__subheader" >35.7% GROWTH RATE</h5>
                                    <p className="whyAustin__headerpara">Austin had a 35.7% growth rate from 2010 to 2016 - the highest in the nation</p>
                            </div>
                            </div>

                            <div className="row whycont">
                              <div className="col-md-4 col-sm-4 mobileView__bgwidth"> 
                                  <div className="EGIcon"></div>
                              </div>
                            <div className="col-md-8 col-sm-8 mobileView__txtWidth">
                                    <h5 className="whyAustin__subheader">1.9% ECONOMIC GROWTH RATE</h5>
                                    <p className="whyAustin__headerpara">From 2016 to 2017, Austin’s economy grew faster than any city in the U.S</p>
                            </div>
                            </div>
                            <div className="row whycont">
                              <div className="col-md-4 col-sm-4 mobileView__bgwidth"> 
                                  <div className="URIcon"></div>
                              </div>
                            <div className="col-md-8 col-sm-8 mobileView__txtWidth">
                                    <h5 className="whyAustin__subheader">2.8% UNEMPLOYMENT RATE</h5>
                                    <p className="whyAustin__headerpara">Austin’s unemployment rate is down 1.5% from April 2016</p>
                            </div>
                            </div>
                            <div className="row whycont">
                              <div className="col-md-4 col-sm-4 mobileView__bgwidth"> 
                                  <div className="HEAIcon"></div>
                              </div>
                            <div className="col-lg-8 col-sm-8 mobileView__txtWidth">
                                    <h5 className="whyAustin__subheader">HIGH EDUCATIONAL ATTAINMENT</h5>
                                    <p className="whyAustin__headerpara">88.6% of Austin’s population are High School Graduates or higher, which outpaces the national average of 86.6%</p>
                            </div>
                            </div> 
                        </div>
                    </div>
                </div> 
                <div className="wayAustin__About">
                    <div className='container pding--0px'>
                        <div className="row pding--0px">
                            <div className="col-md-5 pding--0px">
                                <img src={this.state.peopleImg}  alt="People Image" className="groupimg" />
                            </div>
                            <div className="col-md-7 aboutpd--top ">
                                <p className="wayAustin__text">Over 150 people move to Austin, TX every day, making it the fastest growing city in the US. </p>
                                <p className="wayAustin__text">Located in Central Texas Hill Country, Austin, TX is a unique reservoir of arts, education, and eclectic people.</p>
                            </div>
                        </div>
                    </div>
                </div>
                    <Whyaustincontent />
                    <div className="brd--btm"></div>
            </div>
        );
    }
}
export default Whyaustin;