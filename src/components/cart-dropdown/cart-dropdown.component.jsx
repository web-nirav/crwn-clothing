import React from "react";
import { connect } from "react-redux";
// import { createStructuredSelector } from "reselect";
import { withRouter } from "react-router-dom";

// import CustomButton from "../custom-button/custom-button.component";
import CartItem from "../cart-item/cart-item.component";
import { selectCartItems } from "../../redux/cart/cart.selectors";
import { toggleCartHidden } from "../../redux/cart/cart.actions.js";

// import "./cart-dropdown.styles.scss";

import {
  CartDropdownContainer,
  EmptyMessageContainer,
  CartItemsContainer,
  CartDropdownButton
} from "./cart-dropdown.styles";

// if we does not pass second argument to connect method then it will always pass dispatch method which we will accept in below CartDowndon component method and also using withRouter component we get history prop
const CartDropdown = ({ cartItems, history, dispatch }) => (
  <CartDropdownContainer>
    <CartItemsContainer>
      {cartItems.length ? (
        cartItems.map(cartItem => (
          <CartItem key={cartItem.id} item={cartItem} />
        ))
      ) : (
        <EmptyMessageContainer>Your cart is empty</EmptyMessageContainer>
      )}
    </CartItemsContainer>
    <CartDropdownButton
      onClick={() => {
        history.push("/checkout");
        dispatch(toggleCartHidden());
      }}
    >
      GO TO CHECKOUT
    </CartDropdownButton>
  </CartDropdownContainer>
);

const mapStateToProps = state => ({
  cartItems: selectCartItems(state)
});

/* 
if more than one selector we should use like this 
const mapStateToProps = createStructuredSelector({
  cartItems: selectCartItems
}); */

export default withRouter(connect(mapStateToProps)(CartDropdown));
