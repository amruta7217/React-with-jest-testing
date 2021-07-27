import React, { Component } from "react";
import cart from "../assets/shopping-cart.png";
import man from "../assets/man.png";

import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { Link } from "react-router-dom";
import { actionCreators } from "../store/componentStores/Account";

import "./Navbar.css";

class Navbar extends Component {
  state = {
    cart: [],
  };

  // handleLogout = () => {
  //   this.props.logout();
  // };

  render() {
    return (
      <div>
        <nav className="navbar fixed-top navbar-light bg-light justify-content-between">
          <a className="navbar-brand">MyStore</a>
          <form className="form-inline">
            <input
              className="form-control mr-sm-2"
              type="search"
              placeholder="Search"
              aria-label="Search"
            />
            <Link to="/cart">
              <img
                src={cart}
                alt=""
                width="30"
                className="ml-4"
                style={{ position: "relative" }}
              />
              <div className="cart-circle">
                {this.props.data.carts.cart &&
                  this.props.data.carts.cart.length}
              </div>
            </Link>
            <div className="ml-4">
              {this.props.data.account.userIsLoggedIn ? (
                <div>
                  <img src={man} alt="avtar" width="20" className="ml-4" />
                  <span
                    style={{ cursor: "pointer", color: "blue" }}
                    onClick={() => this.props.logout()}
                  >
                    Logout
                  </span>
                </div>
              ) : (
                <Link to="/login">Login/Register</Link>
              )}
            </div>
          </form>
        </nav>
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

export default connect(mapStateToProps, mapDispatchToProps)(Navbar);
