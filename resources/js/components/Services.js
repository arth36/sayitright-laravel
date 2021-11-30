import homepagefirstimage from './images/homepagefirstimage.jpg';
import homepagesecondimage from './images/homepagesecondimage.jpg';
import homepagethirdimage from './images/homepagethirdimage.jpg';
import homepagefourthimage from './images/homepagefourthimage.jpg';
import Header from './Header';
import Footer from './Footer';

const Services = () => {
    return (
        <div>
            <Header></Header>
            <div className="homepagebelowheader clearfix">
                <div className="homepageoddimagediv homepageimagediv">
                    <img className="homepageimage" src={homepagefirstimage}/>
                    <div>
                        <h2 className="homepageimageh3">Manage Classes</h2>
                        <p className="homepageimagep">The student can manage his/her classes through our website.It allows the student to choose various courses he/she is interested in. The website also has the facility to select professors and lecture timings according to the student's will.</p>
                    </div>
                </div>
                <div className="homepageevenimagediv homepageimagediv">
                    <img className="homepageimage" src={homepagesecondimage}/>
                    <div>
                        <h2 className="homepageimageh3">Record Name</h2>
                        <p className="homepageimagep">A person's name carries his/her identity and cultural meaning with him. Through this website, he/she can record their names sound and upload in their profile, which would help others in articulating it correctly.</p>
                    </div>
                </div>
                <div className="homepageoddimagediv homepageimagediv">
                    <img className="homepageimage" src={homepagethirdimage}/>
                    <div>
                        <h2 className="homepageimageh3">Professor's Profile</h2>
                        <p className="homepageimagep">A professor will be able to add/remove students in his course. He/she will also be able to schedule classes for their respective courses. They will be able to post an announcement which would be visible to all.</p>
                    </div>
                </div>
                <div className="homepageevenimagediv homepageimagediv">
                    <img className="homepageimage" src={homepagefourthimage}/>
                    <div>
                        <h2 className="homepageimageh3">Manage Blogs</h2>
                        <p className="homepageimagep">Students as well as professors will be able to create and manage blogs on the website. Blogs can be related to any topic and will be visible to everyone. Users can also hit a like button to the blogs they like.</p>
                    </div>
                </div>
            </div>
            <Footer></Footer>
        </div>
    );
}
 
export default Services;