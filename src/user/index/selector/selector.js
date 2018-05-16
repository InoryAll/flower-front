/**
 * 鲜花销售系统主页selector类
 * Created by tianrenjie on 2018/5/15
 */
import { createSelector } from 'reselect';

export const shoppingItemsSelector = state => state.shoppingItems;
export const cartSelector = state => state.cart;
export const itemsSelector = createSelector(shoppingItemsSelector, shoppingItmes => shoppingItmes.items);
export const hotSaleSelector = createSelector(shoppingItemsSelector, shoppingItmes => shoppingItmes.hotSale);
export const firstFloorSelector = createSelector(shoppingItemsSelector, shoppingItmes => shoppingItmes.firstFloor);
export const secondFloorSelector = createSelector(shoppingItemsSelector, shoppingItmes => shoppingItmes.secondFloor);
export const thirdFloorSelector = createSelector(shoppingItemsSelector, shoppingItmes => shoppingItmes.thirdFloor);
export const forthFloorSelector = createSelector(shoppingItemsSelector, shoppingItmes => shoppingItmes.forthFloor);
export const dailySaleSelector = createSelector(shoppingItemsSelector, shoppingItmes => shoppingItmes.dailySale);
