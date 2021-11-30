import loginpageimage from './images/loginpageimage.jpg';
import role from './images/role.png';
import student from './images/student.png';
import faculty from './images/faculty.png';
import advisor from './images/advisor.png';
import admin from './images/admin.png';
import user from './images/user.png';
import password from './images/password.png';
import view from './images/view.png';
import React, { useState, useRef } from "react";
import { Component } from 'react/cjs/react.production.min';
import axios from 'axios';
import LocalStorage from './api/LocalStorage';
import Header from './Header';
import Footer from './Footer';

class Login extends Component{
    constructor(props) {
        super(props);
        this.state = {
            email: "",
            password: "",
            redirect: false
        };
    }
    handleAdd= async e =>{
        await this.setState({
            [e.target.name] : e.target.value,
        })
        console.log(this.state.email)
    }
    handleSubmit = () =>{
        let payload = {
            email:this.state.email,
            password:this.state.password
        }
        const url = "http://127.0.0.1:8000/api/login";
        axios.post(url, payload, {
            headers: {
                'Content-Type': 'application/json',
                'Access-Control-Allow-Origin': '*'
            },
            }).then(res=>{
            console.log("inside then",res.data);
                if(res.data.status == '200'){
                    console.log('Login successfull');
                    LocalStorage.setItem("user", JSON.stringify(res.data)).then(fulfilled => {    
                        console.log('local storage setup done');
                        LocalStorage.getItem('user').then(user=>{
                            if(user.user.role==='Admin'){
                                this.props.history.push('/myprofileadmin')
                            }else if(user.user.role==='Student'){
                                this.props.history.push('/myprofilestudent')
                            }else if(user.user.role==='Professor'){
                                this.props.history.push('/myprofileprofessor')
                            }else if(user.user.role==='Advisor'){
                                this.props.history.push('/myprofileadvisor')
                            }
                            console.log(user.user.role);
                        }).catch();
                        
                    })
                    this.setState({redirect: true});
                }else{
                    alert('login failed');
                    console.log('login failed')
                }
        }).catch(err=> console.log("inside catch",err));
    }

    render() {
        return (
            <div>
                <Header></Header>
                <div className="loginbelowheader">
                    <div className="leftdiv">
                        <img className="loginscreenimage" src={loginpageimage}/>
                    </div>
                    <div className="loginformdiv">
                        <div>
                            <div>
                                <div className="labeldiv">
                                    <img src={user}/>
                                    <label className="formlabel">email id/username: </label>
                                </div>
                                <div className="logininputdiv">
                                    <input className="logininput" type="email" name="email" onChange={this.handleAdd} required/>
                                </div>
                            </div>
                            <div>
                                <div className="labeldiv">
                                    <img src={password}/>
                                    <label className="formlabel">password: </label>
                                </div>
                                <div className="logininputdiv">
                                    <input className="logininput" type="password" name="password" onChange={this.handleAdd} required/>
                                </div>
                            </div>    
                            <div className="loginbuttondiv">
                                <button className="loginbutton" id="login_button" type="login" onClick={this.handleSubmit}>
                                    login now!
                                </button>
                            </div>
                            <div className="newaccdiv">
                                <p className="cnapara">
                                    <a className="newacca" href="/signup">
                                        Create a new account ?
                                    </a>
                                </p>
                            </div>
                        </div>                
                    </div>
                </div>
                <Footer></Footer>
            </div>
        );
    }
}
export default Login;