/**
 * 登录页面所采用的接口api
 * Created by tianrenjie on 2018/5/15
 */
import ajaxRequest from '../common/ajaxRequest';

export const loginApi = ajaxRequest.createAjax({
  method: 'GET',
  url: 'http://localhost:3000/user/validateUser',
});

export const updateUserApi = ajaxRequest.createAjax({
  method: 'POST',
  url: 'http://localhost:3000/user/updateUser',
});
