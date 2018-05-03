/**
 * 鲜花销售注册页主体
 * Created by tianrenjie on 2018/5/3
 */
import React, { PropTypes } from 'react';
import { Row, Col, Tabs } from 'antd';
import './RegeditBox.less';

const TabPane = Tabs.TabPane;
class RegeditBox extends React.Component {
  static propTypes = {};
  handleTabClick = (key) => {
    console.log(key);
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
                        <form>
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
                              <button className="regeditbox-btn-regedit" type="button">立即注册</button>
                            </div>
                          </div>
                        </form>
                      </TabPane>
                      <TabPane tab="手机注册" key="2">Content of Tab Pane 2</TabPane>
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
