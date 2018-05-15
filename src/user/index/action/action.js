/**
 * 鲜花销售系统主页action类
 * Created by tianrenjie on 2018/5/15
 */
import { createAction } from 'redux-actions';
import _ from 'lodash';
import { message } from 'antd';
import {
  INDEX_VIEW_INIT,
} from '../constant/constant';

const onViewInitAction = createAction(INDEX_VIEW_INIT);

/**
 * 视图初始化
 */
export const onViewInit = () => {
  return (dispatch) => {
    dispatch(onViewInitAction());
  };
};
