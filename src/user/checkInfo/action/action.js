/**
 * 鲜花销售系统订单页action类
 * Created by tianrenjie on 2018/5/16
 * */
import { createAction } from 'redux-actions';
import { message } from 'antd';
import {
  CHECK_INFO_VIEW_INIT,
  GET_ORDER,
  UPDATE_ORDER,
  ADD_ORDER,
} from '../constant/constant';
import { getOrderApi, addOrderApi, updateOrderApi } from '../../../api/orderApi';

const onViewInitAction = createAction(CHECK_INFO_VIEW_INIT);
const getOrderAction = createAction(GET_ORDER);
const updateOrderAction = createAction(UPDATE_ORDER);
const addOrderAction = createAction(ADD_ORDER);

/**
 * 视图初始化
 */
export const onViewInit = () => {
  return (dispatch) => {
    dispatch(onViewInitAction());
  };
};

/**
 * 获取订单
 */
export const getOrder = (params) => {
  return (dispatch) => {
    getOrderApi({ ...params, deleteFlag: 0, status: 0 }, (data) => {
      dispatch(getOrderAction({ data }));
    }, (err) => {
      message.error(err);
    });
  };
};

/**
 * 添加订单
 */
export const addOrder = (params) => {
  return (dispatch) => {
    addOrderApi(JSON.stringify({ ...params }), (data) => {
      if (data.code === 1) {
        dispatch(addOrderAction({ data }));
        getOrder({ ...params })(dispatch);
        message.success('订单提交成功！');
        location.href = '/pay';
      } else {
        message.error('订单添加失败！');
      }
    }, (err) => {
      message.error(err);
    });
  };
};

/**
 * 更新订单
 */
export const updateOrder = (params) => {
  return (dispatch) => {
    updateOrderApi(JSON.stringify({ ...params }), (data) => {
      if (data.code === 1) {
        dispatch(updateOrderAction({ data }));
        getOrder({ _id: params._id })(dispatch);
        message.success('订单生成成功！');
      } else {
        message.error('订单更新失败！');
      }
    }, (err) => {
      message.error(err);
    });
  };
};
