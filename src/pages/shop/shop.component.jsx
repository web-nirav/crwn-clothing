import React from "react";
import { Route } from "react-router-dom";

import CollectionOverview from "../../components/collections-overview/collections-overview.component";
import CollectionPage from "../collection/collection.component";

// here the match parameter comes from the App component because its loaded using Route component which by default pass all those match, location, etc... props
const ShopPage = ({ match }) => (
  <div className="shop-page" style={{ padding: "70px" }}>
    <Route exact path={`${match.path}`} component={CollectionOverview} />
    <Route path={`${match.path}/:collectionId`} component={CollectionPage} />
  </div>
);

export default ShopPage;
