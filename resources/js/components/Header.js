import $ from 'jquery';
import { Link } from 'react-router-dom';
import LocalStorage from './api/LocalStorage';
import React from 'react';
import { Component } from 'react/cjs/react.production.min';

class Header extends Component{
    constructor(props) {
        super(props);
        this.state = {
            user: "",
            redirect: false,
            loggedin: false,
            link:"",
        };
    }

    componentDidMount(){
        LocalStorage.getItem('user').then(user=>{
            if(user){
                this.setState({user:user.user});
                const link = "http://localhost:3002/?name=" + this.state.user.email;
                this.setState({link: link});
            }else{
                console.log(this.props.history);
                //this.props.history.push("/login");
            }
        }).catch();
        LocalStorage.getItem('user').then(token=>{
            console.log('heyyy');
            if(token){
                this.setState({loggedin:true});
            }else{
                this.setState({loggedin:false});
            }
        }).catch();
    }

    logOut(){
        LocalStorage.removeItem('sayitright_token');
        LocalStorage.removeItem('user');
    }

    render() {
    $(document).ready(function(){
        $(".navtoggle").click(function(){
            $("body").toggleClass("opennav");
        });
        $(".nav li a").click(function(){
            var target = $(this).parent().children(".nav li ul");
            $(target).slideToggle();
        });
    });
    return (
        <header className="headerdiv">
            <div className="logo">
                <a className="logoa" href="/">sayItRight</a>
            </div>
            <div className="navtoggle">
                <span>

                </span>
                <span>

                </span>
                <span>
                            
                </span>
            </div>
            <div className="nav">
                <ul>
                    <li>
                        <a href="/">Home</a>
                    </li>
                    <li>
                        <a href="/aboutUs">About us</a>
                    </li>
                    <li>
                        <a href="/services">Services</a>
                    </li>
                    <li>
                        <a href="/contactUs">Contact us</a>
                    </li>
                    <li>
                        <a href={this.state.link}>Chat</a>
                    </li>
                    <li>
                        <a href={'https://blogs.axm9538.uta.cloud/'}>Blogs</a>
                    </li>
                    <li>
                        <a href="#">My profile</a>
                        <ul>
                            {/* <li><a href="/myprofileadmin">Manage Admin</a></li>
                            <li><a href="/myprofilestudent">Manage Student</a></li>
                            <li><a href="/myprofileprof">Manage Professor</a></li>
                            <li><a href="/myprofileadvisor">Manage Advisor</a></li> */}
                            {this.state.user.role==='Admin'?
                                <li><Link to={`/myprofileadmin`}>Manage Admin</Link></li>
                            :""}

                            {this.state.user.role==='Student'?
                                <li><Link to={`/myprofilestudent`}>Manage Student</Link></li>
                            :""}

                            {this.state.user.role==='Professor'?
                                <li><Link to={`/myprofileprof`}>Manage Professor</Link></li>
                            :""}

                            {this.state.user.role==='Advisor'?
                                <li><Link to={`/myprofileadvisor`}>Manage Advisor</Link></li>
                            :""}
                        </ul>
                    </li>
                    <li>
                        {this.state.loggedin===false?
                            <a href="/login">Login</a>
                        :<a href="/logout" onClick={this.logOut}>Logout</a>}
                    </li>
                </ul>
            </div>
        </header>
    );
}
}
 
export default Header;