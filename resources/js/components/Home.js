import homesliderfirst from './images/homesliderfirst.jpg';
import homeslidersecond from './images/homeslidersecond.jpg';
import homesliderthird from './images/homesliderthird.jpg';
import homesliderfourth from './images/homesliderfourth.jpg';
import homesliderfifth from './images/homesliderfifth.jpg';
import homeslidersixth from './images/homeslidersixth.jpg';
import test1 from './images/test1.jpg';
import test2 from './images/test2.jpg';
import test3 from './images/test3.jpg';
import team1 from './images/team1.jpg';
import team2 from './images/team2.jpg';
import team3 from './images/team3.jpg';
import team4 from './images/team4.jpg';
import team5 from './images/team5.jpg';
import Header from './Header';
import Footer from './Footer';

const Home = () => {
    return (
        <div>
            <Header></Header>
            <div className="homepagecontainer">            
                <div id="slider">
                    <figure id="slidy">
                        <img src={homesliderfirst} />
                        <img src={homeslidersecond} />
                        <img src={homesliderthird} />
                        <img src={homesliderfourth}  />
                        <img src={homesliderfifth} />
                        <img src={homeslidersixth} />
                    </figure>
                </div>    
                <div class="homepagebelowslider">
                    <p className="testheading">Testimonials</p>
                    <div className="homepagetestimony">
                        <img className="testimage" src={test1}/>
                        <div>
                            <h2 className="testname">Carly Jones</h2>
                            <p className="testcontent">“My managing courses and classes has become easy with the help of SayItRight. I got Continuous
                                support from the professors through this medium and that is the reason I have been excelling in my
                                studies. My experience with UTA has turned into a journey I never thought would be made so easy
                                by SayItRight, and I could not be more thankful.”</p>
                        </div>
                    </div>
                    <div className="homepagetestimony">
                        <img className="testimage" src={test2}/>
                        <div>
                            <h2 className="testname">Mecenziie Haoche</h2>
                            <p className="testcontent">“As a professor, every year I get to meet a lot of students belonging to different countries and
                                culture, and it is important for me to pronounce their names correctly. Now, whenever I am
                                confused about a student’s name pronunciation, I just visit the website and it gives me the sound of
                                the name in the students own voice making it a piece of cake for me.“</p>
                        </div>
                    </div>
                    <div className="homepagetestimony">
                        <img className="testimage" src={test3}/>
                        <div>
                            <h2 className="testname">Smith Louis</h2>
                            <p className="testcontent">“SayItRight made scheduling for classes and courses easy. It allows me to manage my every school work with such great efficiency. The most exciting feature is the name recording, I can upload the pronounciation and hence not facing any issues in correcting my name sound when talking to professor. Also, I loved how professor can post an announcement so that if one have missed the lecture can see the important announcements made. Totally, satisfied with the website“</p>
                        </div>
                    </div>
                </div>
                <div className="homepagebelowslider">
                    <p className="testheading">Our Team</p>
                    <div className="teamdiv">
                        <div className="homepageabovefooterfirst">
                            <img className="teamimage" src={team1}/>
                            <h3 className="teamname">Nicky Abraham</h3>
                            <h5 className="teamcontent">Executive Advisor</h5>
                        </div>
                        <div className="homepageabovefootersecond">
                            <img className="teamimage" src={team2}/>
                            <h3 className="teamname">Mike Hussey</h3>
                            <h5 className="teamcontent">Vice President</h5>
                        </div>
                        <div className="homepageabovefooterthird">
                            <img className="teamimage" src={team3}/>
                            <h3 className="teamname">Robert Patricia</h3>
                            <h5 className="teamcontent">CEO and President</h5>
                        </div>
                        <div className="homepageabovefooterthird">
                            <img className="teamimage" src={team4}/>
                            <h3 className="teamname">James Marry</h3>
                            <h5 className="teamcontent">Chief Advisor</h5>
                        </div>
                        <div className="homepageabovefooterthird">
                            <img className="teamimage" src={team5}/>
                            <h3 className="teamname">Jennifer Aniston</h3>
                            <h5 className="teamcontent">Technical Head</h5>
                        </div>
                    </div>
                </div>
            </div>
            <Footer></Footer>
        </div>
    );
}
 
export default Home;