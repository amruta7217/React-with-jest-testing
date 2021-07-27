import React, { Component, Fragment } from "react";

import Navbar from "../component/Navbar";

import { ProductData } from "./ProductData";

import { connect } from "react-redux";
import { bindActionCreators } from "redux";

import { actionCreators } from "../store/componentStores/Product";

const cartArr = [];
class Product extends Component {
  handleCart = (val) => {
    cartArr.push(val);
    this.props.viewCart(cartArr);
  };

  render() {
    return (
      <Fragment>
        <Navbar />
        <div className="" style={{ margin: "8% 4%" }}>
          <div className="row">
            {ProductData.map((val, key) => (
              <div className="col-sm-12 col-md-3 col-lg-4 mb-3" key={key}>
                <div className="card" key={key}>
                  <img
                    className="card-img-top"
                    src={val.img}
                    alt="Card image cap"
                    style={{ height: "18rem" }}
                  />
                  <div className="card-body" style={{ height: "13rem" }}>
                    <div className="card-title">
                      <b>{val.name}</b>
                    </div>
                    <div className="d-flex justify-content-between mb-1">
                      <div>{val.by}</div>
                      <div>{val.price}</div>
                    </div>
                    <p
                      className="card-text"
                      style={{
                        whiteSpace: "nowrap",
                        width: "200px",
                        overflow: "hidden",
                        textOverflow: "ellipsis",
                      }}
                    >
                      {val.desc}
                    </p>
                  </div>
                  <div
                    className="row"
                    style={{ position: "absolute", top: "91%", left: "4%" }}
                  >
                    <div className="col-12 col-sm-6 col-md-6 col-lg-5">
                      <button type="button" class="btn btn-secondary">
                        Wishlist
                      </button>
                    </div>
                    <div className="col-12 col-sm-6 col-md-6 col-lg-7">
                      <button
                        type="button"
                        class="btn btn-primary"
                        // onClick={() => this.props.history.push("/cart")}
                        onClick={() => this.handleCart(val)}
                      >
                        Add to cart
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </Fragment>
    );
  }
}

// const mapStateToProps = (state) => ({ data: state });

const mapDispatchToProps = (dispatch) => {
  return {
    ...bindActionCreators(actionCreators, dispatch),
  };
};

export default connect(null, mapDispatchToProps)(Product);
