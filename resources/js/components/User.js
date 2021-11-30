import React from 'react';
import ReactDOM from 'react-dom';
import '../../css/app.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import '../../css/app.css';
import Home from './Home';
import Aboutus from './Aboutus';
import Services from './Services';
import Contactus from './Contactus';
import Login from './Login';
import Signup from './Signup';
import DefaultLayout from './default-layout';
import Blogs from './Blogs';



function User() {
    return (
        <div className="App">
            <Router>
            <Switch>
            <Route exact path="/" name="Home Page" render={props => <Home {...props} />} />
             <Route exact path="/aboutus" name="About us" render={props => <Aboutus  {...props} />} />
            <Route exact path="/services" name="Services" render={props => <Services  {...props} />} />
            <Route exact path="/contactus" name="Contact us" render={props => <Contactus {...props} />} />
            <Route exact path="/login" name="Login" render={props => <Login {...props} />} />
            <Route exact path="/signup" name="Sign up" render={props => <Signup {...props} />} />
            <Route exact path="/blogs" name="Blogs" render={props => <Blogs {...props} />} />
            <Route path="/" name="Login" render={props => <DefaultLayout {...props} />} />
             

            </Switch>
            </Router>
            
        </div>
    );
}
export default User;
// DOM element
if (document.getElementById('user')) {
    ReactDOM.render(<User />, document.getElementById('user'));
}