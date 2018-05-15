/**
 * 鲜花销售系统主页action类
 * Created by tianrenjie on 2018/5/15
 */
import { createAction } from 'redux-actions';
import _ from 'lodash';
import { message } from 'antd';
import {
  INDEX_VIEW_INIT,
  GET_ITEM,
  GET_HOT_SALE,
  GET_FIRST_FLOOR,
  GET_SECOND_FLOOR,
  GET_THIRD_FLOOR,
  GET_FORTH_FLOOR,
  GET_DAILY_SALE,
  GET_CART,
} from '../constant/constant';
import {
  getItemApi,
  getCartApi,
} from '../../../api/indexApi';

const onViewInitAction = createAction(INDEX_VIEW_INIT);
const getItemAction = createAction(GET_ITEM);
const getHotSaleAction = createAction(GET_HOT_SALE);
const getFirstAction = createAction(GET_FIRST_FLOOR);
const getSecondAction = createAction(GET_SECOND_FLOOR);
const getThirdAction = createAction(GET_THIRD_FLOOR);
const getForthAction = createAction(GET_FORTH_FLOOR);
const getDailySaleAction = createAction(GET_DAILY_SALE);
const getCartAction = createAction(GET_CART);

/**
 * 视图初始化
 */
export const onViewInit = () => {
  return (dispatch) => {
    dispatch(onViewInitAction());
  };
};

/**
 * 获取到所有的商品
 * return {*}
 */
export const getItem = () => {
  return (dispatch) => {
    getItemApi({}, (data) => {
      if (data.code === 1) {
        const hotSale = { ...data, data: data.data.filter((item) => { return item.position === 'hotSale'; }) };
        const firstFloor = { ...data, data: data.data.filter((item) => { return item.position === 'firstFloor'; }) };
        const secondFloor = { ...data, data: data.data.filter((item) => { return item.position === 'secondFloor'; }) };
        const thirdFloor = { ...data, data: data.data.filter((item) => { return item.position === 'thirdFloor'; }) };
        const forthFloor = { ...data, data: data.data.filter((item) => { return item.position === 'forthFloor'; }) };
        const dailySale = { ...data, data: data.data.filter((item) => { return item.position === 'dailySale'; }) };
        dispatch(getItemAction({ data }));
        dispatch(getHotSaleAction({ data: hotSale }));
        dispatch(getFirstAction({ data: firstFloor }));
        dispatch(getSecondAction({ data: secondFloor }));
        dispatch(getThirdAction({ data: thirdFloor }));
        dispatch(getForthAction({ data: forthFloor }));
        dispatch(getDailySaleAction({ data: dailySale }));
      } else {
        message.error('获取商品信息失败！');
      }
    }, (err) => {
      message.error(err);
    });
  };
};

/**
 * 获取到购物车所有商品
 * @param params 条件参数
 * return {*}
 */
export const getCart = (params) => {
  return (dispatch) => {
    getCartApi({ userId: params._id }, (data) => {
      if (data.code === 1) {
        dispatch(getCartAction({ data }));
      } else {
        message.error('获取购物车信息失败！');
      }
    }, (err) => {
      message.error(err);
    });
  };
};
