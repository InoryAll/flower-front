/**
 * 鲜花销售个人中心页action类
 * Created by tianrenjie on 2018/5/15
 */
import { createAction } from 'redux-actions';
import Cookie from '../../../common/cookie';
import { message } from 'antd';
import {
  USER_INFO_VIEW_INIT,
  GET_ALL_ORDERS,
} from '../constant/constant';
import {
  getOrderApi,
} from '../../../api/orderApi';

const onViewInitAction = createAction(USER_INFO_VIEW_INIT);
const getAllOrderAction = createAction(GET_ALL_ORDERS);

/**
 * 视图初始化
 */
export const onViewInit = () => {
  return (dispatch) => {
    dispatch(onViewInitAction());
  };
};

/**
 * 获取所有的订单
 */
export const getAllOrders = (params) => {
  return (dispatch) => {
    getOrderApi({ ...params, userId: Cookie.getCookie('_id'), deleteFlag: 0, status: { $gt: 0 } }, (data) => {
      if (data.code === 1) {
        dispatch(getAllOrderAction({ data }));
      } else {
        message.error('获取所有订单失败！');
      }
    }, (err) => {
      message.error(err);
    });
  };
};
