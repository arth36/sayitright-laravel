"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_js_components_Myprofileprof_js"],{

/***/ "./resources/js/components/Myprofileprof.js":
/*!**************************************************!*\
  !*** ./resources/js/components/Myprofileprof.js ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _images_chat_png__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./images/chat.png */ "./resources/js/components/images/chat.png");
/* harmony import */ var _images_edit_png__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./images/edit.png */ "./resources/js/components/images/edit.png");
/* harmony import */ var _images_sound_png__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./images/sound.png */ "./resources/js/components/images/sound.png");
/* harmony import */ var _images_delete_png__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./images/delete.png */ "./resources/js/components/images/delete.png");
/* harmony import */ var _Header__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./Header */ "./resources/js/components/Header.js");
/* harmony import */ var _Footer__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./Footer */ "./resources/js/components/Footer.js");
/* harmony import */ var react_cjs_react_production_min__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react/cjs/react.production.min */ "./node_modules/react/cjs/react.production.min.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");
function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }












var Myprofileprof = /*#__PURE__*/function (_Component) {
  _inherits(Myprofileprof, _Component);

  var _super = _createSuper(Myprofileprof);

  function Myprofileprof(props) {
    var _this;

    _classCallCheck(this, Myprofileprof);

    _this = _super.call(this, props);

    _defineProperty(_assertThisInitialized(_this), "renderDataCourses", function () {
      return _this.state.courses.map(function (course) {
        return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxs)("tr", {
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)("td", {
            children: course.id
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)("td", {
            children: course.course
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)("td", {
            children: course.coursesection
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)("td", {
            children: course.courseprof
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxs)("td", {
            className: "tdclass",
            "data-label": "Action",
            children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)("img", {
              style: {
                marginRight: "10px"
              },
              src: _images_edit_png__WEBPACK_IMPORTED_MODULE_1__["default"],
              onClick: function onClick() {
                return _this.setState({
                  editCourseModel: true,
                  id: course.id,
                  course: course.course,
                  coursesection: course.coursesection,
                  courseprof: course.courseprof
                });
              }
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)("img", {
              src: _images_delete_png__WEBPACK_IMPORTED_MODULE_3__["default"],
              onClick: function onClick() {
                return _this.setState({
                  deleteCourse: course.coursesection
                }, function () {
                  return _this.deleteSelectedCourse();
                });
              }
            })]
          })]
        }, course.id);
      });
    });

    _defineProperty(_assertThisInitialized(_this), "renderAdvData", function () {
      return _this.state.adv.map(function (user) {
        return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxs)("tr", {
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)("td", {
            children: user.email
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)("td", {
            children: user.fname
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)("td", {
            children: user.lname
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)("td", {
            children: user.dob
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)("td", {
            children: user.gender
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)("td", {
            children: user.role
          })]
        }, user.email);
      });
    });

    _defineProperty(_assertThisInitialized(_this), "renderProfData", function () {
      return _this.state.prof.map(function (user) {
        return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxs)("tr", {
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)("td", {
            children: user.email
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)("td", {
            children: user.fname
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)("td", {
            children: user.lname
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)("td", {
            children: user.dob
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)("td", {
            children: user.gender
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)("td", {
            children: user.role
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxs)("td", {
            className: "tdclass",
            "data-label": "Action",
            children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)("img", {
              style: {
                marginRight: "10px"
              },
              src: _images_edit_png__WEBPACK_IMPORTED_MODULE_1__["default"],
              onClick: function onClick() {
                var _this$setState;

                return _this.setState((_this$setState = {
                  editModal: true,
                  email: user.email
                }, _defineProperty(_this$setState, "email", user.email), _defineProperty(_this$setState, "fname", user.fname), _defineProperty(_this$setState, "lname", user.lname), _defineProperty(_this$setState, "dob", user.dob), _defineProperty(_this$setState, "role", user.role), _defineProperty(_this$setState, "gender", user.gender), _this$setState));
              }
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)("img", {
              src: _images_delete_png__WEBPACK_IMPORTED_MODULE_3__["default"],
              onClick: function onClick() {
                return _this.setState({
                  deleteId: user.email
                }, function () {
                  return _this.deleteUser();
                });
              }
            })]
          })]
        }, user.email);
      });
    });

    _defineProperty(_assertThisInitialized(_this), "renderStudentData", function () {
      return _this.state.students.map(function (user) {
        return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxs)("tr", {
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)("td", {
            children: user.email
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)("td", {
            children: user.fname
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)("td", {
            children: user.lname
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)("td", {
            children: user.dob
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)("td", {
            children: user.gender
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)("td", {
            children: user.role
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxs)("td", {
            className: "tdclass",
            "data-label": "Action",
            children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)("img", {
              style: {
                marginRight: "10px"
              },
              src: _images_edit_png__WEBPACK_IMPORTED_MODULE_1__["default"],
              onClick: function onClick() {
                var _this$setState2;

                return _this.setState((_this$setState2 = {
                  editModal: true,
                  email: user.email
                }, _defineProperty(_this$setState2, "email", user.email), _defineProperty(_this$setState2, "fname", user.fname), _defineProperty(_this$setState2, "lname", user.lname), _defineProperty(_this$setState2, "dob", user.dob), _defineProperty(_this$setState2, "role", user.role), _defineProperty(_this$setState2, "gender", user.gender), _this$setState2));
              }
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)("img", {
              src: _images_delete_png__WEBPACK_IMPORTED_MODULE_3__["default"],
              onClick: function onClick() {
                return _this.setState({
                  deleteId: user.email
                }, function () {
                  return _this.deleteUser();
                });
              }
            })]
          })]
        }, user.email);
      });
    });

    _defineProperty(_assertThisInitialized(_this), "renderAdminData", function () {
      return _this.state.admins.map(function (user) {
        return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxs)("tr", {
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)("td", {
            children: user.email
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)("td", {
            children: user.fname
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)("td", {
            children: user.lname
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)("td", {
            children: user.dob
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)("td", {
            children: user.gender
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)("td", {
            children: user.role
          })]
        }, user.email);
      });
    });

    _defineProperty(_assertThisInitialized(_this), "renderData", function () {
      return _this.state.users.map(function (user) {
        return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxs)("tr", {
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)("td", {
            children: user.email
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)("td", {
            children: user.fname
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)("td", {
            children: user.lname
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)("td", {
            children: user.dob
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)("td", {
            children: user.gender
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)("td", {
            children: user.role
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxs)("td", {
            className: "tdclass",
            "data-label": "Action",
            children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)("img", {
              style: {
                marginRight: "10px"
              },
              src: _images_edit_png__WEBPACK_IMPORTED_MODULE_1__["default"],
              onClick: function onClick() {
                var _this$setState3;

                return _this.setState((_this$setState3 = {
                  editModal: true,
                  email: user.email
                }, _defineProperty(_this$setState3, "email", user.email), _defineProperty(_this$setState3, "fname", user.fname), _defineProperty(_this$setState3, "lname", user.lname), _defineProperty(_this$setState3, "dob", user.dob), _defineProperty(_this$setState3, "role", user.role), _defineProperty(_this$setState3, "gender", user.gender), _this$setState3));
              }
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)("img", {
              src: _images_delete_png__WEBPACK_IMPORTED_MODULE_3__["default"],
              onClick: function onClick() {
                return _this.setState({
                  deleteId: user.email
                }, function () {
                  return _this.deleteUser();
                });
              }
            })]
          })]
        }, user.email);
      });
    });

    _defineProperty(_assertThisInitialized(_this), "handleInput", function (e) {
      _this.setState(_defineProperty({}, e.target.name, e.target.value));

      console.log(_this.state);
    });

    _defineProperty(_assertThisInitialized(_this), "handleCourseInput", function (e) {
      _this.setState(_defineProperty({}, e.target.name, e.target.value));

      console.log(_this.state);
    });

    _this.state = {
      users: [],
      students: [],
      courses: [],
      admins: [],
      recordings: [],
      prof: [],
      adv: [],
      deleteId: '',
      deleteCourse: '',
      editModal: false,
      editCourseModel: false,
      editedfname: '',
      editedlname: '',
      editedemail: '',
      editedrole: '',
      editedgender: '',
      editeddob: ''
    };
    return _this;
  }

  _createClass(Myprofileprof, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      this.getData();
      this.getAdminData();
      this.getStudentData();
      this.getProfData();
      this.getAdvisorData();
      this.getDataCourse();
      this.getDataRecordings();
    }
  }, {
    key: "getData",
    value: function getData() {
      var _this2 = this;

      var payload = {
        page: 0,
        limit: 5
      };
      var url = "http://127.0.0.1:8000/api/users";
      axios__WEBPACK_IMPORTED_MODULE_7___default().post(url, payload, {
        headers: {
          'Content-Type': 'application/json',
          'Access-Control-Allow-Origin': '*'
        }
      }).then(function (res) {
        console.log(res);

        if (res) {
          var users = res.data;
          console.log(users);

          _this2.setState({
            users: users
          });
        } else {
          _this2.setState({
            users: []
          });
        }
      })["catch"](function (err) {
        if (err) {
          this.setState({
            users: []
          });
        } else {
          this.setState({
            loader: false
          });
        }

        this.setState({
          users: []
        });
      });
    }
  }, {
    key: "getStudentData",
    value: function getStudentData() {
      var _this3 = this;

      var payload = {};
      var url = "http://127.0.0.1:8000/api/getstudent";
      axios__WEBPACK_IMPORTED_MODULE_7___default().post(url, payload, {
        headers: {
          'Content-Type': 'application/json',
          'Access-Control-Allow-Origin': '*'
        }
      }).then(function (res) {
        console.log(res);

        if (res) {
          var students = res.data.user;
          console.log(students);

          _this3.setState({
            students: students
          });
        } else {
          _this3.setState({
            students: []
          });
        }
      })["catch"](function (err) {
        if (err) {
          this.setState({
            students: []
          });
        } else {
          this.setState({
            loader: false
          });
        }

        this.setState({
          students: []
        });
      });
    }
  }, {
    key: "getAdminData",
    value: function getAdminData() {
      var _this4 = this;

      var payload = {};
      var url = "http://127.0.0.1:8000/api/getadmin";
      axios__WEBPACK_IMPORTED_MODULE_7___default().post(url, payload, {
        headers: {
          'Content-Type': 'application/json',
          'Access-Control-Allow-Origin': '*'
        }
      }).then(function (res) {
        console.log(res);

        if (res) {
          var admins = res.data.user;
          console.log(admins);

          _this4.setState({
            admins: admins
          });
        } else {
          _this4.setState({
            admins: []
          });
        }
      })["catch"](function (err) {
        if (err) {
          this.setState({
            admins: []
          });
        } else {
          this.setState({
            loader: false
          });
        }

        this.setState({
          admins: []
        });
      });
    }
  }, {
    key: "getAdvisorData",
    value: function getAdvisorData() {
      var _this5 = this;

      var payload = {};
      var url = "http://127.0.0.1:8000/api/getadvisor";
      axios__WEBPACK_IMPORTED_MODULE_7___default().post(url, payload, {
        headers: {
          'Content-Type': 'application/json',
          'Access-Control-Allow-Origin': '*'
        }
      }).then(function (res) {
        console.log(res);

        if (res) {
          var adv = res.data.user;
          console.log(adv);

          _this5.setState({
            adv: adv
          });
        } else {
          _this5.setState({
            adv: []
          });
        }
      })["catch"](function (err) {
        if (err) {
          this.setState({
            adv: []
          });
        } else {
          this.setState({
            loader: false
          });
        }

        this.setState({
          adv: []
        });
      });
    }
  }, {
    key: "getProfData",
    value: function getProfData() {
      var _this6 = this;

      var payload = {};
      var url = "http://127.0.0.1:8000/api/getprof";
      axios__WEBPACK_IMPORTED_MODULE_7___default().post(url, payload, {
        headers: {
          'Content-Type': 'application/json',
          'Access-Control-Allow-Origin': '*'
        }
      }).then(function (res) {
        console.log(res);

        if (res) {
          var prof = res.data.user;
          console.log(prof);

          _this6.setState({
            prof: prof
          });
        } else {
          _this6.setState({
            prof: []
          });
        }
      })["catch"](function (err) {
        if (err) {
          this.setState({
            prof: []
          });
        } else {
          this.setState({
            loader: false
          });
        }

        this.setState({
          prof: []
        });
      });
    }
  }, {
    key: "getDataRecordings",
    value: function getDataRecordings() {
      var _this7 = this;

      var payload = {};
      var url = "http://127.0.0.1:8000/api/get-student-recordings";
      axios__WEBPACK_IMPORTED_MODULE_7___default().post(url, payload, {
        headers: {
          'Content-Type': 'application/json',
          'Access-Control-Allow-Origin': '*'
        }
      }).then(function (res) {
        if (res) {
          var recordings = res.data.recordings;

          _this7.setState({
            recordings: recordings
          });
        } else {
          _this7.setState({
            recordings: []
          });
        }
      })["catch"](function (err) {
        if (err) {
          this.setState({
            recordings: []
          });
        } else {
          this.setState({
            loader: false
          });
        }

        this.setState({
          recordings: []
        });
      });
    }
  }, {
    key: "getDataCourse",
    value: function getDataCourse() {
      var _this8 = this;

      var payload = {
        page: 0,
        limit: 5
      };
      var url = "http://127.0.0.1:8000/api/courses";
      axios__WEBPACK_IMPORTED_MODULE_7___default().post(url, payload, {
        headers: {
          'Content-Type': 'application/json',
          'Access-Control-Allow-Origin': '*'
        }
      }).then(function (res) {
        if (res) {
          var courses = res.data.courses;

          _this8.setState({
            courses: courses
          });
        } else {
          _this8.setState({
            courses: []
          });
        }
      })["catch"](function (err) {
        if (err) {
          this.setState({
            courses: []
          });
        } else {
          this.setState({
            loader: false
          });
        }

        this.setState({
          courses: []
        });
      });
    }
  }, {
    key: "editCourse",
    value: function editCourse() {
      var _this9 = this;

      var course = this.state.course;
      var coursesection = this.state.coursesection;
      var courseprof = this.state.courseprof;
      var payload = {
        course: course,
        coursesection: coursesection,
        courseprof: courseprof
      };
      console.log(payload);
      var url = "http://127.0.0.1:8000/api/edit-course";
      axios__WEBPACK_IMPORTED_MODULE_7___default().post(url, payload, {
        headers: {
          'Content-Type': 'application/json',
          'Access-Control-Allow-Origin': '*'
        }
      }).then(function (res) {
        console.log('updated');
        _this9.state.editCourseModel = false;

        _this9.getDataCourse();
      })["catch"](function (err) {
        if (err) {
          this.setState({
            courses: []
          });
        } else {
          this.setState({
            loader: false
          });
        }

        this.setState({
          courses: []
        });
      });
    }
  }, {
    key: "editUser",
    value: function editUser() {
      var _this10 = this;

      var useremail = this.state.email;
      var fname = this.state.fname;
      var lname = this.state.lname;
      var gender = this.state.gender;
      var role = this.state.role;
      var dob = this.state.dob;
      console.log(useremail);
      var payload = {
        email: useremail,
        fname: fname,
        lname: lname,
        gender: gender,
        role: role,
        dob: dob
      };
      var url = "http://127.0.0.1:8000/api/edit-user";
      axios__WEBPACK_IMPORTED_MODULE_7___default().post(url, payload, {
        headers: {
          'Content-Type': 'application/json',
          'Access-Control-Allow-Origin': '*'
        }
      }).then(function (res) {
        console.log('updated');
        _this10.state.editModal = false;

        _this10.getData();
      })["catch"](function (err) {
        if (err) {
          this.setState({
            courses: []
          });
        } else {
          this.setState({
            loader: false
          });
        }

        this.setState({
          courses: []
        });
      }); //console.log(user);
    }
  }, {
    key: "deleteUser",
    value: function deleteUser() {
      var _this11 = this;

      var useremail = this.state.deleteId;
      console.log(useremail);
      var payload = {
        email: useremail
      };
      var url = "http://127.0.0.1:8000/api/delete-user";
      axios__WEBPACK_IMPORTED_MODULE_7___default().post(url, payload, {
        headers: {
          'Content-Type': 'application/json',
          'Access-Control-Allow-Origin': '*'
        }
      }).then(function (res) {
        console.log('deleted');

        _this11.getData();
      })["catch"](function (err) {
        if (err) {
          this.setState({
            courses: []
          });
        } else {
          this.setState({
            loader: false
          });
        }

        this.setState({
          courses: []
        });
      }); //console.log(user);
    }
  }, {
    key: "renderRecordingData",
    value: function renderRecordingData() {
      var _this12 = this;

      console.log('hi');
      return this.state.recordings.map(function (recording) {
        var url = 'https://sayitright1112.s3.amazonaws.com/' + recording.recording_url;
        console.log(url);
        return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxs)("tr", {
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)("td", {
            children: recording.student_name
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)("td", {
            children: recording.student_email
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)("td", {
            className: "tdclass",
            "data-label": "Recording",
            children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)("a", {
              href: url,
              children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)("img", {
                src: _images_sound_png__WEBPACK_IMPORTED_MODULE_2__["default"]
              })
            })
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)("td", {
            className: "tdclass",
            "data-label": "Language",
            children: "E"
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)("td", {
            className: "tdclass",
            "data-label": "Action",
            children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)("img", {
              src: _images_delete_png__WEBPACK_IMPORTED_MODULE_3__["default"],
              onClick: function onClick() {
                return _this12.setState({
                  deleteId: recording.email
                }, function () {
                  return _this12.deleteUser();
                });
              }
            })
          })]
        }, recording.id);
      });
    }
  }, {
    key: "deleteSelectedCourse",
    value: function deleteSelectedCourse() {
      var _this13 = this;

      console.log(this.state.deleteCourse);
      var coursesection = this.state.deleteCourse;
      console.log(coursesection);
      var payload = {
        coursesection: coursesection
      };
      console.log(payload);
      var url = "http://127.0.0.1:8000/api/delete-selected-courses";
      axios__WEBPACK_IMPORTED_MODULE_7___default().post(url, payload, {
        headers: {
          'Content-Type': 'application/json',
          'Access-Control-Allow-Origin': '*'
        }
      }).then(function (res) {
        console.log('deleted');

        _this13.getDataCourse();
      })["catch"](function (err) {
        if (err) {
          this.setState({
            courses: []
          });
        } else {
          this.setState({
            loader: false
          });
        }

        this.setState({
          courses: []
        });
      });
    }
  }, {
    key: "handleEditModel",
    value: function handleEditModel() {
      this.setState({
        editModal: false
      });
    }
  }, {
    key: "deleteCourse",
    value: function deleteCourse() {
      console.log('hey');
    }
  }, {
    key: "render",
    value: function render() {
      return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxs)("div", {
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(_Header__WEBPACK_IMPORTED_MODULE_4__["default"], {}), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxs)("div", {
          className: "myprofilemaindiv",
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)("div", {
            className: "managestudenttable",
            children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxs)("table", {
              children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)("caption", {
                children: "Manage Admins"
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)("thead", {
                children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxs)("tr", {
                  children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)("th", {
                    scope: "col",
                    children: "Email"
                  }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)("th", {
                    scope: "col",
                    children: "First Name"
                  }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)("th", {
                    scope: "col",
                    children: "Last Name"
                  }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)("th", {
                    scope: "col",
                    children: "Phone"
                  }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)("th", {
                    scope: "col",
                    children: "Gender"
                  }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)("th", {
                    scope: "col",
                    children: "Role"
                  })]
                })
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)("tbody", {
                children: this.renderAdminData()
              })]
            })
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)("div", {
            className: "managestudenttable",
            children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxs)("table", {
              children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)("caption", {
                children: "Manage Advisors"
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)("thead", {
                children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxs)("tr", {
                  children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)("th", {
                    scope: "col",
                    children: "Email"
                  }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)("th", {
                    scope: "col",
                    children: "First Name"
                  }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)("th", {
                    scope: "col",
                    children: "Last Name"
                  }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)("th", {
                    scope: "col",
                    children: "Phone"
                  }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)("th", {
                    scope: "col",
                    children: "Gender"
                  }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)("th", {
                    scope: "col",
                    children: "Role"
                  })]
                })
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)("tbody", {
                children: this.renderAdvData()
              })]
            })
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)("div", {
            className: "managestudenttable",
            children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxs)("table", {
              children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)("caption", {
                children: "Manage Professors"
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)("thead", {
                children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxs)("tr", {
                  children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)("th", {
                    scope: "col",
                    children: "Email"
                  }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)("th", {
                    scope: "col",
                    children: "First Name"
                  }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)("th", {
                    scope: "col",
                    children: "Last Name"
                  }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)("th", {
                    scope: "col",
                    children: "Phone"
                  }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)("th", {
                    scope: "col",
                    children: "Gender"
                  }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)("th", {
                    scope: "col",
                    children: "Role"
                  }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)("th", {
                    scope: "col",
                    children: "Action"
                  })]
                })
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)("tbody", {
                children: this.renderProfData()
              })]
            })
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)("div", {
            className: "managestudenttable",
            children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxs)("table", {
              children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)("caption", {
                children: "Manage Students"
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)("thead", {
                children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxs)("tr", {
                  children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)("th", {
                    scope: "col",
                    children: "Email"
                  }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)("th", {
                    scope: "col",
                    children: "First Name"
                  }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)("th", {
                    scope: "col",
                    children: "Last Name"
                  }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)("th", {
                    scope: "col",
                    children: "Phone"
                  }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)("th", {
                    scope: "col",
                    children: "Gender"
                  }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)("th", {
                    scope: "col",
                    children: "Role"
                  }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)("th", {
                    scope: "col",
                    children: "Action"
                  })]
                })
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)("tbody", {
                children: this.renderStudentData()
              })]
            })
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)("div", {
            className: "managestudenttable",
            children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxs)("table", {
              children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)("caption", {
                children: "Manage Homework Submission"
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)("thead", {
                children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxs)("tr", {
                  children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)("th", {
                    children: "#"
                  }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)("th", {
                    scope: "col",
                    children: "ID"
                  }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)("th", {
                    scope: "col",
                    children: "Name"
                  }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)("th", {
                    scope: "col",
                    children: "Submission"
                  }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)("th", {
                    scope: "col",
                    children: "Grade"
                  })]
                })
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)("tbody", {
                children: this.renderDataCourses()
              })]
            })
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)("div", {
            className: "managestudenttable",
            children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxs)("table", {
              children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)("caption", {
                "class": "tcaption",
                children: "Student Recordings "
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)("thead", {
                children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxs)("tr", {
                  children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)("th", {
                    children: "#"
                  }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)("th", {
                    scope: "col",
                    children: "Name"
                  }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)("th", {
                    scope: "col",
                    children: "Recording"
                  }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)("th", {
                    scope: "col",
                    children: "Language"
                  }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)("th", {
                    scope: "col",
                    children: "Action"
                  })]
                })
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)("tbody", {
                children: this.renderRecordingData()
              })]
            })
          })]
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(_Footer__WEBPACK_IMPORTED_MODULE_5__["default"], {})]
      });
    }
  }]);

  return Myprofileprof;
}(react_cjs_react_production_min__WEBPACK_IMPORTED_MODULE_6__.Component);

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Myprofileprof);

/***/ }),

/***/ "./resources/js/components/images/chat.png":
/*!*************************************************!*\
  !*** ./resources/js/components/images/chat.png ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("/images/chat.png?8efd28dd2b7738b8aff1de2516324dc0");

/***/ }),

/***/ "./resources/js/components/images/delete.png":
/*!***************************************************!*\
  !*** ./resources/js/components/images/delete.png ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("/images/delete.png?567e8cf5c57e0a33a60bff8e3e5b2e18");

/***/ }),

/***/ "./resources/js/components/images/edit.png":
/*!*************************************************!*\
  !*** ./resources/js/components/images/edit.png ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("/images/edit.png?6232ebe341f1a91e34d9f9d93f1b73a2");

/***/ }),

/***/ "./resources/js/components/images/sound.png":
/*!**************************************************!*\
  !*** ./resources/js/components/images/sound.png ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("/images/sound.png?275784c9e3542f3fcecf8007809a0eec");

/***/ })

}]);