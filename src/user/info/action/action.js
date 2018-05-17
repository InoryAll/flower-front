/**
 * 鲜花销售系统资讯页action类
 * Created by tianrenjie on 2018/5/16
 * */
import { createAction } from 'redux-actions';
import { message } from 'antd';
import {
  INFO_VIEW_INIT,
  GET_INFO_LIST,
} from '../constant/constant';
import { getInfoListApi } from '../../../api/infoApi';

const onViewInitAction = createAction(INFO_VIEW_INIT);
const getInfoAction = createAction(GET_INFO_LIST);

/**
 * 视图初始化
 */
export const onViewInit = () => {
  return (dispatch) => {
    dispatch(onViewInitAction());
  };
};

/**
 * 获取文章列表
 */
export const getInfoList = (params) => {
  return (dispatch) => {
    getInfoListApi({ ...params, deleteFlag: 0 }, (data) => {
      if (data.code === 1) {
        dispatch(getInfoAction({ data }));
      } else {
        message.error('获取文章失败！');
      }
    }, (err) => {
      message.error(err);
    });
  };
};
