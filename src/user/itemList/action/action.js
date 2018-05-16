/**
 * 鲜花销售系统列表页action类
 * Created by tianrenjie on 2018/5/16
 * */
import { createAction } from 'redux-actions';
import _ from 'lodash';
import {
  ITEM_VIEW_INIT,
  FILT_ITEM_LIST,
} from '../constant/constant';

const onViewInitAction = createAction(ITEM_VIEW_INIT);
const onFiltItemListAction = createAction(FILT_ITEM_LIST);

/**
 * 视图初始化
 */
export const onViewInit = () => {
  return (dispatch) => {
    dispatch(onViewInitAction());
  };
};

/**
 * 关键词过滤
 */
export const filtItemList = (params) => {
  return (dispatch, getState) => {
    const state = getState();
    const items = state.shoppingItems.items;
    let filterData = [];
    if (!_.isEmpty(items.data)) {
      filterData = items.data.filter(item => params.every(param => JSON.stringify(item).indexOf(param) > -1));
      dispatch(onFiltItemListAction({ data: { ...items, data: filterData } }));
    }
  };
};
