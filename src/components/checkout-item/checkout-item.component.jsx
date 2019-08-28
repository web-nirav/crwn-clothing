import React from "react";
import { connect } from "react-redux";
import {
  clearItemFromCart,
  addItem,
  removeItem
} from "../../redux/cart/cart.actions";

import "./checkout-item.styles.scss";
import {
  CheckoutItemContainer,
  ImageContiner,
  ArrowDiv,
  QuantitySpan,
  RemoveButton,
  SpanWidth,
  SpanValue
} from "./checkout-item.styles";

const CheckoutItem = ({ cartItem, dispatch }) => {
  const { name, imageUrl, price, quantity } = cartItem;
  return (
    <CheckoutItemContainer>
      <ImageContiner>
        <img src={imageUrl} alt="item" />
      </ImageContiner>
      <SpanWidth>{name}</SpanWidth>
      <QuantitySpan>
        <ArrowDiv onClick={() => dispatch(removeItem(cartItem))}>
          &#10094;
        </ArrowDiv>
        <SpanValue>{quantity}</SpanValue>
        <ArrowDiv onClick={() => dispatch(addItem(cartItem))}>
          &#10095;
        </ArrowDiv>
      </QuantitySpan>
      <SpanWidth>{price}</SpanWidth>
      <RemoveButton onClick={() => dispatch(clearItemFromCart(cartItem))}>
        &#10005;
      </RemoveButton>
    </CheckoutItemContainer>
  );
};

/* const mapDispatchToProps = dispatch => ({
  clearItem: item => dispatch(clearItemFromCart(item))
}); */

// same way as we did in cart-dropdown component we have to use connect to leverage use of our redux state but if we don't pass mapDispatchToProps it will always pass dispatch method which we can use directly in our jsx to call our redux action
export default connect()(CheckoutItem);
