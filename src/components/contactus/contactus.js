import React, { Component } from 'react';
import './contactus.scss';
import { Col, Row, Button, Form, FormGroup, Label, Input, CustomInput } from 'reactstrap';


class Contactus extends Component{
    state={ 
        errName: "none",
        errEmail: "none",
        errNum: "none",
        errQuery: "none",
        select: "none",
        sucess: "none",
    }
    submit = () => { 
        this.setState({sucess:"none"});
        var pattern = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;   
        var regex = /^[a-zA-Z]*$/;
        var txtName = document.getElementById("txtName");
        var txtEmail = document.getElementById("txtEmail");
        var e = document.getElementById("CustomSelect");
        var strUser = e.options[e.selectedIndex];  
        var txtNumber = document.getElementById("txtNumber"); 
        var txtQurery = document.getElementById("txtQurery");
        var errName= document.getElementById("errName");
        var errEmail= document.getElementById("errEmail");
        var errNum= document.getElementById("errNum");
        var errQuery= document.getElementById("errQuery"); 
        if(txtName.value === ''){
            errName.innerHTML = "Please enter the name";
            this.setState({errName: "block"});
        } 
        if(txtName.value !== ""){  
            if (regex.test(txtName.value)==true) { 
                this.setState({errName: "none"}); 
            } 
            if(regex.test(txtName.value)==false){ 
                errName.innerHTML = "Please enter only letters ";
                this.setState({errName: "block"});     
            }
        }
        if(txtEmail.value ==="" ){
            errEmail.innerHTML = "Please enter the email";
            this.setState({errEmail: "block"});
        }
        if(txtEmail.value !== ""){  
            if(pattern.test(txtEmail.value)== true){ 
                this.setState({errEmail: "none"});
            }
            if(pattern.test(txtEmail.value)== false){
                errEmail.innerHTML = "Please enter the Email corretly.";
                this.setState({errEmail: "block"}); 
            }
        }
        if(txtNumber.value ===""){
            errNum.innerHTML = "Please enter the number";
            this.setState({errNum: "block"});
        }
        if(txtNumber.value !== "") { 
            if(isNaN(txtNumber.value))
            {
                errNum.innerHTML = "Please enter only numbers";
                this.setState({errNum: "block"});
            return false;
            }
           else if((txtNumber.value.length != 10))
            {
                errNum.innerHTML = "Please enter the 10 digit mobile number";
                this.setState({errNum: "block"});
            return false;
            }
            else{this.setState({errNum: "none"});}
        }
        if(txtQurery.value===""){
            errQuery.innerHTML = "Please enter the message box";
            this.setState({errQuery: "block"});
        }
        
        if(txtQurery.value !== ""){ 
            this.setState({errQuery: "none"});
        }
        if(strUser.value ==0){
            errName.innerHTML = "Please select the drop down box";
            this.setState({select:"block"});
        }
        if(strUser.value !=0){ 
            this.setState({select:"none"});
        }
        if(regex.test(txtName.value)==true && (pattern.test(txtEmail.value)== true) && txtQurery.value.length >= 5 && txtEmail.value !== "" && txtNumber.value !== "" && txtNumber.value.length == 10 && txtQurery.value !=="" && strUser.value !=0){
            this.setState({sucess:"block"});
            txtName.value="";
            txtEmail.value="";
            txtNumber.value="";
            txtQurery.value="";
            e.selectedIndex = 0;
        }
    }
    render(){
        return(
            <div className='ContactUs' ID="ContactUs" ref={(div) => { this.ContactUs = div; }}>
            <h3 className='display-5 my-5 cntheader'>Contact Us</h3> 
            <Form>
               <Row form className="contact--form">
                   <Col md={6}>
                       <FormGroup>
                       <Input type="text" name="Name" id="txtName" placeholder="Name"  className='cntinput txtname--height' style={{}} />
                       </FormGroup>
                   </Col>
                   <Col md={6}>
                       <FormGroup>
                       <Input type="email" name="Email" id="txtEmail" placeholder="Email" style={{backgroundColor: '#f0f0f0', height:'56px'}} />
                       </FormGroup>
                   </Col>
               </Row>
               <Row form>
                   <Col md={6}>
                       <FormGroup>
                       <Input type="text" name="phoneNum" id="txtNumber" placeholder="Phone Number" style={{backgroundColor: '#f0f0f0', height:'56px'}} />
                       </FormGroup>
                   </Col>
                   <Col md={6}>
                        <FormGroup>
                        <Label for="CustomSelect" hidden>Custom Select</Label>
                        <CustomInput type="select" id="CustomSelect" name="customSelect" style={{backgroundColor: '#f0f0f0', height:'56px'}} className="borede--none" >
                            <option value="0" className="selectoption">Select</option>
                            <option value='1'>World Class Property Company</option>
                            <option>TIER REIT</option>
                            <option>CalSTRS</option>
                            <option>Dell, Inc.</option>
                            <option>Brandywine Realty Trust</option>
                            <option>Accesso Partners</option>
                            <option>DRA Advisors</option>
                            <option>Equity Commonwealth</option>
                            <option>Cousins Properties</option>
                            <option> Intercontinental Real Estate</option>
                        </CustomInput>
                        </FormGroup>
                    </Col>
               </Row>
               <FormGroup>  
                <Input className='cnt_inp' type="textarea" name="text" id="txtQurery" placeholder='Message' style={{backgroundColor: '#f0f0f0', height:'166px'  }} />    
               </FormGroup>
               <p className='contact__errmsg' id="errName" style={{display:this.state.errName}}>please enter the name</p>
               <p className='contact__errmsg' id="errEmail" style={{display:this.state.errEmail}}>please enter the email</p>
               <p className='contact__errmsg' id="errNum" style={{display:this.state.errNum}}>please enter the phone number </p>
               <p className='contact__errmsg' id="errQuery" style={{display:this.state.errQuery}}>please enter the message</p>
               <p className='contact__errmsg' id="errDropDown" style={{display:this.state.select}}>please select the dropdown list</p>
               <p className='contact__sucessmsg' style={{display:this.state.sucess}}>Thank you for showing interset.</p>
               <Button className='sendButton sndbtn' color='#003681' onClick={this.submit}>SEND IT</Button>
            </Form>
       </div>
        );
    }
}

export default Contactus;