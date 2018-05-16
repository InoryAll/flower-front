/**
 * 鲜花销售系统完成页reducer类
 * Created by tianrenjie on 2018/5/15
 */
 import {
   SHOPPING_FINISH_VIEW_INIT,
   GET_RECOMMEND,
 } from '../constant/constant';

 const initState = {
   code: undefined,
   message: undefined,
   data: undefined,
 };

 export function recommend(state = initState, action) {
   switch (action.type) {
     case SHOPPING_FINISH_VIEW_INIT:
       return state;
     case GET_RECOMMEND:
       return { ...state, ...initState, ...action.payload.data };
     default:
       return state;
   }
 }
