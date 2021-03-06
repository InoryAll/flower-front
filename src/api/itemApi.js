/**
 * 商品页面所采用的接口api
 * Created by tianrenjie on 2018/5/15
 */
import ajaxRequest from '../common/ajaxRequest';

export const getCommentApi = ajaxRequest.createAjax({
  method: 'GET',
  url: 'http://localhost:3000/comment/getComment',
});

export const addCommentApi = ajaxRequest.createAjax({
  method: 'POST',
  url: 'http://localhost:3000/comment/addComment',
});

export const addItemApi = ajaxRequest.createAjax({
  method: 'POST',
  url: 'http://localhost:3000/item/addItem',
});

export const updateItemApi = ajaxRequest.createAjax({
  method: 'POST',
  url: 'http://localhost:3000/item/updateItem',
});
