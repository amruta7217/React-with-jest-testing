import React, { Component } from "react";

import { Formik, Field, ErrorMessage, Form } from "formik";
import { Link } from "react-router-dom";

import { connect } from "react-redux";
import { bindActionCreators } from "redux";

import { actionCreators } from "../store/componentStores/Account";

import * as yup from "yup";

import axios from "axios";

import "./style.css";

const validationSchema = yup.object().shape({
  username: yup.string().required("Username is a required field"),
  password: yup.string().required("Password is a required field"),
});

class Login extends Component {
  handleSubmit = (values) => {
    const payload = {
      email: values.username,
      password: values.password,
    };
    console.log("payload",payload)
    this.props.loginUser(payload);
  };

  render() {
    return (
      <div>
        <Formik
          enableReinitialize={true}
          validateOnBlur={false}
          initialValues={{
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
                  <div class="form-group">
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
                    <Link to="/register">Create an Account</Link>
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

export default connect(mapStateToProps, mapDispatchToProps)(Login);
// export default Login;
