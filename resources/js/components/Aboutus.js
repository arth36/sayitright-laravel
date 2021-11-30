import aboutus from './images/aboutus.jpg';
import aboutus2 from './images/aboutus2.jpg';
import aboutus3 from './images/aboutus3.jpg';
import Header from './Header';
import Footer from './Footer';
const Aboutus = () => {
    return (
        <div>
            <Header></Header>
            <div className="aboutusbelowheader">
                <div className="aboutuscontainer">
                    <div className="aboutusfirstpart aboutusodd">
                        <div className="aboutusfirstpartpimg">
                            <img className="aboutusimg" src={aboutus}/>
                        </div>
                        <div className="aboutusfirstpartp">
                            <h2 className="aboutusyear">In the glorious year <span className="yearspan"> 2019,</span></h2>
                            <p className="aboutusp">We started with an innovative idea,<br/> and a small team, which would help many students and faculties
                                overcome the language barrier.</p>
                        </div>
                    </div>
                    <div className="aboutusfirstpart aboutuseven">
                        <div className="aboutusfirstpartpimg">
                            <img className="aboutusimg" src={aboutus2}/>
                        </div>
                        <div className="aboutusfirstpartp">
                            <h2 className="aboutusyear">In the shiny year <span className="yearspan"> 2020,</span></h2>
                            <p className="aboutusp">We published the website,<br/> and few universities supported our idea and joined hands with us in
                                managing their school work.</p>
                        </div>
                    </div>
                    <div className="aboutusfirstpart aboutusodd">
                        <div className="aboutusfirstpartpimg">
                            <img className="aboutusimg" src={aboutus3}/>
                        </div>
                        <div className="aboutusfirstpartp">
                            <h2 className="aboutusyear">In the amazing year <span className="yearspan"> 2021,</span></h2>
                            <p className="aboutusp">More and More universities<br/> joined us and are happy to be a part of our journey.<br/> And, continuing...</p>
                        </div>
                    </div>
                </div>
            </div>
            <Footer></Footer>
        </div>
    );
}
 
export default Aboutus;
