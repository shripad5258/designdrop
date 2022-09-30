import { userAuth, spinner, LOADER } from "./index";

export const userAuthActions = {
  login: (payload) => ({
    type: userAuth.LOGIN,
    payload: payload,
  }),
  loginSuccess: (payload) => ({
    type: userAuth.LOGIN_SUCCESS,
    payload: payload,
  }),
  loginFailed: (err) => ({
    type: userAuth.LOGIN_FAILED,
    payload: err,
  }),
  logout: () => ({
    type: userAuth.LOGOUT,
  }),
  redirect: (link) => ({
    type: userAuth.REDIRECT,
    payload: link,
  }),
};

export const showLoader = (state) => (dispatch) => {
  dispatch({
    type: spinner.SHOW_LOADER,
    payload: state,
  });
};

export const hideLoader = (state) => (dispatch) => {
  dispatch({
    type: spinner.HIDE_LOADER,
    payload: state,
  });
};

export const setLoader = (loading) => {
  return {
    type: LOADER,
    payload: loading,
  };
};
