/**
 * 鲜花销售系统后台控制台产品页action类
 * Created by tianrenjie on 2018/5/16
 * */
import { createAction } from 'redux-actions';
import { CONSOLE_ITEM_VIEW_INIT } from '../constant/constant';

const onViewInitAction = createAction(CONSOLE_ITEM_VIEW_INIT);

/**
 * 视图初始化
 */
export const onViewInit = () => {
  return (dispatch) => {
    dispatch(onViewInitAction());
  };
};
