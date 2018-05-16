/**
 * 鲜花销售付款主页action类
 * Created by tianrenjie on 2018/5/15
 */
import { createAction } from 'redux-actions';
import {
  SHOPPING_PAY_VIEW_INIT,
} from '../constant/constant';

const onViewInitAction = createAction(SHOPPING_PAY_VIEW_INIT);

/**
 * 视图初始化
 */
export const onViewInit = () => {
  return (dispatch) => {
    dispatch(onViewInitAction());
  };
};
