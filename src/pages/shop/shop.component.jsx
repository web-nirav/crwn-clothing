import React from "react";
import { Route } from "react-router-dom";
import { connect } from "react-redux";

import {
  firestore,
  convertCollectionSnaphotToMap
} from "../../firebase/firebase.utils.js";

import CollectionOverview from "../../components/collections-overview/collections-overview.component";
import CollectionPage from "../collection/collection.component";
import { updateCollections } from "../../redux/shop/shop.actions";

// here the match parameter comes from the App component because its loaded using Route component which by default pass all those match, location, etc... props
class ShopPage extends React.Component {
  unsubscribeFromSnapshot = null;

  componentDidMount() {
    // const collectionsMap
    const { updateCollections } = this.props;
    const collectionRef = firestore.collection("collections");

    collectionRef.onSnapshot(snapshot => {
      const collectionsMap = convertCollectionSnaphotToMap(snapshot);
      updateCollections(collectionsMap);
      // console.log(collectionsMap);
    });
  }

  render() {
    const { match } = this.props;
    return (
      <div className="shop-page" style={{ padding: "70px" }}>
        <Route exact path={`${match.path}`} component={CollectionOverview} />
        <Route
          path={`${match.path}/:collectionId`}
          component={CollectionPage}
        />
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  updateCollections: collectionsMap =>
    dispatch(updateCollections(collectionsMap))
});

export default connect(
  null,
  mapDispatchToProps
)(ShopPage);
