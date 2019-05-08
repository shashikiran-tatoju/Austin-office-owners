import React,{Component} from 'react';
import '../assets/css/header.scss'; 
import Navbar from './header/Navbar';
import HeaderBoxContent from './header/headerBoxContent';

class Header extends Component {
    state={
        text1: "#1",
        text2: "City for Job Seekers",
        text3: "- NerdWallet 12/19/16",
        text4: "0%",
        text5: "State and Local Income Tax", 
        text6:"#3",
        text7: "City Creating the Most Tech Jobs in 2017",
        text8: "- Forbes 3/17/17",  
        text9: "U.S. City for Millennials",
        text10: "- Nestpick 4/19/17"
    }
    render(){
        return(
            <div className="maincontainer" id="homePage"   >
                <div className="maincontainer__content">
                    <Navbar whyAustin={this.props.whyAustin} austinOfficeMarket={this.props.austinOfficeMarket} 
                    topOfficeOwners={this.props.topOfficeOwners} austinLandscap={this.props.austinLandscap}/>
                    <p className="maincontainer__AT">Austin, Texas is the</p>
                    <p className="maincontainer__BTL">#1 Best Place to Live</p>
                    <p className="maincontainer__USNews">- U.S. News 2/7/17</p>
                </div>
                <div className="container pding--0px mob--width">
                    <div className="row mrg--tp">
                    <div className="col-md-3 bgClr--col1 pdg--all">
                        <HeaderBoxContent text1={this.state.text1} text2={this.state.text2}
                         text3={this.state.text3}>
                        </HeaderBoxContent>
                    </div>
                    <div className="col-md-3 bgClr--col2 pdg--all">
                        <HeaderBoxContent text1={this.state.text4} text2={this.state.text5}>
                         </HeaderBoxContent>
                    </div>
                    <div className="col-md-3 bgClr--col3 pdg--all">
                        <HeaderBoxContent text1={this.state.text6} text2={this.state.text7}
                            text3={this.state.text8} >
                        </HeaderBoxContent>
                    </div>
                    <div className="col-md-3 bgClr--col4 pdg--all">
                        <HeaderBoxContent text1={this.state.text1} text2={this.state.text9}
                            text3={this.state.text10}>
                        </HeaderBoxContent>
                    </div>
                    </div>
                </div>
            </div>
        )
    }
}
export default Header;