import { createSelector } from "reselect";

// input selector which will then be used in any of createSelector
const selectUser = state => state.user;

// create selector for user which will then be used in mapStateToProps
// first argument can be passed as an array of selectors or separat argument separated by comma
export const selectCurrentUser = createSelector(
  selectUser,
  user => user.currentUser
);
