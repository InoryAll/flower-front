/**
 * 鲜花销售系统完成页action类
 * Created by tianrenjie on 2018/5/15
 */
import { createAction } from 'redux-actions';
import { message } from 'antd';
import {
  SHOPPING_FINISH_VIEW_INIT,
  GET_RECOMMEND,
} from '../constant/constant';
import { getRecommendApi } from '../../../api/recommendApi';

const onViewInitAction = createAction(SHOPPING_FINISH_VIEW_INIT);
const getRecommendAction = createAction(GET_RECOMMEND);

/**
 * 视图初始化
 */
export const onViewInit = () => {
  return (dispatch) => {
    dispatch(onViewInitAction());
  };
};

/**
 * 获取推荐产品
 */
export const getRecommend = () => {
  return (dispatch) => {
    getRecommendApi({ deleteFlag: 0 }, (data) => {
      if (data.code === 1) {
        dispatch(getRecommendAction({ data }));
      } else {
        message.error('获取推荐产品失败');
      }
    }, (err) => {
      message.error(err);
    });
  };
};
