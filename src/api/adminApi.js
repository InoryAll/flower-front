/**
 * 管理员页面所采用的接口api
 * Created by tianrenjie on 2018/5/15
 */
import ajaxRequest from '../common/ajaxRequest';

export const getAdminApi = ajaxRequest.createAjax({
  method: 'GET',
  url: 'http://localhost:3000/admin/getAdmin',
});

export const getQuestionApi = ajaxRequest.createAjax({
  method: 'GET',
  url: 'http://localhost:3000/question/getQuestion',
});

export const getActionApi = ajaxRequest.createAjax({
  method: 'GET',
  url: 'http://localhost:3000/action/getAction',
});

export const addAdminApi = ajaxRequest.createAjax({
  method: 'POST',
  url: 'http://localhost:3000/admin/addAdmin',
});

export const updateAdminApi = ajaxRequest.createAjax({
  method: 'POST',
  url: 'http://localhost:3000/admin/updateAdmin',
});
