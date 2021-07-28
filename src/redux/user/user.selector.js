import { createSelector } from "reselect";

const selectUser = (state) => state.user;
const selectCartHidden = (state) => state.cart;

export const selectCurrentUser = createSelector(
  [selectUser],
  (user) => user.currentUser
);
