/**
 * ajax请求类
 * 封装了ajax的请求方式（基于jquery）
 */
import $ from 'jquery';

class ajaxRequest {
  static createAjax(options) {
    return (payload, successCallback, errorCallback) => {
      $.ajax({
        url: options.url,
        type: options.method,
        data: payload,
        contentType: 'application/json; charset=utf-8',
        success: (data) => {
          successCallback(data);
        },
        error: (err) => {
          errorCallback(err);
        },
      });
    };
  }
}

export default ajaxRequest;
