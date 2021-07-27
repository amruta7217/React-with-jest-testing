import { initializeState } from "../../utility/storageUtils";

// import { history } from "../../component";

const cartDataType = "CART_DATA";

const setInitialState = "Initial_State";
const initialState = {
  cart: null,
};

// Actions
export const actionCreators = {
  viewCart: (cartData) => (dispatch) => {
    dispatch({
      type: cartDataType,
      cart: cartData,
    });
  },
};

export const reducer = (state, action) => {
  state = initializeState(state, initialState);
  switch (action.type) {
    case setInitialState: {
      return {
        ...state,
        cart: null,
      };
    }
    case cartDataType: {
      return {
        ...state,
        cart: action.cart,
      };
    }

    default: {
      return state;
    }
  }
};
