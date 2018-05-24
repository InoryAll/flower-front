/**
 * 鲜花销售系统后台工作记录页action类
 * Created by tianrenjie on 2018/5/16
 * */
import { createAction } from 'redux-actions';
import { message } from 'antd';
import {
  CONSOLE_WORKSHEET_VIEW_INIT,
  GET_WORKSHEET,
  ADD_WORKSHEET,
  UPDATE_WORKSHEET,
} from '../constant/constant';
import { getQuestionApi } from '../../../api/adminApi';
import { addQuestionApi, updateQuestionApi } from '../../../api/worksheetApi';

const onViewInitAction = createAction(CONSOLE_WORKSHEET_VIEW_INIT);
const getWorksheetAction = createAction(GET_WORKSHEET);
const addWorksheetAction = createAction(ADD_WORKSHEET);
const updateWorksheetAction = createAction(UPDATE_WORKSHEET);

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
export const getWorksheet = (params) => {
  return (dispatch) => {
    getQuestionApi({ ...params, deleteFlag: 0 }, (data) => {
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

/**
 * 新增工作记录
 */
export const addWorksheet = (params) => {
  return (dispatch) => {
    addQuestionApi(JSON.stringify({ ...params }), (data) => {
      if (data.code === 1) {
        dispatch(addWorksheetAction({ data }));
        message.success('工作记录添加成功！');
        getWorksheet({})(dispatch);
      } else {
        message.error('工作记录添加失败！');
      }
    }, (err) => {
      message.error(err);
    });
  };
};

/**
 * 更新工作记录
 */
export const updateWorksheet = (params) => {
  return (dispatch) => {
    updateQuestionApi(JSON.stringify({ condition: { _id: params._id }, obj: { ...params } }), (data) => {
      if (data.code === 1) {
        dispatch(updateWorksheetAction({ data }));
        message.success('工作记录修改成功！');
        getWorksheet({})(dispatch);
      } else {
        message.error('工作记录修改失败！');
      }
    }, (err) => {
      message.error(err);
    });
  };
};