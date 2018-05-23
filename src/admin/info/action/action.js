/**
 * 鲜花销售系统后台控制台页action类
 * Created by tianrenjie on 2018/5/16
 * */
import { createAction } from 'redux-actions';
import { message } from 'antd';
import {
  CONSOLE_INFO_VIEW_INIT,
  ADD_INFO,
  UPDATE_INFO,
} from '../constant/constant';
import { addInfoApi, updateInfoApi } from '../../../api/infoApi';
import { getInfoList } from '../../../user/info/action/action';

const onViewInitAction = createAction(CONSOLE_INFO_VIEW_INIT);
const addInfoAction = createAction(ADD_INFO);
const updateInfoAction = createAction(UPDATE_INFO);

/**
 * 视图初始化
 * */
export const onViewInit = () => {
  return (dispatch) => {
    dispatch(onViewInitAction());
  };
};

/**
 * 添加文章
 */
export const addInfo = (params) => {
  return (dispatch) => {
    addInfoApi(JSON.stringify({ ...params }), (data) => {
      if (data.code === 1) {
        dispatch(addInfoAction({ data }));
        message.success('添加文章成功!');
        getInfoList({})(dispatch);
      } else {
        message.error('添加文章失败!');
      }
    }, (err) => {
      message.error(err);
    });
  };
};

/**
 * 更新文章
 */
export const updateInfo = (params) => {
  return (dispatch) => {
    updateInfoApi(JSON.stringify({ ...params }), (data) => {
      if (data.code === 1) {
        dispatch(updateInfoAction({ data }));
        message.success('修改文章成功!');
        getInfoList({})(dispatch);
      } else {
        message.error('修改文章失败!');
      }
    }, (err) => {
      message.error(err);
    });
  };
};
