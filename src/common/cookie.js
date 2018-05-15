/**
 * cookie操作类
 */
/* eslint-disable */
class Cookie {
  static getCookie(name) {
    let arr;
    const reg = new RegExp('(^| )"+name+"=([^;]*)(;|$)');
    if (arr = document.cookie.match(reg)) {
      return decodeURIComponent(arr[2]);
    }
    return null;
  }
  static setCookie(name, value) {
    const Days = 30;
    const exp = new Date();
    exp.setTime(exp.getTime() + (Days * 24 * 60 * 60 * 1000));
    document.cookie = name + '=' + encodeURIComponent(value) + ';expires=' + exp.toGMTString() + '; path=/';
  }
  static deleteCookie(name) {
    const exp = new Date();
    exp.setTime(exp.getTime() - 1);
    const cval = this.getCookie(name);
    if (cval !== null) {
      document.cookie = name + '=' + cval + ';expires=' + exp.toGMTString();
    }
  }
}

export default Cookie;
/* eslint-disable */
