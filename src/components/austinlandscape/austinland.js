import React, { Component } from 'react';
import './austinland.scss';
import map from '../../assets/images/map@3x.png';
import { Button } from 'reactstrap';


class Austinland extends Component{  
    render(){
        return(
           <div id="austinLand"  >
                    <div className="container austinland">
                            <div className="col-md-6 pdg--0px ">
                                <h3 className="austinland__header" >Austin Landscape </h3> 
                            </div>
                    </div>
                            <img src={map} alt='carlos' className='img-fluid austinland__img' />
                            
                        <div className="container">
                            <div className="row mapimg">
                                <div className="col-md-6 austinlandpstin">
                                        <ul className="austinlandpstin__ul"> 
                                            <li className="ulli"><span className="austinland__limedium-green">1</span>Most Diverse | <span className="austinlandpstin__listnormalfont">Central/ West Central</span></li>
                                            <li className="ulli"><span className="austinland__green-blue">2</span>Young Families/ Young Professionals | <span className="austinlandpstin__listnormalfont">Downtown</span></li>
                                            <li className="ulli"><span className="austinland__earth">3</span>Working Professionals | <span className="austinlandpstin__listnormalfont">North</span></li>
                                            <li className="ulli"><span className="austinland__blueberry">4</span>Shopping | <span className="austinlandpstin__listnormalfont">North Central</span></li>
                                            <li className="ulli"><span className="austinland__azul">5</span>Outdoor Enthusiasts | <span className="austinlandpstin__listnormalfont">Northwest</span></li>
                                            <li className="ulli"><span className="austinland__yelloworange">6</span>Students | <span className="austinlandpstin__listnormalfont">Northeast</span></li>
                                            <li className="ulli"><span className="austinland__barney">7</span>Music Enthusiasts/ Hippies | <span className="austinlandpstin__listnormalfont">South</span></li>
                                        </ul>
                                 </div>
                                   <div className="col-md-6 austinlandpstin">
                                        <ul className="austinlandpstin__ul">
                                            <li className="ulli"><span className="austinland__dusk">8</span>Affordable Homes | <span className="austinlandpstin__listnormalfont">Southeast</span></li>
                                            <li className="ulli"><span className="austinland__mediumpink">9</span>Older People | <span className="austinlandpstin__listnormalfont">Southwest</span></li>
                                            <li className="ulli padding--10px"><span className="austinland__orangish span--pdg">10</span>Award Winning Schools |<span className="austinlandpstin__listnormalfont"> Westlake Hills</span></li>
                                            <li className="ulli padding--10px"><span className="austinland__coral span--pdg">11</span>Business Owners | <span className="austinlandpstin__listnormalfont"> East</span></li>
                                            <li className="ulli padding--10px"><span className="austinland__purple span--pdg">12</span>New Homebuyers | <span className="austinlandpstin__listnormalfont">East Central</span></li>
                                            <li className="ulli padding--10px"><span className="austinland__purlishgrey span--pdg">13</span>Luxury Homes | <span className="austinlandpstin__listnormalfont"> West</span></li>      
                                        </ul>
                                 </div>
                            </div>
                        </div>
                       <div>
                 </div>
                 <div className="btngrp">
                          <div className="container btncnt">
                                <Button className='btnlnk' style={{backgroundColor: '#001834'}}>Austin Office</Button>{' '}
                                <Button className='btnlnk' style={{backgroundColor: '#001834'}}>Austin Office Space</Button>{' '}
                                <Button className='btnlnk'style={{backgroundColor: '#001834'}}>Austin Office Rent</Button>{' '}
                                <Button className='btnlnk' style={{backgroundColor: '#001834'}}>Austin Office Lease</Button>{' '}
                                <Button className='btnlnk'style={{backgroundColor: '#001834'}}>Austin Office for Lease</Button>{' '}
                                <Button className='btnlnk'style={{backgroundColor: '#001834'}}>Austin Office Owners</Button>{' '}
                                <Button className='btnlnk'style={{backgroundColor: '#001834'}}>Texas Office</Button>{' '}
                                <Button className='btnlnk'style={{backgroundColor: '#001834'}}>Texas Office for lease</Button>{' '}
                                <Button className='btnlnk'style={{backgroundColor: '#001834'}}>Texas Office Owners</Button>{' '}
                                <Button className='btnlnk'style={{backgroundColor: '#001834'}}>Office Space Austin</Button>{' '}
                                <Button className='btnlnk'style={{backgroundColor: '#001834'}}> Co-working Austin</Button>{' '}
                                <Button className='btnlnk'style={{backgroundColor: '#001834'}}>WeWork Austin</Button>{' '}
                                <Button className='btnlnk'style={{backgroundColor: '#001834'}}>World Class Property Company Austin</Button>{' '}
                                <Button className='btnlnk'style={{backgroundColor: '#001834'}}>Nate Paul Austin</Button>{' '}
                                <Button className='btnlnk'style={{backgroundColor: '#001834'}}>World Class Austin</Button>{' '}  
                          </div>                             
                    </div>
             </div>


                
            

        );
    }
}

export default Austinland;