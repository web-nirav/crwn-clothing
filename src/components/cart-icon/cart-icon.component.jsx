import React from "react";
import { connect } from "react-redux";

import { toggleCartHidden } from "../../redux/cart/cart.actions";
import { selectCartItemsCount } from "../../redux/cart/cart.selectors";

import { ReactComponent as ShoppingIcon } from "../../assets/shopping-bag.svg";

// import "./cart-icon.styles.scss";
import {
  CartIconContainer,
  ShoppingIconContainer,
  ItemCountContainer
} from "./cart-icon.styles";

const CartIcon = ({ toggleCartHidden, itemCount }) => (
  <CartIconContainer>
    <ShoppingIconContainer
      className="shopping-icon"
      onClick={toggleCartHidden}
    />
    <ItemCountContainer className="item-count">{itemCount}</ItemCountContainer>
  </CartIconContainer>
);

const mapDispatchToProps = dispatch => ({
  toggleCartHidden: () => dispatch(toggleCartHidden())
});

// here we have used selector function that we have defined using reselect package
// we can use createStructuredSelector function to pass state like in header component
const mapToStateProps = state => ({
  itemCount: selectCartItemsCount(state)
});

export default connect(
  mapToStateProps,
  mapDispatchToProps
)(CartIcon);
