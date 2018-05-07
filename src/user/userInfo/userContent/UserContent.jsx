/**
 * 鲜花销售个人中心页主要内容
 * Created by tianrenjie on 2018/5/6
 */
import React, { PropTypes } from 'react';
import { Row, Col, Tabs, Avatar, Icon } from 'antd';
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
          <Col span={6}>
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
          <Col span={18}>
            <div className="usercontent-pannel">
              <If condition={ this.state.activeKey === 'basic' }>
                <div className="usercontent-pannel-basic">....</div>
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
