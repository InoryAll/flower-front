/**
 * 订单页面所采用的接口api
 * Created by tianrenjie on 2018/5/15
 */
import ajaxRequest from '../common/ajaxRequest';

export const getOrderApi = ajaxRequest.createAjax({
  method: 'GET',
  url: 'http://localhost:3000/order/getOrder',
});

export const addOrderApi = ajaxRequest.createAjax({
  method: 'POST',
  url: 'http://localhost:3000/order/addOrder',
});

export const updateOrderApi = ajaxRequest.createAjax({
  method: 'POST',
  url: 'http://localhost:3000/order/updateOrder',
});
