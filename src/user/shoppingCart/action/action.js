/**
 * 鲜花销售系统购物车页action类
 * Created by tianrenjie on 2018/5/16
 * */
import { createAction } from 'redux-actions';
import {
  SHOPPING_CART_VIEW_INIT,
  SELECT_ITEMS,
} from '../constant/constant';

const onViewInitAction = createAction(SHOPPING_CART_VIEW_INIT);
const onSelectionAction = createAction(SELECT_ITEMS);

export const onViewInit = () => {
  return (dispatch) => {
    dispatch(onViewInitAction());
  };
};

export const onSelect = (params) => {
  return (dispatch) => {
    dispatch(onSelectionAction({ data: params }));
  };
};
