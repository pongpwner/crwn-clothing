import { createSelector } from "reselect";

const selectShop = (state) => state.shop; //state.shop is the shop from root reducer

export const selectCollections = createSelector(
  [selectShop],
  (shop) => shop.collections
);

//converts selectCollections from an object to an array
export const selectCollectionsForPreview = createSelector(
  [selectCollections],
  (collections) =>
    collections ? Object.keys(collections).map((key) => collections[key]) : []
);

export const selectCollection = (collectionUrlParam) =>
  createSelector([selectCollections], (collections) =>
    collections ? collections[collectionUrlParam] : null
  );
