import ShopActionsTypes from "./shop.types";
import ShopActionTypes from "./shop.types";
export const updateCollections = (collectionsMap) => ({
  type: ShopActionsTypes.UPDATE_COLLECTIONS,
  payload: collectionsMap,
});
