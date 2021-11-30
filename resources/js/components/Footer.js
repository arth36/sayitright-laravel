import linkedin from './images/linkedin.png';
import twitter from './images/twitter.png';
import instagram from './images/instagram.png';
import github from './images/github.png';
import facebook from './images/facebook.png';

const Footer = () => {
    return (
        <footer>
            <div className="footerdiv">
                <div className="logo footercontent">
                    <h6>
                        <a className="logoa footerlogo" href="homepage.html">sayItRight</a>
                    </h6>
                </div>
                <div className="footercontent">
                    <p className="footercr"><b>© '21 sayItRight</b></p>
                </div>
                <div className="followusdiv">
                    <p className="footerp">follow us on: </p>
                    <div>
                        <a href="https://www.linkedin.com/"><img className="linkedin followimage" src={linkedin}/></a>
                        <a href="https://www.twitter.com/"><img className="twitter followimage" src={twitter}/></a>
                        <a href="https://www.instagram.com/"><img className="github followimage" src={instagram}/></a>
                        <a href="https://www.github.com/"><img className="twitter followimage" src={github}/></a>
                        <a href="https://www.facebook.com/"><img className="facebook followimage" src={facebook}/></a>
                    </div>
                </div>
            </div>
        </footer>
    );
}
 
export default Footer;