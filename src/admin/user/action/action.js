/**
 * 鲜花销售系统后台控制台产品页action类
 * Created by tianrenjie on 2018/5/16
 * */
import { createAction } from 'redux-actions';
import { CONSOLE_USER_VIEW_INIT } from '../constant/constant';

const onViewInitAction = createAction(CONSOLE_USER_VIEW_INIT);

/**
 * 视图初始化
 */
export const onVIewInit = () => {
  return (dispatch) => {
    dispatch(onViewInitAction());
  };
};
