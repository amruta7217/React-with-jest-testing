import React, { Component } from "react";

import { Formik, Field, ErrorMessage, Form } from "formik";

import { connect } from "react-redux";
import { bindActionCreators } from "redux";

import { actionCreators } from "../store/componentStores/Account";

import { Link } from "react-router-dom";
import * as yup from "yup";

import axios from "axios";

import "./style.css";

const validationSchema = yup.object().shape({
  mobileNo: yup.number().required("Mobile number is a required field"),
  username: yup.string().required("Username is a required field"),
  password: yup.string().required("Password is a required field"),
});

class Register extends Component {
  handleSubmit = (values) => {
    try {
      const payload = {
        email: values.username,
        password: values.password,
        mobile: values.mobileNo,
      };
      console.log("register payload",payload)
      this.props.registerUser(payload);
      // axios.post('http://localhost:8080/register', payload)
      //   .then((res)=> console.log("data",res));
    } catch (error) {
      console.log("error", error);
    }
  };

  render() {
    return (
      <div>
        <Formik
          enableReinitialize={true}
          validateOnBlur={false}
          initialValues={{
            mobileNo: "",
            username: "",
            password: "",
          }}
          validationSchema={validationSchema}
          onSubmit={this.handleSubmit}
        >
          {(props) => {
            const { values, handleChange } = props;
            return (
              <div className="col-sm-12 col-md-9 col-lg-9">
                <Form className="text-left form-container">
                  <div className="form-group">
                    <label>Email address</label>
                    <input
                      type="email"
                      className="form-control"
                      name="username"
                      placeholder="Enter email"
                      values={values.username}
                      onChange={handleChange}
                    />
                    <ErrorMessage name="username">
                      {(msg) => (
                        <div className="invalid-feedback d-block">{msg}</div>
                      )}
                    </ErrorMessage>
                  </div>
                  <div class="form-group">
                    <label>Mobile Number</label>
                    <input
                      type="text"
                      className="form-control"
                      name="mobileNo"
                      placeholder="Enter mobile number"
                      values={values.mobileNo}
                      onChange={handleChange}
                    />
                    <ErrorMessage name="mobileNo">
                      {(msg) => (
                        <div className="invalid-feedback d-block">{msg}</div>
                      )}
                    </ErrorMessage>
                  </div>
                  <div class="form-group">
                    <label>Password</label>
                    <input
                      type="password"
                      className="form-control"
                      name="password"
                      placeholder="Enter password"
                      values={values.password}
                      onChange={handleChange}
                    />
                    <ErrorMessage name="password">
                      {(msg) => (
                        <div className="invalid-feedback d-block">{msg}</div>
                      )}
                    </ErrorMessage>
                  </div>
                  <button type="submit" class="btn btn-primary">
                    Submit
                  </button>
                  <div className="mt-2">
                    <Link to="/login">Sign In</Link>
                  </div>
                </Form>
              </div>
            );
          }}
        </Formik>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({ data: state });

const mapDispatchToProps = (dispatch) => {
  return {
    ...bindActionCreators(actionCreators, dispatch),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Register);
// export default Register;
