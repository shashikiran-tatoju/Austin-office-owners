import React,{Component }  from 'react';
import ReactDOM from 'react-dom';
import BannerContent from './BannerContent.js';
import WhyAustin from '../components/whyaustin/whyaustin.js';
import 'bootstrap/dist/css/bootstrap.min.css';
import TopOfficeOwner from './TopOfficeOwner/TopOfficeOwner';
import AustinLAndscape from './austinlandscape/austinland';
import ContactUs from './contactus/contactus';
import Footer from './footer/footer';
import AustinOfficeMaket from './AustinOfficeMarket/AustinOfficeMarket';
import scrollToComponent from 'react-scroll-to-component';
import '../assets/css/mediaQueries.scss';
import '../assets/css/mediaQueriesTablet.scss';

class Main extends Component {
    componentDidMount() {  
        var homePage= document.getElementById("homePage");
        scrollToComponent(homePage, {align: 'top', duration: 1000, ease:'inExpo'});
      }
       
    whyAustin = () => {
        var whyAustin=document.getElementById("WHYD")
        scrollToComponent(whyAustin, {align: 'top', duration: 1000, ease:'inExpo'});
    }
    austinOfficeMarket = () => {
        var austinOfficeMarket=document.getElementById("austinOfficeMarket")
        scrollToComponent(austinOfficeMarket, {align: 'top', duration: 500, ease:'inExpo'});
    }
    topOfficeOwners = () => {
        var austinLargestOfficeOwner=document.getElementById("austinLargestOfficeOwner")
        scrollToComponent(austinLargestOfficeOwner, {align: 'top', duration: 500, ease:'inExpo'});
    }
    austinLandscap = () => {
        var austinLand=document.getElementById("austinLand")
        scrollToComponent(austinLand, {align: 'top', duration: 500, ease:'inExpo'});
    }
    ALOOP1= () => {
        var ContactUs=document.getElementById("ContactUs");
        scrollToComponent(ContactUs, {align: 'top', duration: 500, ease:'inExpo'});
        var mySelect = document.getElementById('CustomSelect');
        for(var i, j = 1; i = mySelect.options[j]; j++) { 
            mySelect.selectedIndex = j;
           break; 
            }
    }
    ALOOP2= () => {
        var ContactUs=document.getElementById("ContactUs")
        scrollToComponent(ContactUs, {align: 'top', duration: 500, ease:'inExpo'});
        var mySelect = document.getElementById('CustomSelect');
        for(var i, j = 2; i = mySelect.options[j]; j++) { 
            mySelect.selectedIndex = j;
           break; 
}
    }
    ALOOP3= () => {
        var ContactUs=document.getElementById("ContactUs")
        scrollToComponent(ContactUs, {align: 'top', duration: 500, ease:'inExpo'});
        var mySelect = document.getElementById('CustomSelect');
        for(var i, j = 3; i = mySelect.options[j]; j++) { 
            mySelect.selectedIndex = j;
           break; 
}
    }
    ALOOP4= () => {
        var ContactUs=document.getElementById("ContactUs")
        scrollToComponent(ContactUs, {align: 'top', duration: 500, ease:'inExpo'});
        var mySelect = document.getElementById('CustomSelect');
        for(var i, j = 4; i = mySelect.options[j]; j++) { 
            mySelect.selectedIndex = j;
           break; 
}
    }
    ALOOP5= () => {
        var ContactUs=document.getElementById("ContactUs")
        scrollToComponent(ContactUs, {align: 'top', duration: 500, ease:'inExpo'});
        var mySelect = document.getElementById('CustomSelect');
        for(var i, j = 5; i = mySelect.options[j]; j++) { 
            mySelect.selectedIndex = j;
           break; 
}
    }
    ALOOP6= () => {
        var ContactUs=document.getElementById("ContactUs")
        scrollToComponent(ContactUs, {align: 'top', duration: 500, ease:'inExpo'});
        var mySelect = document.getElementById('CustomSelect');
        for(var i, j = 6; i = mySelect.options[j]; j++) { 
            mySelect.selectedIndex = j;
           break; 
}
    }
    ALOOP7= () => {
        var ContactUs=document.getElementById("ContactUs")
        scrollToComponent(ContactUs, {align: 'top', duration: 500, ease:'inExpo'});
        var mySelect = document.getElementById('CustomSelect');
        for(var i, j = 7; i = mySelect.options[j]; j++) { 
            mySelect.selectedIndex = j;
           break; 
}
    }
    ALOOP8= () => {
        var ContactUs=document.getElementById("ContactUs")
        scrollToComponent(ContactUs, {align: 'top', duration: 500, ease:'inExpo'});
        var mySelect = document.getElementById('CustomSelect');
        for(var i, j = 8; i = mySelect.options[j]; j++) { 
            mySelect.selectedIndex = j;
           break; 
}
    }
    ALOOP9= () => {
        var ContactUs=document.getElementById("ContactUs")
        scrollToComponent(ContactUs, {align: 'top', duration: 500, ease:'inExpo'});
        var mySelect = document.getElementById('CustomSelect');
        for(var i, j = 9; i = mySelect.options[j]; j++) { 
            mySelect.selectedIndex = j;
           break; 
}
    }
    ALOOP10= () => {
        var ContactUs=document.getElementById("ContactUs")
        scrollToComponent(ContactUs, {align: 'top', duration: 500, ease:'inExpo'});
        var mySelect = document.getElementById('CustomSelect');
        for(var i, j = 10; i = mySelect.options[j]; j++) { 
                     mySelect.selectedIndex = j;
                    break; 
        }
    }
    
    render(){
        return(
            <div >
                <BannerContent whyAustin={this.whyAustin} austinOfficeMarket={this.austinOfficeMarket}
                topOfficeOwners={this.topOfficeOwners} austinLandscap={this.austinLandscap} />
                <WhyAustin/> 
                <AustinOfficeMaket />
                <TopOfficeOwner ALOOP1={this.ALOOP1} ALOOP2={this.ALOOP2} ALOOP3={this.ALOOP3} ALOOP4={this.ALOOP4} 
                ALOOP5={this.ALOOP5} ALOOP6={this.ALOOP6} ALOOP7={this.ALOOP7} ALOOP8={this.ALOOP8} 
                ALOOP9={this.ALOOP9} ALOOP10={this.ALOOP10}  />
                <AustinLAndscape />
                <ContactUs />
                <Footer />
            </div>
        )
    }
}
export default Main;