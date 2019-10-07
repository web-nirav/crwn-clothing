import { all, call, takeLatest, put } from "redux-saga/effects";

// this will be what we listening for
import UserActionTypes from "../user/user.types";

// this is what we gonna fire out of our saga
import { clearCart } from "./cart.actions";

export function* clearCartOnSignOut() {
  yield put(clearCart());
}
export function* onSignOutSuccess() {
  yield takeLatest(UserActionTypes.SIGN_OUT_SUCCESS, clearCartOnSignOut);
}

export function* cartSagas() {
  yield all([call(onSignOutSuccess)]);
}
