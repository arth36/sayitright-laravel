import { Component } from 'react/cjs/react.production.min';
import chat from './images/chat.png';
import edit from './images/edit.png';
import ReactS3 from 'react-s3';
import Header from './Header';
import Footer from './Footer';
import deleteimage from './images/delete.png';
import LocalStorage from './api/LocalStorage';
import axios from 'axios';
import trues from './images/true.png';

const S3BUCKET_NAME ='sayitright1112';
const REGION_NAME ='us-east-2';
const ACCESS_KEY ='AKIAYBJMEIX3YVZR4KOG';
const SECRET_ACCESS_KEY ='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';

const config = {
    bucketName: S3BUCKET_NAME,
    region: REGION_NAME,
    accessKeyId: ACCESS_KEY,
    secretAccessKey: SECRET_ACCESS_KEY,
}
class Myprofilestudent extends Component {
    constructor(props){
        super(props);
        this.state = {
            user:"",
            courses:[],
            selectedcourses:[],
            students:[],
            adv:[],
            admins:[],
            prof:[],
            email:"",
            name:"",
            homework:"",
            selectedcourse:"",
            selectedcoursesection:"",
            selectedcourseprof:"",
            deleteSelectedCourse:""
        };
    }
    componentDidMount(){
        this.getAdminData();
        this.getStudentData();
        this.getProfData();
        this.getAdvisorData();
        this.getDataCourse();
        LocalStorage.getItem('user').then(user=>{
            if(user){
                this.setState({user:user.user.fname + " " + user.user.lname});
                this.setState({email:user.user.email});
                console.log(this.state.user);
                console.log(this.state.email);
                this.getSelectedDataCourse();
            }else{
                console.log(this.props.history);
                //this.props.history.push("/login");
            }
        }).catch();
        
    }
    upload(e){


        LocalStorage.getItem('user').then(user=>{
            if(user){



                ReactS3.uploadFile( e.target.files[0] , config)
                .then((data)=> {
                    console.log(data);
                    console.log(e.target.files[0].name);
                    let payload = {
                        student_name: user.user.fname + " " + user.user.lname,
                        student_email: user.user.email,
                        recording_url: e.target.files[0].name
                    }
                    console.log(payload);
                    const url = "http://127.0.0.1:8000/api/create-student-recording";
                    axios.post(url, payload, {headers: {
                        'Content-Type': 'application/json',
                        'Access-Control-Allow-Origin': '*'
                    },
                    }).then((res) => {
                        console.log('updated');
                    }).catch(function (err) {
                        console.log('error');
                    });
                })
                .catch( (err)=>{
                    alert(err);
                })



            }else{
                console.log(this.props.history);
                //this.props.history.push("/login");
            }
        }).catch();


        ReactS3.uploadFile( e.target.files[0] , config)
        .then((data)=> {
            console.log(e.target.files[0].name);


            let payload = {
                student_name: this.state.user,
                recording_url: e.target.files[0].name
            }
            console.log(payload);
            const url = "http://127.0.0.1:8000/api/create-student-recording";
            axios.post(url, payload, {headers: {
                'Content-Type': 'application/json',
                'Access-Control-Allow-Origin': '*'
            },
            }).then((res) => {
                console.log('updated');
                
            }).catch(function (err) {
                console.log('error');
            });


        })
        .catch( (err)=>{
            console.log(err);
        })
    }

    uploadhw(){
        console.log(this.state.homework);
        LocalStorage.getItem('user').then(user=>{
            if(user){



                ReactS3.uploadFile( this.state.homework , config)
                .then((data)=> {



                    console.log('data',data.key);
                    let payload = {
                        student_name: user.user.fname + " " + user.user.lname,
                        student_email: user.user.email,
                        homework_url: data.key
                    }
                    console.log(payload);
                    const url = "https://axm9538.uta.cloud/api/create-student-homework.php";
                    axios.post(url, payload, {headers: {
                        'Content-Type': 'application/json',
                        'Access-Control-Allow-Origin': '*'
                    },
                    }).then((res) => {
                        console.log('updated');
                    }).catch(function (err) {
                        console.log('error');
                    });
                })
                .catch( (err)=>{
                    alert(err);
                })



            }else{
                console.log(this.props.history);
                //this.props.history.push("/login");
            }
        }).catch();


        ReactS3.uploadFile( this.state.homework , config)
        .then((data)=> {
            console.log(this.state.homework);


            let payload = {
                student_name: this.state.user,
                homework_url: this.state.homework
            }
            console.log(payload);
            const url = "https://axm9538.uta.cloud/api/create-student-homework.php";
            axios.post(url, payload, {headers: {
                'Content-Type': 'application/json',
                'Access-Control-Allow-Origin': '*'
            },
            }).then((res) => {
                console.log('updated');
                
            }).catch(function (err) {
                console.log('error');
            });


        })
        .catch( (err)=>{
            console.log(err);
        })
    }

    getSelectedDataCourse(){
        let payload = {
            studentemail:this.state.email
        }
        const url = "http://127.0.0.1:8000/api/get-selected-courses";
        axios.post(url, payload, {headers: {
            'Content-Type': 'application/json',
            'Access-Control-Allow-Origin': '*'
        },
        }).then((res) => {
            if (res) {
                console.log(res);
                const selectedcourses = res.data.course;
                this.setState({selectedcourses});
            } else {
                this.setState({
                    selectedcourses: [],
                });
            }
        }).catch(function (err) {
            if (err) {
                this.setState({
                    courses: [],
                });
            } else {
                this.setState({ loader: false });
            }
            this.setState({
                courses: [],
            });
        });
    }

    deleteSelectedCourse(){
        console.log(this.state.deleteSelectedCourse);
        let coursesection= this.state.deleteSelectedCourse;
        console.log(coursesection);
        let payload = {
            coursesection:coursesection,
            studentemail:this.state.email
        }
        console.log(payload);
        const url = "http://127.0.0.1:8000/api/delete-selected-courses";
        axios.post(url, payload, {headers: {
            'Content-Type': 'application/json',
            'Access-Control-Allow-Origin': '*'
        },
        }).then((res) => {
            console.log('deleted');
            this.getSelectedDataCourse();
        }).catch(function (err) {
            if (err) {
                this.setState({
                    courses: [],
                });
            } else {
                this.setState({ loader: false });
            }
            this.setState({
                courses: [],
            });
        });
    }

    getDataCourse() {
        let payload = {
            page:0,
            limit:5
        }
        const url = "http://127.0.0.1:8000/api/courses";
        axios.post(url, payload, {headers: {
            'Content-Type': 'application/json',
            'Access-Control-Allow-Origin': '*'
        },
        }).then((res) => {
            if (res) {
                const courses = res.data.courses;
                this.setState({courses});
            } else {
                this.setState({
                    courses: [],
                });
            }
        }).catch(function (err) {
            if (err) {
                this.setState({
                    courses: [],
                });
            } else {
                this.setState({ loader: false });
            }
            this.setState({
                courses: [],
            });
        });
    }

    renderSelectedDataCourses(){
        return this.state.selectedcourses.map(course => {
            return (
                <tr key={course.id}>
                    <td className="tdclass">{course.id}</td>
                    <td className="tdclass">{course.course}</td>
                    <td className="tdclass">{course.coursesection}</td>
                    <td className="tdclass">{course.courseprof}</td>
                    <td className="tdclass" data-label="Action">
                        <img src={deleteimage} onClick={() => this.setState({deleteSelectedCourse:course.coursesection},()=>this.deleteSelectedCourse())}/>
                    </td>
                </tr>
            )
        })
    }

    selectCourse(){
        let selectedcoursesection= this.state.selectedcoursesection;
        let selectedcourse= this.state.selectedcourse;
        let selectedcourseprof= this.state.selectedcourseprof;
        let email= this.state.email;
        
        let payload = {
            coursesection:selectedcoursesection,
            course:selectedcourse,
            courseprof:selectedcourseprof,
            studentemail:email
        }
        console.log(payload);
        const url = "http://127.0.0.1:8000/api/create-select-course";
        axios.post(url, payload, {headers: {
            'Content-Type': 'application/json',
            'Access-Control-Allow-Origin': '*'
        },
        }).then((res) => {
            console.log('deleted');
            this.getSelectedDataCourse();
            this.renderSelectedDataCourses();
        }).catch(function (err) {
            if (err) {
                this.setState({
                    courses: [],
                });
            } else {
                this.setState({ loader: false });
            }
            this.setState({
                courses: [],
            });
        });
    }

    renderDataCourses = () => {
        return this.state.courses.map(course => {
            return (
                <tr key={course.id}>
                    <td className="tdclass">{course.id}</td>
                    <td className="tdclass">{course.course}</td>
                    <td className="tdclass">{course.coursesection}</td>
                    <td className="tdclass">{course.courseprof}</td>
                    <td className="tdclass" data-label="Action">
                        <img style={{marginRight:"10px"}} onClick={() => this.setState({selectedcourse:course.course, selectedcoursesection:course.coursesection, selectedcourseprof:course.courseprof},()=>this.selectCourse())} src={trues}/>
                    </td>
                </tr>
            )
        })
    }

    renderAdvData = () => {
        return this.state.adv.map(user => {
            return (
                <tr key={user.email}>
                    <td className="tdclass">{user.email}</td>
                    <td className="tdclass">{user.fname}</td>
                    <td className="tdclass">{user.lname}</td>
                    <td className="tdclass">{user.dob}</td>
                    <td className="tdclass">{user.gender}</td>
                    <td className="tdclass">{user.role}</td>
                </tr>
            )
        })
    }

    renderProfData = () => {
        return this.state.prof.map(user => {
            return (
                <tr key={user.email}>
                    <td className="tdclass">{user.email}</td>
                    <td className="tdclass">{user.fname}</td>
                    <td className="tdclass">{user.lname}</td>
                    <td className="tdclass">{user.dob}</td>
                    <td className="tdclass">{user.gender}</td>
                    <td className="tdclass">{user.role}</td>
                </tr>
            )
        })
    }

    renderStudentData = () => {
        return this.state.students.map(user => {
            return (
                <tr key={user.email}>
                    <td className="tdclass">{user.email}</td>
                    <td className="tdclass">{user.fname}</td>
                    <td className="tdclass">{user.lname}</td>
                    <td className="tdclass">{user.dob}</td>
                    <td className="tdclass">{user.gender}</td>
                    <td className="tdclass">{user.role}</td>
                </tr>
            )
        })
    }

    renderAdminData = () => {
        return this.state.admins.map(user => {
            return (
                <tr key={user.email}>
                    <td className="tdclass">{user.email}</td>
                    <td className="tdclass">{user.fname}</td>
                    <td className="tdclass">{user.lname}</td>
                    <td className="tdclass">{user.dob}</td>
                    <td className="tdclass">{user.gender}</td>
                    <td className="tdclass">{user.role}</td>
                </tr>
            )
        })
    }

    getStudentData() {
        let payload = {
        }
        const url = "http://127.0.0.1:8000/api/getstudent";
        axios.post(url, payload, {headers: {
            'Content-Type': 'application/json',
            'Access-Control-Allow-Origin': '*'
        },
        }).then((res) => {
            console.log(res);
            if (res) {
                const students = res.data.user;
                console.log(students);
                this.setState({students});
            } else {
                this.setState({
                    students: [],
                });
            }
        }).catch(function (err) {
            if (err) {
                this.setState({
                    students: [],
                });
            } else {
                this.setState({ loader: false });
            }
            this.setState({
                students: [],
            });
        });
    }

    getAdminData() {
        let payload = {
        }
        const url = "http://127.0.0.1:8000/api/getadmin";
        axios.post(url, payload, {headers: {
            'Content-Type': 'application/json',
            'Access-Control-Allow-Origin': '*'
        },
        }).then((res) => {
            console.log(res);
            if (res) {
                const admins = res.data.user;
                console.log(admins);
                this.setState({admins});
            } else {
                this.setState({
                    admins: [],
                });
            }
        }).catch(function (err) {
            if (err) {
                this.setState({
                    admins: [],
                });
            } else {
                this.setState({ loader: false });
            }
            this.setState({
                admins: [],
            });
        });
    }

    getAdvisorData() {
        let payload = {
        }
        const url = "http://127.0.0.1:8000/api/getadvisor";
        axios.post(url, payload, {headers: {
            'Content-Type': 'application/json',
            'Access-Control-Allow-Origin': '*'
        },
        }).then((res) => {
            console.log(res);
            if (res) {
                const adv = res.data.user;
                console.log(adv);
                this.setState({adv});
            } else {
                this.setState({
                    adv: [],
                });
            }
        }).catch(function (err) {
            if (err) {
                this.setState({
                    adv: [],
                });
            } else {
                this.setState({ loader: false });
            }
            this.setState({
                adv: [],
            });
        });
    }

    getProfData() {
        let payload = {
        }
        const url = "http://127.0.0.1:8000/api/getprof";
        axios.post(url, payload, {headers: {
            'Content-Type': 'application/json',
            'Access-Control-Allow-Origin': '*'
        },
        }).then((res) => {
            console.log(res);
            if (res) {
                const prof = res.data.user;
                console.log(prof);
                this.setState({prof});
            } else {
                this.setState({
                    prof: [],
                });
            }
        }).catch(function (err) {
            if (err) {
                this.setState({
                    prof: [],
                });
            } else {
                this.setState({ loader: false });
            }
            this.setState({
                prof: [],
            });
        });
    }

    render(){
        return (
            <div>
                <Header></Header>
                <div className="myprofilemaindiv">
                    <div className="managestudenttable">
                        <table>
                            <caption>Manage Admins</caption>
                            <thead>
                                <tr>
                                    <th className="thclass" scope="col">Email</th>
                                    <th className="thclass" scope="col">First Name</th>
                                    <th className="thclass" scope="col">Last Name</th>
                                    <th className="thclass" scope="col">Phone</th>
                                    <th className="thclass" scope="col">Gender</th>
                                    <th className="thclass" scope="col">Role</th>
                                </tr>
                            </thead>
                            <tbody>
                            {this.renderAdminData()}
                            </tbody>
                        </table>
                    </div>
                    <div className="managestudenttable">
                        <table>
                            <caption>Manage Advisors</caption>
                            <thead>
                                <tr>
                                    <th className="thclass" scope="col">Email</th>
                                    <th className="thclass" scope="col">First Name</th>
                                    <th className="thclass" scope="col">Last Name</th>
                                    <th className="thclass" scope="col">Phone</th>
                                    <th className="thclass" scope="col">Gender</th>
                                    <th className="thclass" scope="col">Role</th>
                                </tr>
                            </thead>
                            <tbody>
                            {this.renderAdvData()}
                            </tbody>
                        </table>
                    </div>
                    <div className="managestudenttable">
                        <table>
                            <caption>Manage Professors</caption>
                            <thead>
                                <tr>
                                    <th className="thclass" scope="col">Email</th>
                                    <th className="thclass" scope="col">First Name</th>
                                    <th className="thclass" scope="col">Last Name</th>
                                    <th className="thclass" scope="col">Phone</th>
                                    <th className="thclass" scope="col">Gender</th>
                                    <th className="thclass" scope="col">Role</th>
                                </tr>
                            </thead>
                            <tbody>
                            {this.renderProfData()}
                            </tbody>
                        </table>
                    </div>
                    <div className="managestudenttable">
                        <table>
                            <caption>Manage Students</caption>
                            <thead>
                                <tr>
                                    <th className="thclass" scope="col">Email</th>
                                    <th className="thclass" scope="col">First Name</th>
                                    <th className="thclass" scope="col">Last Name</th>
                                    <th className="thclass" scope="col">Phone</th>
                                    <th className="thclass" scope="col">Gender</th>
                                    <th className="thclass" scope="col">Role</th>
                                </tr>
                            </thead>
                            <tbody>
                            {this.renderStudentData()}
                            </tbody>
                        </table>
                    </div>

                    <div className="managestudenttable">
                        <table>
                            <caption class="tcaption">Manage Courses</caption>
                            <thead>
                                <tr>
                                    <th className="thclass">#</th>
                                    <th className="thclass" scope="col">Course</th>
                                    <th className="thclass" scope="col">SECTION</th>
                                    <th className="thclass" scope="col">Professor</th>
                                    <th className="thclass" scope="col">Action</th>
                                </tr>
                            </thead>                    
                            <tbody>
                                {this.renderDataCourses()}    
                            </tbody>
                        </table>
                    </div>
                    
                    <div className="managestudenttable">
                        <table>
                            <caption class="tcaption">Class Schedule</caption>
                            <thead>
                                <tr>
                                    <th className="thclass">#</th>
                                    <th className="thclass" scope="col">Class</th>
                                    <th className="thclass" scope="col">Location</th>
                                    <th className="thclass" scope="col">Time</th>
                                    <th className="thclass" scope="col">Action</th>
                                </tr>
                            </thead>
                            <tbody>
                                {this.renderSelectedDataCourses()}
                            </tbody>
                        </table>
                    </div>
                    <div className="studentprofilepageflex">
                        <div className="managestudentrecording">
                            <p className="profileannouncementp">Manage Recording</p>
                            <div className="announcementcontainer">
                                <div className="button-wrap">
                                    <label className ="recordingbutton" for="upload">Upload Name Recording</label>                            
                                    <input className="namerecordinginput" id="upload" type="file" onChange = {(e) => {
                                                                this.setState({ name: e.target.value });
                                                            },this.upload}/>
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
 
export default Myprofilestudent;