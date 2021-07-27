import React, { Component, Fragment } from "react";
import img from "../assets/1.png";

import "./style.css";

class PlaceOrder extends Component {
  state = {
    flag: false,
    value: "",
  };

  handleChange = (val) => {
    console.log("*********00000000", val);
    this.setState({ flag: true, value: val });
  };

  render() {
    const { flag, value } = this.state;
    console.log("*********", flag, value);
    return (
      <div className="m-5">
        <div className="row text-left">
          <div className="col-lg-8">
            <div className="order-container">
              <div className="d-flex justify-content-between">
                <div className="mt-2">LOGIN</div>
                <div>
                  <button
                    type="button"
                    className="btn btn-outline-primary"
                    onClick={() => this.handleChange("login")}
                  >
                    Change
                  </button>
                </div>
              </div>
              {flag && value === "login" && (
                <div>
                  <div>Name : Amruta Adsul</div>
                  <div>Email : amruta@gmail.com</div>
                  <div>Password : 7888181316</div>

                  <div className="mt-2">
                    <button type="button" className="btn btn-primary">
                      CONTINUE CHECKOUT
                    </button>
                  </div>
                </div>
              )}
            </div>
            <div className="order-container mt-4">
              <div className="d-flex justify-content-between">
                <div className="mt-2">DELIVERY ADDRESS</div>
                <div>
                  <button
                    type="button"
                    className="btn btn-outline-primary"
                    onClick={() => this.handleChange("add")}
                  >
                    Change
                  </button>
                </div>
              </div>
              {flag && value === "add" && (
                <div>
                  <form>
                    <div className="form-row">
                      <div className="form-group col-md-6">
                        <label>Name</label>
                        <input
                          type="name"
                          className="form-control"
                          placeholder="Name"
                        />
                      </div>
                      <div className="form-group col-md-6">
                        <label>Mobile</label>
                        <input
                          type="number"
                          className="form-control"
                          placeholder="10 digit mobile number"
                        />
                      </div>
                    </div>
                    <div className="form-group">
                      <label for="inputAddress">Address</label>
                      <input
                        type="text"
                        className="form-control"
                        id="inputAddress"
                        placeholder="1234 Main St"
                      />
                    </div>
                    <div className="form-group">
                      <label for="inputAddress2">Address 2</label>
                      <input
                        type="text"
                        className="form-control"
                        id="inputAddress2"
                        placeholder="Apartment, studio, or floor"
                      />
                    </div>
                    <div className="form-row">
                      <div className="form-group col-md-6">
                        <label for="inputCity">City</label>
                        <input
                          type="text"
                          className="form-control"
                          id="inputCity"
                        />
                      </div>
                      <div className="form-group col-md-4">
                        <label for="inputState">State</label>
                        <input
                          type="text"
                          className="form-control"
                          placeholder="Maharashtra"
                        />
                      </div>
                      <div className="form-group col-md-2">
                        <label for="inputZip">Zip</label>
                        <input
                          type="text"
                          className="form-control"
                          id="inputZip"
                        />
                      </div>
                    </div>

                    <div className="form-check form-check-inline">
                      <input
                        className="form-check-input"
                        type="radio"
                        name="inlineRadioOptions"
                        id="inlineRadio1"
                        value="option1"
                      />
                      <label className="form-check-label" for="inlineRadio1">
                        Home
                      </label>
                    </div>
                    <div className="form-check form-check-inline">
                      <input
                        className="form-check-input"
                        type="radio"
                        name="inlineRadioOptions"
                        id="inlineRadio2"
                        value="option2"
                      />
                      <label className="form-check-label" for="inlineRadio2">
                        Work (Delivery between 10 AM - 5 PM)
                      </label>
                    </div>

                    <div className="mt-3">
                      <button type="submit" className="btn btn-primary">
                        SAVE AND DELIVER HERE
                      </button>
                      <button type="submit" className="btn btn-danger ml-3">
                        CANCEL
                      </button>
                    </div>
                  </form>
                </div>
              )}
            </div>

            <div className="order-container mt-4">
              <div className="d-flex justify-content-between">
                <div className="mt-2">ORDER SUMMARY</div>
                <div>
                  <div
                    type="button"
                    className="btn btn-outline-primary"
                    onClick={() => this.handleChange("order")}
                  >
                    +
                  </div>
                </div>
              </div>
              {flag && value === "order" && (
                <Fragment>
                  <div className="row">
                    <div className="col-lg-4">
                      <img src={img} alt="image" style={{ width: "12rem" }} />
                    </div>
                    <div className="col-lg-4">
                      <div>
                        Amazon - Fire TV Stick with Alexa Voice Remote - Black
                      </div>
                      <div>W89GHTR</div>
                      <div>Seller OmniTechRetail</div>

                      <div className="mt-1">₹ 5,890</div>
                      <div>REMOVE</div>
                    </div>
                    <div className="col-lg-4">
                      <div>Delivery by Wed Oct 28 | Free</div>
                    </div>
                  </div>
                </Fragment>
              )}
            </div>
          </div>
          <div className="col-lg-4">
            <div>PRICE DETAILS</div>
            <hr />
            <div className="row mt-3">
              <div className="col-lg-6">
                <div>Price (2 Items)</div>
              </div>
              <div className="col-lg-6">₹ 1,5999</div>
            </div>
            <div className="row mt-2">
              <div className="col-lg-6">
                <div>Delivery Charges</div>
              </div>
              <div className="col-lg-6">Free</div>
            </div>
            <hr />
            <div className="row mt-3">
              <div className="col-lg-6">
                <div>
                  <b>Total Payable</b>
                </div>
              </div>
              <div className="col-lg-6">₹ 1,5999</div>
            </div>
            <hr />
            <div className="mt-2">Your total savings on this order ₹1,198</div>
          </div>
        </div>
      </div>
    );
  }
}

export default PlaceOrder;
