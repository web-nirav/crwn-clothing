import React from "react";
import { Route } from "react-router-dom";
import { connect } from "react-redux";

import { fetchCollectionsStart } from "../../redux/shop/shop.actions";

import CollectionsOverviewContainer from "../../components/collections-overview/collections-overview.container";
import CollectionPageContainer from "../collection/collection.container";

/* import {
  firestore,
  convertCollectionSnaphotToMap
} from "../../firebase/firebase.utils.js"; */

// import CollectionsOverview from "../../components/collections-overview/collections-overview.component";
// import CollectionPage from "../collection/collection.component";

// import { updateCollections } from "../../redux/shop/shop.actions";
// import WithSpinner from "../../components/with-spinner/with-spinner.component";

// const CollectionsOverviewWithSpinner = WithSpinner(CollectionsOverview);
// const CollectionPageWithSpinner = WithSpinner(CollectionPage);

// here the match parameter comes from the App component because its loaded using Route component which by default pass all those match, location, etc... props
class ShopPage extends React.Component {
  /* state = {
    loading: true
  }; */

  componentDidMount() {
    const { fetchCollectionsStart } = this.props;
    fetchCollectionsStart();

    // const collectionsMap
    // const { updateCollections } = this.props;
    // const collectionRef = firestore.collection("collections");

    /* collectionRef.onSnapshot(snapshot => {
      const collectionsMap = convertCollectionSnaphotToMap(snapshot);
      updateCollections(collectionsMap);
      // console.log(collectionsMap);
    }); */

    // we have changed above to below to show example of async call using promise
    /* collectionRef.get().then(snapshot => {
      const collectionsMap = convertCollectionSnaphotToMap(snapshot);
      updateCollections(collectionsMap);
      this.setState({ loading: false });
    }); */
  }

  render() {
    const { match } = this.props;
    return (
      <div className="shop-page" style={{ padding: "70px" }}>
        <Route
          exact
          path={`${match.path}`}
          component={CollectionsOverviewContainer}
        />
        <Route
          path={`${match.path}/:collectionId`}
          component={CollectionPageContainer}
        />
      </div>
    );

    // const { loading } = this.state;
    /* return (
      <div className="shop-page" style={{ padding: "70px" }}>
        <Route
          exact
          path={`${match.path}`}
          render={props => (
            <CollectionsOverviewWithSpinner isLoading={loading} {...props} />
          )}
        />
        <Route
          path={`${match.path}/:collectionId`}
          render={props => (
            <CollectionPageWithSpinner isLoading={loading} {...props} />
          )}
        />
      </div>
    ); */
  }
}

/* const mapDispatchToProps = dispatch => ({
  updateCollections: collectionsMap =>
    dispatch(updateCollections(collectionsMap))
}); */

const mapDispatchToProps = dispatch => ({
  fetchCollectionsStart: () => dispatch(fetchCollectionsStart())
});

export default connect(
  null,
  mapDispatchToProps
)(ShopPage);
