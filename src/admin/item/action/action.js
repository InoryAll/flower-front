/**
 * 鲜花销售系统后台控制台产品页action类
 * Created by tianrenjie on 2018/5/16
 * */
import { createAction } from 'redux-actions';
import { message } from 'antd';
import {
  CONSOLE_ITEM_VIEW_INIT,
  ADD_ITEM,
  UPDATE_ITEM,
} from '../constant/constant';
import { addItemApi, updateItemApi } from '../../../api/itemApi';
import { getItem } from '../../../user/index/action/action';

const onViewInitAction = createAction(CONSOLE_ITEM_VIEW_INIT);
const addItemAction = createAction(ADD_ITEM);
const updateItemAction = createAction(UPDATE_ITEM);

/**
 * 视图初始化
 */
export const onViewInit = () => {
  return (dispatch) => {
    dispatch(onViewInitAction());
  };
};

/**
 * 添加商品
 */
export const addItem = (params) => {
  return (dispatch) => {
    addItemApi(JSON.stringify({ ...params }), (data) => {
      if (data.code === 1) {
        dispatch(addItemAction({ data }));
        message.success('添加产品成功!');
        getItem()(dispatch);
      } else {
        message.error('添加产品失败!');
      }
    }, (err) => {
      message.error(err);
    });
  };
};

/**
 * 更新商品
 */
export const updateItem = (params) => {
  return (dispatch) => {
    updateItemApi(JSON.stringify({ condition: { _id: params._id }, obj: { ...params } }), (data) => {
      if (data.code === 1) {
        dispatch(updateItemAction({ data }));
        message.success('修改产品成功!');
        getItem()(dispatch);
      } else {
        message.error('修改产品失败!');
      }
    }, (err) => {
      message.error(err);
    });
  };
};
