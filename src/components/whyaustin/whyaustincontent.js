import React, { Component } from 'react';
import './whyaustincontent.scss';
import ArtImage from '../../assets/images/art.png';
import TechImage from '../../assets/images/tech.png';
import eduImage from  '../../assets/images/edu.png';

class Whyaustincontent extends Component{
    state={
        ArtImage: ArtImage,
        TechImage: TechImage,
        eduImage: eduImage
    }
    render(){
        return(
            <div className= 'container pding--0px'>
                <div className='row pdg--5per'>
                    <div className='col-md-7 mob--pdg0px'>
                        <button className="whyAustinContent__btn btn--yellow">Art & Culture</button> 
                        <p className="whyAustinContent__text">Referred to as the Live Music Capital of the World, it’s not hard to walk down any given street on any given night of the week and see a great band playing. </p>
                        <p className="whyAustinContent__text"> Austin also hosts some of the country’s foremost festivals, including SXSW, ACL, and Fun Fun Fun Fest, all of which contribute to the growing amount of talent relocating to the city.</p> 
                    </div>
                    <div className='col-md-5'> 
                        <img src={this.state.ArtImage} alt="art Image" className="whyaustinimg"></img>
                    </div>
                </div>
                <div className='row display--block'>
                    <div className='col-md-5'>
                        <img src={this.state.TechImage} alt="Tech Image" className="whyaustinimg"></img>
                    </div>
                    <div className='col-md-7 mob--pdg0px'> 
                        <button className="whyAustinContent__btn btn--blue">TECH</button> 
                        <p className="whyAustinContent__text">Its business climate enjoys the open policies and low taxes that the rest of Texas has, but it also includes the innovative and hustling nature of the slew of technology startups moving here.</p> 
                        <p className="whyAustinContent__text">‘Silicon Hills’ is quickly becoming a hotbed for entrepreneurial talent. </p>
                    </div> 
                </div>
                <div className='row display--none'>
                <div className='col-md-7 mob--pdg0px'> 
                        <button className="whyAustinContent__btn btn--blue">TECH</button> 
                        <p className="whyAustinContent__text">Its business climate enjoys the open policies and low taxes that the rest of Texas has, but it also includes the innovative and hustling nature of the slew of technology startups moving here.</p> 
                        <p className="whyAustinContent__text">‘Silicon Hills’ is quickly becoming a hotbed for entrepreneurial talent. </p>
                    </div>
                    <div className='col-md-5'>
                        <img src={this.state.TechImage} alt="Tech Image" className="whyaustinimg"></img>
                    </div>
                     
                </div>
                <div className='row pdg--5per'>
                    <div className='col-md-7 mob--pdg0px'>
                        <button className="whyAustinContent__btn btn--red">education</button> 
                        <p className="whyAustinContent__text">At the center of Austin is the University of Texas, which now enrolls over 50,000 students. Saturdays in fall are electric events marked by huge crowds dressed in burnt orange. </p> 
                        <p className="whyAustinContent__text"> The school world renowned, topping national rankings in computer science, accounting, and engineering.<br />Austin is also a unique culinary experience.</p>
                    </div>
                    <div className='col-md-5'> 
                        <img src={this.state.eduImage} alt="edu Iamge" className="whyaustinimg"></img>
                    </div>
                </div>
            </div>
        );
    }
}

export default Whyaustincontent;