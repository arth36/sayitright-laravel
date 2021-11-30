import call from './images/call.png';
import Header from './Header';
import Footer from './Footer';
import { Component } from 'react/cjs/react.production.min';
import axios from 'axios';
class Contactus extends Component{
    constructor(props) {
        super(props);
        this.state = {
            email: "",
            fname: "",
            lname: "",
            reason: "",
            phone: "",
            redirect: false
        };
    }
    handleAdd= async e =>{
        await this.setState({
            [e.target.name] : e.target.value,
        })
        console.log(this.state.email)
    }
    handleSubmitData = () =>{
        let payload = {
            email:this.state.email,
            fname:this.state.fname,
            lname:this.state.lname,
            phone:this.state.phone,
            reason:this.state.reason,
        }
        const url = "http://localhost/sayitright-backend/contact-us.php";
        axios.post(url, payload, {
            headers: {
                'Content-Type': 'application/json',
                'Access-Control-Allow-Origin': '*'
            },
            }).then(res=>{
                alert('sent successfully');
                console.log('sent successfull');
        }).catch(err=> console.log("inside catch",err));
    }
    render(){
        return (
            <div>
                <Header></Header>
                <div class="contactusdiv">
                    <div class="innercontactusdiv">
                        <div className="contactusform">
                            <div className="formcontactus">
                                <div className="callusdiv">
                                    <img className="callimg" src={call}/>
                                    <p className="callusp">call us on: +1 999-999-9999</p>
                                </div>
                                <div className="contactusordiv">
                                    <hr className="contactusfirsthr"/>
                                    <p className="orp">or</p>
                                    <hr className="contactussecondhr"/>
                                </div>
                                <div>
                                    <div className="contactusformdivs">
                                        <div className="contactuslabeldiv">
                                            <label className="contactuslabel">first name: </label>
                                        </div>
                                        <div className="contactinputdiv">
                                            <input className="contactusinput" type="text" name="fname" onChange={this.handleAdd} required/>
                                        </div>
                                    </div>
                                    <div className="contactusformdivs">
                                        <div className="contactuslabeldiv">
                                            <label className="contactuslabel">last name: </label>
                                        </div>
                                        <div className="contactinputdiv">
                                            <input className="contactusinput" type="text" name="lname" onChange={this.handleAdd} required/>
                                        </div>
                                    </div>
                                    <div className="contactusformdivs">
                                        <div className="contactuslabeldiv">
                                            <label className="contactuslabel">email id: </label>
                                        </div>
                                        <div className="contactinputdiv">
                                            <input className="contactusinput" type="email" name="email" onChange={this.handleAdd} required/>
                                        </div>
                                    </div>
                                    <div className="contactusformdivs">
                                        <div className="contactuslabeldiv">
                                            <label className="contactuslabel">phone #: </label>
                                        </div>
                                        <div className="contactinputdiv">
                                            <input className="contactusinput" type="number" size="10" name="phone" onChange={this.handleAdd} required/>
                                        </div>
                                    </div>
                                    <div className="contactusformdivs">
                                        <div className="contactuslabeldiv">
                                            <label className="contactuslabel">reason for contact: </label>
                                        </div>
                                        <div className="contactinputdiv">
                                            <textarea className="contactusinput" type="text" rows="4" cols="50" name="reason" onChange={this.handleAdd} required></textarea>
                                        </div>
                                    </div>
                                    <div>
                                        <button className="loginbutton contactusbutton" onClick={this.handleSubmitData}>Submit</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <Footer></Footer>
            </div>
        );
    }
}
 
export default Contactus;