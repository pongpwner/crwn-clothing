import React from "react";
import { Route } from "react-router-dom";
import CollectionPreview from "../../components/collection-preview/collection-preview.component";
import { connect } from "react-redux";
import { selectCollections } from "../../redux/shop/shop.selectors";
import { createStructuredSelector } from "reselect";
import CollectionsOverviewContainer from "../../components/collections-overview/collections-overview.container";
import CollectionPageContainer from "../collection/collection.container";

import { fetchCollectionsStartAsync } from "../../redux/shop/shop.actions";

import WithSpinner from "../../components/with-spinner/with-spinner.component";
import CollectionPageConatiner from "../collection/collection.container";

class ShopPage extends React.Component {
  componentDidMount() {
    const { fetchCollectionsStartAsync } = this.props;
    fetchCollectionsStartAsync();
  }
  render() {
    const { match } = this.props;

    return (
      <div className="shop-page">
        <Route
          exact
          path={`${match.path}`}
          component={CollectionsOverviewContainer}
        />
        <Route
          path={`${match.path}/:collectionId`}
          component={CollectionPageConatiner}
        />
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  fetchCollectionsStartAsync: () => dispatch(fetchCollectionsStartAsync()),
});
export default connect(null, mapDispatchToProps)(ShopPage);
