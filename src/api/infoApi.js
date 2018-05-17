/**
 * 文章页面所采用的接口api
 * Created by tianrenjie on 2018/5/15
 */
import ajaxRequest from '../common/ajaxRequest';

export const getInfoListApi = ajaxRequest.createAjax({
  method: 'GET',
  url: 'http://localhost:3000/info/getInfo',
});
