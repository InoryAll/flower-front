/**
 * 鲜花销售个人中心页主要内容
 * Created by tianrenjie on 2018/5/6
 */
import React, { PropTypes } from 'react';
import { Row, Col, Tabs, Avatar, DatePicker } from 'antd';
import { If } from 'jsx-control-statements';
import './UserContent.less';

const TabPane = Tabs.TabPane;
class UserContent extends React.Component {
  static propTypes = {};
  state = {
    activeKey: 'basic',
  };
  handleTabChange = (value) => {
    this.setState({
      activeKey: value,
    });
  };
  render() {
    return (
      <div className="usercontent">
        <Row>
          <Col span={4}>
            <div className="usercontent-info">
              <h3 className="usercontent-info-h3">我的商城</h3>
              <div className="usercontent-info-avatar">
                <Row>
                  <Col>
                    <span className="usercontent-info-avatar-icon">
                      <Avatar size="large" icon="user" />
                    </span>
                  </Col>
                </Row>
              </div>
              <div className="usercontent-info-name">
                <span className="usercontent-info-name-span">H20180507121612</span>
              </div>
            </div>
            <div className="usercontent-tabs">
              <Tabs tabPosition={'left'} onChange={this.handleTabChange}>
                <TabPane tab="基本信息" key="basic" />
                <TabPane tab="订单列表" key="order" />
              </Tabs>
            </div>
          </Col>
          <Col span={20}>
            <div className="usercontent-pannel">
              <If condition={ this.state.activeKey === 'basic' }>
                <div className="usercontent-pannel-basic">
                  <Row>
                    <Col>
                      <h3 className="usercontent-pannel-basic-h3">基本信息</h3>
                      <div className="usercontent-pannel-basic-split" />
                    </Col>
                  </Row>
                  <Row>
                    <Col>
                      <form>
                        <div className="usercontent-pannel-basic-form">
                          <div className="form-content">
                            <div className="form-item">
                              <label className="form-item-label" htmlFor="name">用户名称：</label>
                              <input className="form-item-input" value="test" readOnly="true" type="text" id="name" name="name" />
                            </div>
                            <div className="form-item">
                              <label className="form-item-label" htmlFor="email">邮箱：</label>
                              <input className="form-item-input" type="text" id="email" name="email" />
                            </div>
                            <div className="form-item">
                              <label className="form-item-label" htmlFor="realName">真实姓名：</label>
                              <input className="form-item-input" type="text" id="realName" name="realName" />
                            </div>
                            <div className="form-item">
                              <label className="form-item-label" htmlFor="sex">性别：</label>
                              <label htmlFor="male" className="form-item-radio-label">
                                <input id="male" type="radio" name="sex" value="male" className="form-item-radio-input" />男
                              </label>
                              <label htmlFor="female" className="form-item-radio-label">
                                <input id="female" type="radio" name="sex" value="female" className="form-item-radio-input" />女
                              </label>
                            </div>
                            <div className="form-item">
                              <label className="form-item-label" htmlFor="birthday">生日：</label>
                              <DatePicker
                                id="birthday"
                                showTime
                                format="YYYY-MM-DD HH:mm:ss"
                                placeholder=""
                                onChange={(value, dateString) => {}}
                                onOk={(value) => {}}
                              />
                            </div>
                            <div className="form-item">
                              <label className="form-item-label" htmlFor="address">所在地区：</label>
                              <input className="form-item-input address" type="text" id="address" name="address" />
                            </div>
                            <div className="form-item">
                              <label className="form-item-label" htmlFor="qq">QQ：</label>
                              <input className="form-item-input" type="text" id="qq" name="qq" />
                            </div>
                          </div>
                          <div className="usercontent-pannel-basic-form-btn">
                            <button className="usercontent-pannel-basic-form-btn-update" type="button">保存修改</button>
                          </div>
                        </div>
                      </form>
                    </Col>
                  </Row>
                </div>
              </If>
              <If condition={ this.state.activeKey === 'order' }>
                <div className="usercontent-pannel-order">....</div>
              </If>
            </div>
          </Col>
        </Row>
      </div>
    );
  }
}

export default UserContent;
