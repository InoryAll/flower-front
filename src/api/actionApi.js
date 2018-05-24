/**
 * 管理员页面所采用的接口api
 * Created by tianrenjie on 2018/5/15
 */
import ajaxRequest from '../common/ajaxRequest';

export const addActionApi = ajaxRequest.createAjax({
  method: 'POST',
  url: 'http://localhost:3000/action/addAction',
});

export const updateActionApi = ajaxRequest.createAjax({
  method: 'POST',
  url: 'http://localhost:3000/action/updateAction',
});
