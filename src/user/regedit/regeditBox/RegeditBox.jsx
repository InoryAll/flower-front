/**
 * 鲜花销售注册页主体
 * Created by tianrenjie on 2018/5/3
 */
import React, { PropTypes } from 'react';
import { Link } from 'react-router';
import $ from 'jquery';
import { Row, Col, Tabs, message } from 'antd';
import _ from 'lodash';
import './RegeditBox.less';

const TabPane = Tabs.TabPane;
class RegeditBox extends React.Component {
  static propTypes = {
    onRegedit: PropTypes.func.isRequired,
  };
  handleTabClick = (key) => {
    console.log(key);
  };
  handleRegeditNormal = () => {
    const errors = [];
    var userObj = {
      username: $('#form-1 #username').val(),
      password: $('#form-1 #password').val(),
      repassword: $('#form-1 #repassword').val(),
      email: $('#form-1 #email').val(),
      remember: $('#form-1 #remember').prop('checked'),
    };
    if (_.isEmpty(userObj.username)) {
      errors.push('用户名不能为空！');
    } else if (_.isEmpty(userObj.password)) {
      errors.push('密码不能为空！');
    } else if (!_.isEqual(userObj.password, userObj.repassword)) {
      errors.push('两次输入的密码不一致！');
    } else if (!/^\w+@[a-z0-9]+\.[a-z]{2,4}$/g.test(userObj.email)) {
      errors.push('邮箱格式不正确！');
    } else if (!userObj.remember) {
      errors.push('请先同意协议！');
    }
    if (errors.length > 0) {
      message.error(errors.join(','));
    } else {
      this.props.onRegedit(userObj);
    }
  };
  handleRegeditQuick = () => {
    const errors = [];
    var userObj = {
      username: $('#form-2 #phone').val(),
      password: $('#form-2 #password').val(),
      tel: $('#form-2 #phone').val(),
      validate: $('#form-2 #validate').val(),
    };
    if (_.isEmpty(userObj.username)) {
      errors.push('手机号不能为空！');
    } else if (_.isEmpty(userObj.validate)) {
      errors.push('手机验证码不能为空！');
    }
    if (errors.length > 0) {
      message.error(errors.join(','));
    } else {
      this.props.onRegedit(userObj);
    }
  };
  render() {
    return (
      <div className="regeditbox">
        <Row>
          <Col span={20} offset={2}>
            <div className="regeditbox-dialog">
              <Row>
                <Col span={16}>
                  <div className="regeditbox-dialog-left">
                    <Tabs defaultActiveKey="1" onChange={this.handleTabClick}>
                      <TabPane tab="账号注册" key="1">
                        <form id="form-1">
                          <div className="form-content">
                            <div className="username form-content-item">
                              <label htmlFor="username" className="form-content-item-label">用户名：</label>
                              <input className="form-content-item-input" type="text" placeholder="请使用3-15个中、英文、数字及“-”符号" name="username" id="username" />
                            </div>
                            <div className="password form-content-item">
                              <label htmlFor="password" className="form-content-item-label">设置密码：</label>
                              <input className="form-content-item-input" type="password" placeholder="6-20个大小写英文字母、符号或数字" name="password" id="password" />
                            </div>
                            <div className="repassword form-content-item">
                              <label htmlFor="repassword" className="form-content-item-label">确认密码：</label>
                              <input className="form-content-item-input" type="password" placeholder="请再次输入密码" name="repassword" id="repassword" />
                            </div>
                            <div className="email form-content-item">
                              <label htmlFor="email" className="form-content-item-label">邮箱：</label>
                              <input className="form-content-item-input" type="text" placeholder="输入常用邮箱作为验证及找回密码使用" name="email" id="email" />
                            </div>
                            <div className="form-content-check-box">
                              <label htmlFor="remember" className="form-content-check-box-label">
                                <input type="checkbox" className="form-content-checkbox" name="remember" id="remember" />
                                阅读并同意《服务协议》
                              </label>
                            </div>
                            <div className="regeditbox-btn">
                              <button className="regeditbox-btn-regedit" type="button" onClick={this.handleRegeditNormal}>立即注册</button>
                            </div>
                          </div>
                        </form>
                      </TabPane>
                      <TabPane tab="手机注册" key="2">
                        <form id="form-2">
                          <div className="form-content">
                            <div className="phone form-content-item">
                              <label htmlFor="phone" className="form-content-item-label">手机号：</label>
                              <input className="form-content-item-input" type="text" placeholder="请输入手机号码" name="phone" id="phone" />
                            </div>
                            <div className="validate form-content-item">
                              <label htmlFor="validate" className="form-content-item-label">手机验证：</label>
                              <input className="form-content-item-input" type="text" placeholder="请输入手机号码" name="validate" id="validate" />
                            </div>
                            <div className="form-content-text">
                              <p className="text-p">确保上手机号输入正确，点击<Link className="text-btn" to="#">发送短信验证</Link>，并将您手机短信所接收到的“6位动态码”输入到上方短信验证</p>
                            </div>
                            <div className="password form-content-item">
                              <label htmlFor="password" className="form-content-item-label">设置密码：</label>
                              <input className="form-content-item-input" type="password" placeholder="6-20个大小写英文字母、符号或数字" name="password" id="password" />
                            </div>
                            <div className="regeditbox-btn">
                              <button className="regeditbox-btn-regedit" type="button" onClick={this.handleRegeditQuick}>立即注册</button>
                            </div>
                          </div>
                        </form>
                      </TabPane>
                    </Tabs>
                  </div>
                </Col>
                <Col span={8}>
                  <div className="regeditbox-dialog-right">
                    <h3 className="title">注册之后您可以</h3>
                    <ul className="list">
                      <li className="list-li"><span className="list-icon" />购买商品支付订单</li>
                      <li className="list-li"><span className="list-icon" />收藏商品关注店铺</li>
                      <li className="list-li"><span className="list-icon" />安全交易诚信无忧</li>
                      <li className="list-li"><span className="list-icon" />积分获取优惠购物</li>
                      <li className="list-li"><span className="list-icon" />会员等级享受特权</li>
                      <li className="list-li"><span className="list-icon" />评价晒单站外分享</li>
                    </ul>
                  </div>
                </Col>
              </Row>
            </div>
          </Col>
        </Row>
      </div>
    );
  }
}

export default RegeditBox;
