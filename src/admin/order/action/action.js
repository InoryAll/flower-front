/**
 * 鲜花销售系统后台控制台页action类
 * Created by tianrenjie on 2018/5/16
 * */
import { createAction } from 'redux-actions';
import { message } from 'antd';
import {
  CONSOLE_ORDER_VIEW_INIT,
  UPDATE_CONSOLE_ORDER,
} from '../constant/contant';
import { updateOrderApi } from '../../../api/orderApi';
import { getAllOrders } from '../../../user/userInfo/action/action';

const onViewInitAction = createAction(CONSOLE_ORDER_VIEW_INIT);
const updateConsoleOrderAction = createAction(UPDATE_CONSOLE_ORDER);

/**
 * 视图初始化
 */
export const onViewInit = () => {
  return (dispatch) => {
    dispatch(onViewInitAction());
  };
};

/**
 * 更新订单
 */
export const updateConsoleOrder = (params) => {
  return (dispatch) => {
    updateOrderApi(JSON.stringify({ condition: { _id: params._id }, obj: { ...params } }), (data) => {
      if (data.code === 1) {
        dispatch(updateConsoleOrderAction({ data }));
        getAllOrders({})(dispatch);
        message.success('订单更新成功！');
      } else {
        message.error('订单更新失败！');
      }
    }, (err) => {
      message.error(err);
    });
  };
};
