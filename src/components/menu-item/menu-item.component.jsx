import React from "react";
import { withRouter } from "react-router-dom";

// import "./menu-item.styles.scss";
import {
  ContentContainer,
  TitleContainer,
  SubtitleContainer,
  BackgroundImageContainer,
  MenuItemContainer
} from "./menu-item.styles";

const MenuItem = ({ title, imageUrl, size, history, linkUrl, match }) => {
  return (
    <MenuItemContainer
      size={size}
      onClick={() => history.push(`${match.url}${linkUrl}`)}
    >
      <BackgroundImageContainer
        className="background-image"
        imageUrl={imageUrl}
      />

      <ContentContainer className="content">
        <TitleContainer>{title.toUpperCase()}</TitleContainer>
        <SubtitleContainer>SHOP NOW</SubtitleContainer>
      </ContentContainer>
    </MenuItemContainer>
  );
};

export default withRouter(MenuItem);
