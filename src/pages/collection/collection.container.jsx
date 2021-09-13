import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";

import WithSpinner from "../../components/with-spinner/with-spinner.component";

import { compose } from "redux";
import { selectIsCollectionsLoading } from "../../redux/shop/shop.selectors";
import CollectionPage from "./collection.component";
const mapStateToProps = createStructuredSelector({
  isLoading: (state) => !selectIsCollectionsLoading(state),
});

const CollectionPageConatiner = compose(
  connect(mapStateToProps),
  WithSpinner
)(CollectionPage);
export default CollectionPageConatiner;
