/**
 * 文章页面所采用的接口api
 * Created by tianrenjie on 2018/5/15
 */
import ajaxRequest from '../common/ajaxRequest';

export const getInfoListApi = ajaxRequest.createAjax({
  method: 'GET',
  url: 'http://localhost:3000/info/getInfo',
});

export const addInfoApi = ajaxRequest.createAjax({
  method: 'POST',
  url: 'http://localhost:3000/info/addInfo',
});

export const updateInfoApi = ajaxRequest.createAjax({
  method: 'POST',
  url: 'http://localhost:3000/info/updateInfo',
});
