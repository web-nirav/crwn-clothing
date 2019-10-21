import React from "react";

// import "./cart-item.styles.scss";
import { CartItemContainer, ItemDetailsContainer } from "./cart-item.styles";

const CartItem = ({ item: { imageUrl, price, name, quantity } }) => (
  <CartItemContainer>
    <img src={imageUrl} alt="item" />
    <ItemDetailsContainer>
      <span>{name}</span>
      <span>
        {quantity} x {price}
      </span>
    </ItemDetailsContainer>
  </CartItemContainer>
);

// just using React.memo so it should only render when new item is added and not for already added items
export default React.memo(CartItem);
