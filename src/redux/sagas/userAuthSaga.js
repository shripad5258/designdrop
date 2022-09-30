import { put, takeEvery } from "redux-saga/effects";
import { userAuth as actions } from "../actions/index";
import { userAuthActions } from "../actions/actionCreator";
import { saveState } from "./../store/sessionStorage";

import { toast } from "react-toastify";

function* createLogin(action, history) {
 
  const response = yield fetch(`${process.env.REACT_APP_BACKEND_URL}/login`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      email: action.payload.user.email,
      password: action.payload.user.password,
    }),
  });

  const json = yield response.json();
  if (json.success) {
    const token = json.accessToken;
    saveState({
      isLoggedIn: true,
      error: "",
      token: token,
      firstname: json.firstname,
      lastname: json.lastname,
    });
    toast.success(JSON.stringify(json.msg));
    yield put(
      userAuthActions.loginSuccess({
        token,
        firstname: json.firstname,
        lastname: json.lastname,
      })
    );
  } else if (!json.success) {
    toast.error(JSON.stringify(json.msg));
  } else {
    toast.error("Something went wrong! please try again later");
  }
}

function* userlogout(action) {
  const response = yield fetch(`${process.env.REACT_APP_BACKEND_URL}/logout`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      token: action.payload.user.token,
    }),
  });

  const json = yield response.json();
  if (json.success) {

    saveState({
      isLoggedIn: true,
      error: "",
      token: null,
    });
    toast.success(JSON.stringify(json.msg));
    yield put(userAuthActions.logout());
  } else {
    toast.error("Something went wrong! please try again later");
  }
}

export function* createLoginStart() {
  yield takeEvery(actions.LOGIN, createLogin);
}

export function* logout() {
  yield takeEvery(actions.LOGOUT, userlogout);
}
