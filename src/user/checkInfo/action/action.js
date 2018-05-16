/**
 * 鲜花销售系统订单页action类
 * Created by tianrenjie on 2018/5/16
 * */
import { createAction } from 'redux-actions';
import {
  CHECK_INFO_VIEW_INIT,
} from '../constant/constant';

const onViewInitAction = createAction(CHECK_INFO_VIEW_INIT);

/**
 * 视图初始化
 */
export const onViewInit = () => {
  return (dispatch) => {
    dispatch(onViewInitAction());
  };
};
