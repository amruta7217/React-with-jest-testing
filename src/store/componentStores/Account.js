import { initializeState } from "../../utility/storageUtils";
import Auth from "../../services/api/Auth/Auth";

import { history } from "../../history";

const registerAccountSuccessType = "REGISTER_ACCOUNT_SUCCESS";
const registerAccountLoadingType = "REGISTER_ACCOUNT_LOADING";
const registerAccountErrorType = "REGISTER_ACCOUNT_ERROR";

const loginSuccessType = "LOGIN_SUCCESS";
const loginLoadingType = "LOGIN_LOADING";
const loginErrorType = "LOGIN_ERROR";

const logoutActionType = "LOGOUT_TYPE";

const setInitialState = "Initial_State";

const auth = new Auth();

const initialState = {
  registeringAccount: false,
  registerAccountSucceeded: false,
  registerAccountValidationErrors: null,
  registerAccountError: "",
  currentLoggedInUser: null,
  userIsLoggedIn: false,
  loginErrorMessage: "",
  loginHasFailed: false,
  loggingInAccount: false,
};

// Actions
export const actionCreators = {
  setInitialState: () => (dispatch) => {
    dispatch({
      type: setInitialState,
    });
  },

  loginUser: (user) => (dispatch) => {
    dispatch({
      type: loginLoadingType,
      loggingInAccount: true,
    });

    const request = auth.login(user);
    request.then(
      (response) => {
        var loggedInUser;
        if (response.data) {
          console.log("rrrrrrrrrrrrrrrrr", response.data);
          loggedInUser = response.data.records;
          dispatch({
            type: loginSuccessType,
            currentLoggedInUser: loggedInUser,
            userIsLoggedIn: true,
          });

          this.push.history.push("/");
        } else {
          dispatch({
            type: loginErrorType,
            loginHasFailed: false,
            loginErrorMessage: response,
          });
        }
      },
      (err) => {
        console.log(err);
        dispatch({
          type: loginErrorType,
          loginHasFailed: true,
          loginErrorMessage: err.response.data,
          loggingInAccount: false,
        });
      }
    );
  },

  registerUser: (user) => (dispatch) => {
    dispatch({
      type: registerAccountLoadingType,
      registeringAccount: true,
    });

    auth
      .registerUser(user)
      .then((response) => {
        var registerInUser;
        if (response.data) {
          registerInUser = response.data;

          dispatch({
            type: registerAccountSuccessType,
            registerAccountSucceeded: true,
          });

          history.push("/login");
        }
      })
      .catch((err) => {
        dispatch({
          type: registerAccountErrorType,
          registerAccountValidationErrors: err.response.data.validationErrors,
          registerAccountError: err.response.data,
        });
        dispatch({
          type: registerAccountLoadingType,
          registeringAccount: false,
        });
      });
  },

  logout: () => (dispatch) => {
    dispatch({
      type: logoutActionType,
      currentLoggedInUser: null,
      userIsLoggedIn: false,
    });
    localStorage.clear();
  },
};

export const reducer = (state, action) => {
  state = initializeState(state, initialState);
  switch (action.type) {
    case setInitialState: {
      return {
        ...state,
        registeringAccount: false,
        registerAccountSucceeded: false,
        registerAccountValidationErrors: null,
        registerAccountError: "",
        loginErrorMessage: "",
        loginHasFailed: false,
        loggingInAccount: false,
      };
    }
    case registerAccountSuccessType: {
      return {
        ...state,
        registerAccountSucceeded: action.registerAccountSucceeded,
      };
    }
    case registerAccountLoadingType: {
      return { ...state, registeringAccount: action.registeringAccount };
    }
    case registerAccountErrorType: {
      return {
        ...state,
        registerAccountValidationErrors: action.registerAccountValidationErrors,
        registerAccountError: action.registerAccountError,
      };
    }
    case loginSuccessType: {
      return {
        ...state,
        userIsLoggedIn: action.userIsLoggedIn,
        currentLoggedInUser: action.currentLoggedInUser,
      };
    }
    case loginLoadingType: {
      return { ...state, loggingInAccount: action.loggingInAccount };
    }
    case logoutActionType: {
      return {
        ...state,
        userIsLoggedIn: action.userIsLoggedIn,
        currentLoggedInUser: action.currentLoggedInUser,
      };
    }
    case loginErrorType: {
      return {
        ...state,
        loginHasFailed: action.loginHasFailed,
        loginErrorMessage: action.loginErrorMessage,
        loggingInAccount: action.loggingInAccount,
      };
    }

    default: {
      return state;
    }
  }
};
