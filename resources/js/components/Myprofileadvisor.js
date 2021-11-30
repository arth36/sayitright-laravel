import chat from './images/chat.png';
import edit from './images/edit.png';
import sound from './images/sound.png';
import deleteimage from './images/delete.png';
import Header from './Header';
import Footer from './Footer';
import { Component } from 'react/cjs/react.production.min';
import axios from 'axios';
import create from './images/create.png';
import { Card, Col, Row, Table, Button, Modal, Input, Radio, Checkbox } from 'antd';

class Myprofileadvisor extends Component {
    constructor(props) {
        super(props);
        this.state = {
            users:[],
            courses:[],
            students:[],
            adv:[],
            admins:[],
            prof:[],
            recordings:[],
            deleteId: '',
            deleteCourse: '',
            editModal:false,
            editCourseModel:false,
            editedfname: '',
            editedlname: '',
            editedemail: '',
            editedrole: '',
            editedgender: '',
            editeddob: '',
        };
    }
    componentDidMount() {
        this.getData();
        this.getAdminData();
        this.getStudentData();
        this.getProfData();
        this.getAdvisorData();
        this.getDataCourse();
        this.getDataRecordings();
    }

    getData() {
        let payload = {
            page:0,
            limit:5
        }
        const url = "http://127.0.0.1:8000/api/users";
        axios.post(url, payload, {headers: {
            'Content-Type': 'application/json',
            'Access-Control-Allow-Origin': '*'
        },
        }).then((res) => {
            console.log(res);
            if (res) {
                const users = res.data;
                console.log(users);
                this.setState({users});
            } else {
                this.setState({
                    users: [],
                });
            }
        }).catch(function (err) {
            if (err) {
                this.setState({
                    users: [],
                });
            } else {
                this.setState({ loader: false });
            }
            this.setState({
                users: [],
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

    getDataRecordings() {
        let payload = {
            
        }
        const url = "http://127.0.0.1:8000/api/get-student-recordings";
        axios.post(url, payload, {headers: {
            'Content-Type': 'application/json',
            'Access-Control-Allow-Origin': '*'
        },
        }).then((res) => {
            if (res) {
                const recordings = res.data.recordings;
                this.setState({recordings});
            } else {
                this.setState({
                    recordings: [],
                });
            }
        }).catch(function (err) {
            if (err) {
                this.setState({
                    recordings: [],
                });
            } else {
                this.setState({ loader: false });
            }
            this.setState({
                recordings: [],
            });
        });
    }

    createCourse(){
        let course= this.state.course;
        let coursesection= this.state.coursesection;
        let courseprof= this.state.courseprof;

        let payload = {
            course:course,
            coursesection: coursesection,
            courseprof: courseprof
        }
        console.log(payload);
        const url = "http://127.0.0.1:8000/api/create-course";
        axios.post(url, payload, {headers: {
            'Content-Type': 'application/json',
            'Access-Control-Allow-Origin': '*'
        },
        }).then((res) => {
            console.log('updated');
            this.state.createModal=false;
            this.getDataCourse();
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
                    <td>{course.id}</td>
                    <td>{course.course}</td>
                    <td>{course.coursesection}</td>
                    <td>{course.courseprof}</td>
                    <td className="tdclass" data-label="Action">
                        <img style={{marginRight:"10px"}} src={edit} onClick={() => this.setState({editCourseModel:true, id:course.id, course:course.course ,coursesection:course.coursesection ,courseprof:course.courseprof})}/>
                        <img src={deleteimage} onClick={() => this.setState({deleteCourse:course.coursesection},()=>this.deleteSelectedCourse())}/>
                    </td>
                </tr>
            )
        })
    }

    renderRecordingData(){
        console.log('hi');
        return this.state.recordings.map(recording => {
            let url='https://sayitright1112.s3.amazonaws.com/'+recording.recording_url;
            console.log(url);
            return (
                <tr key={recording.id}>
                    <td>{recording.student_name}</td>
                    <td>{recording.student_email}</td>
                    <td className="tdclass" data-label="Recording"><a href={url}><img src={sound}/></a></td>
                    <td className="tdclass" data-label="Language">E</td>
                    <td className="tdclass" data-label="Action">
                        <img src={deleteimage} onClick={() => this.setState({deleteId:recording.email},()=>this.deleteUser())} />
                    </td>
                </tr>
            )
        })
    }

    renderData = () => {
        return this.state.users.map(user => {
            return (
                <tr key={user.email}>
                    <td>{user.email}</td>
                    <td>{user.fname}</td>
                    <td>{user.lname}</td>
                    <td>{user.dob}</td>
                    <td>{user.gender}</td>
                    <td>{user.role}</td>
                    <td className="tdclass" data-label="Action">
                        <img style={{marginRight:"10px"}} src={edit} onClick={() => this.setState({editModal:true, email:user.email, email:user.email, fname:user.fname ,lname:user.lname ,dob:user.dob ,role:user.role ,gender:user.gender})}/>
                        <img src={deleteimage} onClick={() => this.setState({deleteId:user.email},()=>this.deleteUser())} />
                    </td>
                </tr>
            )
        })
    }

    handleInput = (e) =>{
        this.setState({[e.target.name]:e.target.value})
        console.log(this.state);
    }

    handleCourseInput = (e) =>{
        this.setState({[e.target.name]:e.target.value})
        console.log(this.state);
    }

    editCourse(){
        let course= this.state.course;
        let coursesection= this.state.coursesection;
        let courseprof= this.state.courseprof;

        let payload = {
            course:course,
            coursesection: coursesection,
            courseprof: courseprof
        }
        console.log(payload);
        const url = "http://127.0.0.1:8000/api/edit-course";
        axios.post(url, payload, {headers: {
            'Content-Type': 'application/json',
            'Access-Control-Allow-Origin': '*'
        },
        }).then((res) => {
            console.log('updated');
            this.state.editCourseModel=false;
            this.getDataCourse();
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

    editUser(){
        let useremail= this.state.email;
        let fname= this.state.fname;
        let lname= this.state.lname;
        let gender = this.state.gender;
        let role = this.state.role;
        let dob = this.state.dob;

        console.log(useremail);
        let payload = {
            email:useremail,
            fname: fname,
            lname: lname,
            gender: gender,
            role: role,
            dob: dob
        }
        const url = "http://127.0.0.1:8000/api/edit-user";
        axios.post(url, payload, {headers: {
            'Content-Type': 'application/json',
            'Access-Control-Allow-Origin': '*'
        },
        }).then((res) => {
            console.log('updated');
            this.state.editModal=false;
            this.getData();
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
        //console.log(user);
    }

    deleteUser(){
        let useremail= this.state.deleteId;
        console.log(useremail);
        let payload = {
            email:useremail
        }
        const url = "http://127.0.0.1:8000/api/delete-user";
        axios.post(url, payload, {headers: {
            'Content-Type': 'application/json',
            'Access-Control-Allow-Origin': '*'
        },
        }).then((res) => {
            console.log('deleted');
            this.getData();
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
        //console.log(user);
    }

    deleteSelectedCourse(){
        console.log(this.state.deleteCourse);
        let coursesection= this.state.deleteCourse;
        console.log(coursesection);
        let payload = {
            coursesection:coursesection
        }
        console.log(payload);
        const url = "http://127.0.0.1:8000/api/delete-course";
        axios.post(url, payload, {headers: {
            'Content-Type': 'application/json',
            'Access-Control-Allow-Origin': '*'
        },
        }).then((res) => {
            console.log('deleted');
            this.getDataCourse();
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

    handleEditModel(){
        this.setState({editModal:false})
    }


    deleteCourse(){
        console.log('hey');
    }

    renderAdvData = () => {
        return this.state.adv.map(user => {
            return (
                <tr key={user.email}>
                    <td>{user.email}</td>
                    <td>{user.fname}</td>
                    <td>{user.lname}</td>
                    <td>{user.dob}</td>
                    <td>{user.gender}</td>
                    <td>{user.role}</td>
                    <td className="tdclass" data-label="Action">
                        <img style={{marginRight:"10px"}} src={edit} onClick={() => this.setState({editModal:true, email:user.email, email:user.email, fname:user.fname ,lname:user.lname ,dob:user.dob ,role:user.role ,gender:user.gender})}/>
                        <img src={deleteimage} onClick={() => this.setState({deleteId:user.email},()=>this.deleteUser())} />
                    </td>
                </tr>
            )
        })
    }

    renderProfData = () => {
        return this.state.prof.map(user => {
            return (
                <tr key={user.email}>
                    <td>{user.email}</td>
                    <td>{user.fname}</td>
                    <td>{user.lname}</td>
                    <td>{user.dob}</td>
                    <td>{user.gender}</td>
                    <td>{user.role}</td>
                    <td className="tdclass" data-label="Action">
                        <img style={{marginRight:"10px"}} src={edit} onClick={() => this.setState({editModal:true, email:user.email, email:user.email, fname:user.fname ,lname:user.lname ,dob:user.dob ,role:user.role ,gender:user.gender})}/>
                        <img src={deleteimage} onClick={() => this.setState({deleteId:user.email},()=>this.deleteUser())} />
                    </td>
                </tr>
            )
        })
    }

    renderStudentData = () => {
        return this.state.students.map(user => {
            return (
                <tr key={user.email}>
                    <td>{user.email}</td>
                    <td>{user.fname}</td>
                    <td>{user.lname}</td>
                    <td>{user.dob}</td>
                    <td>{user.gender}</td>
                    <td>{user.role}</td>
                    <td className="tdclass" data-label="Action">
                        <img style={{marginRight:"10px"}} src={edit} onClick={() => this.setState({editModal:true, email:user.email, email:user.email, fname:user.fname ,lname:user.lname ,dob:user.dob ,role:user.role ,gender:user.gender})}/>
                        <img src={deleteimage} onClick={() => this.setState({deleteId:user.email},()=>this.deleteUser())} />
                    </td>
                </tr>
            )
        })
    }

    renderAdminData = () => {
        return this.state.admins.map(user => {
            return (
                <tr key={user.email}>
                    <td>{user.email}</td>
                    <td>{user.fname}</td>
                    <td>{user.lname}</td>
                    <td>{user.dob}</td>
                    <td>{user.gender}</td>
                    <td>{user.role}</td>
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
                                    <th scope="col">Email</th>
                                    <th scope="col">First Name</th>
                                    <th scope="col">Last Name</th>
                                    <th scope="col">Phone</th>
                                    <th scope="col">Gender</th>
                                    <th scope="col">Role</th>
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
                                    <th scope="col">Email</th>
                                    <th scope="col">First Name</th>
                                    <th scope="col">Last Name</th>
                                    <th scope="col">Phone</th>
                                    <th scope="col">Gender</th>
                                    <th scope="col">Role</th>
                                    <th scope="col">Action</th>
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
                                    <th scope="col">Email</th>
                                    <th scope="col">First Name</th>
                                    <th scope="col">Last Name</th>
                                    <th scope="col">Phone</th>
                                    <th scope="col">Gender</th>
                                    <th scope="col">Role</th>
                                    <th scope="col">Action</th>
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
                                    <th scope="col">Email</th>
                                    <th scope="col">First Name</th>
                                    <th scope="col">Last Name</th>
                                    <th scope="col">Phone</th>
                                    <th scope="col">Gender</th>
                                    <th scope="col">Role</th>
                                    <th scope="col">Action</th>
                                </tr>
                            </thead>
                            <tbody>
                            {this.renderStudentData()}
                            </tbody>
                        </table>
                    </div>
                    <div class="managestudenttable">
                    <table>
                        <caption class="tcaption">Manage Courses <img src={create} onClick={() => this.setState({createModal:true})} /></caption>
                        
                        <thead>
                            <tr>
                                <th>#</th>
                                <th scope="col">Course</th>
                                <th scope="col">SECTION</th>
                                <th scope="col">Professor</th>
                                <th scope="col">Action</th>
                            </tr>
                        </thead>                    
                        <tbody>

                        {this.renderDataCourses()}
                            
                        </tbody>
                    </table>
                    </div>
                    <div className="managestudenttable">
                        <table>
                            <caption class="tcaption">Student Recordings </caption>
                            <thead>
                                <tr>
                                    <th>#</th>
                                    <th scope="col">Name</th>
                                    <th scope="col">Recording</th>
                                    <th scope="col">Language</th>
                                    <th scope="col">Action</th>
                                </tr>
                            </thead>
                            <tbody>
                                {this.renderRecordingData()}
                            </tbody>
                        </table>
                    </div>
                </div>

                <Modal title="Delete Course Model" visible={this.state.editCourseModel} onOk={() => this.editCourse()} onCancel={() => this.editCourse()}>
                    <p className="model-text">Are you sure you want to Approve this User Suggestion ?</p>
                    <Input 
                        className=" form-contorl addmodalform"
                        value={this.state.course}
                        name="course"
                        onChange={(e)=>this.handleCourseInput(e)}
                        placeholder="Course Name">
                    </Input>
                    <Input 
                        className=" form-contorl addmodalform"
                        value={this.state.coursesection}
                        name="coursesection"
                        onChange={(e)=>this.handleCourseInput(e)}
                        placeholder="Course section">
                    </Input>
                    <Input 
                        className=" form-contorl addmodalform"
                        value={this.state.courseprof}
                        name="courseprof"
                        onChange={(e)=>this.handleCourseInput(e)}
                        placeholder="Course Professor">
                    </Input>
                </Modal>

                <Modal title="Delete Model" visible={this.state.editModal} onOk={() => this.editUser()} onCancel={() => this.editUser()}>
                    <p className="model-text">Are you sure you want to Approve this User Suggestion ?</p>
                    <Input 
                        className=" form-contorl addmodalform"
                        value={this.state.email}
                        name="email"
                        onChange={(e)=>this.handleInput(e)}
                        placeholder="Email">
                    </Input>
                    <Input 
                        className=" form-contorl addmodalform"
                        value={this.state.fname}
                        name="fname"
                        onChange={(e)=>this.handleInput(e)}
                        placeholder="First name">
                    </Input>
                    <Input 
                        className=" form-contorl addmodalform"
                        value={this.state.lname}
                        name="lname"
                        onChange={(e)=>this.handleInput(e)}
                        placeholder="Last name">
                    </Input>
                    <Input 
                        className=" form-contorl addmodalform"
                        value={this.state.dob}
                        name="dob"
                        onChange={(e)=>this.handleInput(e)}
                        placeholder="Date of birth">
                    </Input>
                    <Input 
                        className=" form-contorl addmodalform"
                        value={this.state.gender}
                        name="gender"
                        onChange={(e)=>this.handleInput(e)}
                        placeholder="Gender">
                    </Input>
                    <Input 
                        className=" form-contorl addmodalform"
                        value={this.state.role}
                        name="role"
                        onChange={(e)=>this.handleInput(e)}
                        placeholder="Role">
                    </Input>
                </Modal>

                <Modal title="Create Course Model" visible={this.state.createModal} onOk={() => this.createCourse()} onCancel={() => this.createCourse()}>
                    <p className="model-text">Are you sure you want to Approve this User Suggestion ?</p>
                    <Input 
                        className=" form-contorl addmodalform"
                        value={this.state.course}
                        name="course"
                        onChange={(e)=>this.handleCourseInput(e)}
                        placeholder="Course Name">
                    </Input>
                    <Input 
                        className=" form-contorl addmodalform"
                        value={this.state.coursesection}
                        name="coursesection"
                        onChange={(e)=>this.handleCourseInput(e)}
                        placeholder="Course section">
                    </Input>
                    <Input 
                        className=" form-contorl addmodalform"
                        value={this.state.courseprof}
                        name="courseprof"
                        onChange={(e)=>this.handleCourseInput(e)}
                        placeholder="Course Professor">
                    </Input>
                </Modal>
                <Footer></Footer>
            </div>
        );
    }
}
 
export default Myprofileadvisor;