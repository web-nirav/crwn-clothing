import React from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";

import { selectCollectionsForPreview } from "../../redux/shop/shop.selectors";
import CollectionPreview from "../collection-preview/collection-preview.component";

import "./collections-overview.styles.scss";

const CollectionOverview = ({ collections }) => (
  /* // here we need to think about performance impact as we are runnig loop and
    inside it we are rendering component so whenever ShopPage component
    re-render all the loop component will also re-render so make note for
    future... */
  <div className="collections-overview">
    {collections.map(({ id, ...otherCollectionProps }) => (
      <CollectionPreview key={id} {...otherCollectionProps} />
    ))}
  </div>
);

/* const mapStateToProps = state => ({
  collections: selectCollectionsForPreview(state)
}); */

const mapStateToProps = createStructuredSelector({
  collections: selectCollectionsForPreview
});

export default connect(mapStateToProps)(CollectionOverview);
