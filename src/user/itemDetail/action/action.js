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
  ADD_ITEM_COMMENT,
} from '../constant/constant';
import { getItemApi } from '../../../api/indexApi';
import { getCommentApi, addCommentApi } from '../../../api/itemApi';

const onViewInitAction = createAction(ITEM_DETAIL_VIEW_INIT);
const getSingleItemAction = createAction(GET_SINGLE_ITEM);
const getItemCommentAction = createAction(GET_ITEM_COMMENT);
const addItemCommentAction = createAction(ADD_ITEM_COMMENT);

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
export const getItemComment = (params) => {
  return (dispatch) => {
    getCommentApi({ ...params, deleteFlag: 0 }, (data) => {
      if (data.code === 1) {
        dispatch(getItemCommentAction({ data }));
      } else {
        message.error('获取商品评价信息失败！');
      }
    }, (err) => {
      message.error(err);
    });
  };
};

/**
 * 添加评价
 */
export const addItemComment = (params) => {
  return (dispatch) => {
    addCommentApi(JSON.stringify({ ...params }), (data) => {
      if (data.code === 1) {
        dispatch(addItemCommentAction({ data }));
        getItemComment({ itemId: params.itemId })(dispatch);
        message.success('评价成功！');
      } else {
        message.error('添加商品评价信息失败！');
      }
    }, (err) => {
      message.error(err);
    });
  };
};
