import { Component } from 'react/cjs/react.production.min';
import axios from 'axios';
import view from './images/view.png';
import React, { useState, useRef } from "react";
import LocalStorage from './api/LocalStorage';
import Header from './Header';
import Footer from './Footer';
class Signup extends Component{
    constructor(props) {
        super(props);
        this.state = {
            fname: "",
            lname: "",
            email: "",
            password: "",
            dob: "",
            gender: "",
            role: "",
            redirect: false
        };
    }
    handleAddData= async e =>{
        await this.setState({
            [e.target.name] : e.target.value,
        })
        console.log(this.state);
    }
    handleSubmitData = () =>{
        let payload = {
            fname: this.state.fname,
            lname: this.state.lname,
            email:this.state.email,
            password:this.state.password,
            dob:this.state.dob,
            gender:this.state.gender,
            role:this.state.role,
        }
        console.log(payload);
        const url = "http://127.0.0.1:8000/api/register";
        axios.post(url, payload, {
            headers: {
                'Content-Type': 'application/json',
                'Access-Control-Allow-Origin': '*'
            },
            }).then(res=>{
            console.log("inside then",res.data);
            if(res.data.status == '201'){
                console.log('Signup successfull');
                alert('signup successful, login again');
                this.setState({redirect: true});
            }else{
                console.log('login failed');
            }
        }).catch(err=> console.log("inside catch",err));
    }

    render(){
        return (
            <div>
                <Header></Header>
                <div class="loginbelowheader signupbelowheader">
                    <div class="signupformdiv">      
                        <div class="firstlastnameinput">
                            <input class="signupnameinput signupinputfirst" type="text" placeholder="First Name" name="fname" onChange={this.handleAddData} required/>
                            <input class="signupnameinput" type="text" placeholder="Last Name" name="lname" onChange={this.handleAddData} required/>
                        </div>
                        <div>
                            <input class="signupemailinput signupinput" type="text" placeholder="Email" name="email" onChange={this.handleAddData} required/>
                        </div>
                        <div>
                            <input class="signupemailinput signupinput" type="text" type="password" placeholder="Password" name="password" onChange={this.handleAddData} required/>
                        </div>
                        <div>
                            <input class="signupemailinput signupinput" type="date" id="dob" placeholder="Date of Birth" name="dob" onChange={this.handleAddData} required/>
                        </div>
                        <div class="selectrole signupinputselect">
                            <select onChange={this.handleAddData} name="gender">
                                <option value="1">Choose Gender</option>
                                <option value="Male">Male</option>
                                <option value="Female">Female</option>
                            </select>
                        </div>
                        <div class="selectrole signupinputselect">
                            <select onChange={this.handleAddData} name="role">
                                <option value="1">Choose User Role</option>
                                <option value="Student">Student</option>
                                <option value="Professor">Professor</option>
                                <option value="Advisor">Advisor</option>
                            </select>
                        </div>
                        <button class="signupbutton" type="register" onClick={this.handleSubmitData}>Sign up now!</button>                
                    </div>
                </div>
            <Footer></Footer>
            </div>
        );
    }
}
 
export default Signup;