/**
 * 鲜花销售系统后台控制台主页
 * Created by tianrenjie on 2018/5/17
 */
import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import _ from 'lodash';
import moment from 'moment';
import { Row, Col, Card, Table } from 'antd';
import { onViewInit, getAdminList, getUserList } from './action/action';
import { adminListSelector, userListSelector } from './selector/selector';
import { getItem } from '../../user/index/action/action';
import { getAllOrders } from '../../user/userInfo/action/action';
import { itemListSelector } from '../../user/itemList/selector/selector';
import { orderListSelector } from '../../user/userInfo/selector/selector';
import { adminSelector } from '../login/selector/selector';
import './Index.less';

class Index extends React.Component {
  static propTypes = {
    adminList: PropTypes.object.isRequired,
    userList: PropTypes.object.isRequired,
    itemList: PropTypes.object.isRequired,
    orderList: PropTypes.object.isRequired,
    admin: PropTypes.object.isRequired,
    onViewInit: PropTypes.func.isRequired,
    getAdminList: PropTypes.func.isRequired,
    getUserList: PropTypes.func.isRequired,
    getItem: PropTypes.func.isRequired,
    getAllOrders: PropTypes.func.isRequired,
  };
  componentWillMount() {
    this.props.onViewInit();
    this.props.getAdminList({});
    this.props.getUserList({});
    this.props.getItem({});
    this.props.getAllOrders();
  }
  render() {
    const { adminList, userList, itemList, orderList } = this.props;
    const userColumns = [{
      title: '用户名',
      dataIndex: 'username',
      key: 'username',
    }, {
      title: '邮箱',
      dataIndex: 'email',
      key: 'email',
    }, {
      title: '角色',
      dataIndex: 'permission',
      key: 'permission',
      render: (text, record) => {
        return parseInt(text) > 0 ? '管理员' : '普通用户';
      },
    }, {
      title: '标志',
      dataIndex: 'deleteFlag',
      key: 'deleteFlag',
      render: (text, record) => {
        return parseInt(text) === 0 ? '正常' : '已删除';
      },
    }];
    const itemColumns = [{
      title: '产品id',
      dataIndex: '_id',
      key: '_id',
    }, {
      title: '预览图',
      dataIndex: 'url',
      key: 'url',
      render: (text, record) => {
        return <img src={text} alt="花之韵" className="console-index-img" />;
      },
    }, {
      title: '产品名称',
      dataIndex: 'name',
      key: 'name',
    }, {
      title: '价格',
      dataIndex: 'nowPrice',
      key: 'nowPrice',
    }, {
      title: '标志',
      dataIndex: 'deleteFlag',
      key: 'deleteFlag',
      render: (text, record) => {
        return parseInt(text) === 0 ? '正常' : '已删除';
      },
    }];
    const orderColumns = [{
      title: '订单id',
      dataIndex: '_id',
      key: '_id',
    }, {
      title: '用户',
      dataIndex: 'userName',
      key: 'userName',
    }, {
      title: '送货日期',
      dataIndex: 'date',
      key: 'date',
    }, {
      title: '订单状态',
      dataIndex: 'status',
      key: 'status',
      render: (text, record) => {
        switch (text) {
          case 1:
            return '已付款';
          default:
            return '未知状态';
        }
      },
    }];
    let userData = [];
    let itemData = [];
    let orderData = [];
    if (!_.isEmpty(adminList) && !_.isEmpty(adminList.data) && !_.isEmpty(userList) && !_.isEmpty(userList.data)) {
      userData = adminList.data.concat(userList.data);
    }
    if (!_.isEmpty(itemList) && !_.isEmpty(itemList.data)) {
      itemData = itemList.data;
    }
    if (!_.isEmpty(orderList) && !_.isEmpty(orderList.data)) {
      orderData = orderList.data;
    }
    return (
      <div className="console-index">
        <Row>
          <Col span={12}>
            <div className="console-index-user-card">
              <Card className="console-index-card" title="用户列表">
                <Table
                  columns={userColumns}
                  dataSource={userData}
                />
              </Card>
            </div>
          </Col>
          <Col span={12}>
            <div className="console-index-order-card">
              <Card className="console-index-card" title="订单列表">
                <Table
                  columns={orderColumns}
                  dataSource={orderData}
                />
              </Card>
            </div>
          </Col>
        </Row>
        <Row>
          <Col span={24}>
            <div className="console-index-item-card">
              <Card className="console-index-card" title="商品列表">
                <Table
                  columns={itemColumns}
                  dataSource={itemData}
                />
              </Card>
            </div>
          </Col>
        </Row>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    adminList: adminListSelector(state),
    userList: userListSelector(state),
    itemList: itemListSelector(state),
    orderList: orderListSelector(state),
    admin: adminSelector(state),
  };
};

const mapDispatchToProps = {
  onViewInit,
  getAdminList,
  getUserList,
  getItem,
  getAllOrders,
};

export default connect(mapStateToProps, mapDispatchToProps)(Index);
