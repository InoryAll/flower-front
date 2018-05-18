/**
 * 鲜花销售系统后台工作记录页action类
 * Created by tianrenjie on 2018/5/16
 * */
import { createAction } from 'redux-actions';
import { message } from 'antd';
import {
  CONSOLE_WORKSHEET_VIEW_INIT,
  GET_WORKSHEET,
} from '../constant/constant';
import { getQuestionApi } from '../../../api/adminApi';

const onViewInitAction = createAction(CONSOLE_WORKSHEET_VIEW_INIT);
const getWorksheetAction = createAction(GET_WORKSHEET);

/**
 * 视图初始化
 */
export const onViewInit = () => {
  return (dispatch) => {
    dispatch(onViewInitAction());
  };
};

/**
 * 获取工作记录列表
 */
export const getWorksheet = () => {
  return (dispatch) => {
    getQuestionApi({}, (data) => {
      if (data.code === 1) {
        dispatch(getWorksheetAction({ data }));
      } else {
        message.error('获取工作记录列表失败！');
      }
    }, (err) => {
      message.error(err);
    });
  };
};
