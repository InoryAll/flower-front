/**
 * 鲜花销售系统产品页action类
 * Created by tianrenjie on 2018/5/16
 * */
import { createAction } from 'redux-actions';
import { message } from 'antd';
import {
  ITEM_DETAIL_VIEW_INIT,
  GET_SINGLE_ITEM,
  GET_ITEM_COMMENT,
} from '../constant/constant';
import { getItemApi } from '../../../api/indexApi';

const onViewInitAction = createAction(ITEM_DETAIL_VIEW_INIT);
const getSingleItemAction = createAction(GET_SINGLE_ITEM);
const getItemCommentAction = createAction(GET_ITEM_COMMENT);

/**
 * 视图初始化
 * */
export const onViewInit = () => {
  return (dispatch) => {
    dispatch(onViewInitAction());
  };
};

/**
 * 获取单个产品
 */
export const getSingleItem = (params) => {
  return (dispatch) => {
    getItemApi({ ...params }, (data) => {
      if (data.code === 1) {
        dispatch(getSingleItemAction({ data }));
      } else {
        message.error('获取产品信息失败！');
      }
    }, (err) => {
      message.error(err);
    });
  };
};

/**
 * 获取商品评价
 */
export const getItemComment = () => {
};
