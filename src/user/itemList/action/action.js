/**
 * 鲜花销售系统列表页action类
 * Created by tianrenjie on 2018/5/16
 * */
import { createAction } from 'redux-actions';
import _ from 'lodash';
import {
  ITEM_VIEW_INIT,
  FILT_ITEM_LIST,
  PAGENATION_ITEM_LIST,
} from '../constant/constant';

const onViewInitAction = createAction(ITEM_VIEW_INIT);
const onFiltItemListAction = createAction(FILT_ITEM_LIST);
const onPageItemListAction = createAction(PAGENATION_ITEM_LIST);

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
    if (!_.isEmpty(items.data) && !_.isEmpty(params[0])) {
      filterData = items.data.filter(item => params.every(param => JSON.stringify(item).indexOf(param) > -1));
    }
    if (_.isEmpty(params[0])) {
      filterData = items.data;
    }
    const formatData = { ...items, data: filterData };
    dispatch(onFiltItemListAction({ data: formatData }));
  };
};

/**
 * 翻页变化
 */
export const pagenationItemList = (params) => {
  return (dispatch, getState) => {
    const state = getState();
    const itemList = state.itemList;
    if (!_.isEmpty(itemList.data)) {
      dispatch(onPageItemListAction({ data: { ...itemList,
        totalPage: Math.ceil(itemList.data.length / params.pageSize),
        currentPage: params.currentPage,
        pageSize: params.pageSize } }));
    }
  };
};
