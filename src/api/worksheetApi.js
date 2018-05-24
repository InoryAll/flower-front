/**
 * 管理员页面所采用的接口api
 * Created by tianrenjie on 2018/5/15
 */
import ajaxRequest from '../common/ajaxRequest';

export const addQuestionApi = ajaxRequest.createAjax({
  method: 'POST',
  url: 'http://localhost:3000/question/addQuestion',
});

export const updateQuestionApi = ajaxRequest.createAjax({
  method: 'POST',
  url: 'http://localhost:3000/question/updateQuestion',
});

