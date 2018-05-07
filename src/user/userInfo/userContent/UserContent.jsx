/**
 * 鲜花销售个人中心页主要内容
 * Created by tianrenjie on 2018/5/6
 */
import React, { PropTypes } from 'react';
import { Row, Col, Tabs, Avatar, Icon } from 'antd';
import { Link } from 'react-router';
import './UserContent.less';

const TabPane = Tabs.TabPane;
class UserContent extends React.Component {
  static propTypes = {};
  render() {
    return (
      <div className="usercontent">
        <Row>
          <Col>
            <div className="usercontent-info">
              <h3 className="usercontent-info-h3">我的商城</h3>
              <div className="usercontent-info-avatar">
                <Row>
                  <Col span={12}>
                    <span className="usercontent-info-avatar-icon">
                      <Avatar size="large" icon="user" />
                    </span>
                  </Col>
                  <Col span={12}>
                    <Link className="usercontent-info-avatar-edit">
                      <span className="usercontent-info-avatar-edit-icon">
                        <Icon type="edit" />
                      </span>
                      修改资料
                    </Link>
                  </Col>
                </Row>
              </div>
              <div className="usercontent-info-name">
                <span className="usercontent-info-name-span">H20180507121612</span>
              </div>
            </div>
            <div className="usercontent-tabs">
              <Tabs tabPosition={'left'}>
                <TabPane tab="基本信息" key="basic">基本信息</TabPane>
                <TabPane tab="订单列表" key="order">订单列表</TabPane>
              </Tabs>
            </div>
          </Col>
        </Row>
      </div>
    );
  }
}

export default UserContent;
