/**
 * 鲜花销售系统后台控制台主页
 * Created by tianrenjie on 2018/5/17
 */
import React, { PropTypes } from 'react';
import { Layout, Menu, Icon, Dropdown, Modal, notification } from 'antd';
import { Link, browserHistory } from 'react-router';
import _ from 'lodash';
import { connect } from 'react-redux';
import { adminSelector } from '../login/selector/selector';
import { onViewInit } from './action/action';
import './Console.less';

const { Header, Sider, Content } = Layout;
class Console extends React.Component {
  static propTypes = {
    children: PropTypes.object.isRequired,
    admin: PropTypes.object.isRequired,
    onViewInit: PropTypes.func.isRequired,
  };
  state = {
    collapsed: false,
  };
  toggle = () => {
    this.setState({
      collapsed: !this.state.collapsed,
    });
  };
  componentWillMount() {
    this.props.onViewInit();
    if (_.isEmpty(this.props.admin._id)) {
      Modal.error({
        title: '错误',
        content: '您还未登录，请登录后在操作！',
        onOk() {
          setTimeout(() => {
            browserHistory.push('/admin/login');
          }, 300);
        },
      });
    } else {
      setTimeout(() => {
        notification.success({
          message: `欢迎您，${this.props.admin.username}用户`,
          description: '您已进入鲜花销售系统后台，如有问题请联系开发人员',
          placement: 'bottomRight',
        });
      }, 600);
    }
  }
  render() {
    const menu = (
      <Menu>
        <Menu.Item>
          <Link to="/admin/login" className="header-right-dropdown-item">切换</Link>
        </Menu.Item>
        <Menu.Divider />
        <Menu.Item>
          <Link to="/admin/login" className="header-right-dropdown-item">注销</Link>
        </Menu.Item>
      </Menu>
    );
    return (
      <div className="console">
        <Layout className="console-layout">
          <Sider
            trigger={null}
            collapsible
            collapsed={this.state.collapsed}
          >
            <div className="admin-logo">
              <Link to="/admin/console">
                <Icon type="home" className="admin-logo-icon" />
                <span className="admin-logo-title">{this.state.collapsed ? '' : '鲜花销售管理控制台'}</span>
              </Link>
            </div>
            <Menu theme="dark" mode="inline">
              <Menu.Item key="1">
                <Link to="/admin/console/user">
                  <Icon type="user" />
                  <span>用户管理</span>
                </Link>
              </Menu.Item>
              <Menu.Item key="2">
                <Link to="/admin/console/item">
                  <Icon type="inbox" />
                  <span>产品管理</span>
                </Link>
              </Menu.Item>
              <Menu.Item key="3">
                <Link to="/admin/console/order">
                  <Icon type="red-envelope" />
                  <span>订单管理</span>
                </Link>
              </Menu.Item>
              <Menu.Item key="4">
                <Link to="/admin/console/info">
                  <Icon type="message" />
                  <span>文案管理</span>
                </Link>
              </Menu.Item>
              <Menu.Item key="5">
                <Link to="/admin/console/worksheet">
                  <Icon type="edit" />
                  <span>工作记录</span>
                </Link>
              </Menu.Item>
              <Menu.Item key="6">
                <Link to="/admin/console/action">
                  <Icon type="ellipsis" />
                  <span>操作记录</span>
                </Link>
              </Menu.Item>
            </Menu>
          </Sider>
          <Layout>
            <Header style={{ background: '#fff', padding: 0 }}>
              <Icon
                className="trigger"
                type={this.state.collapsed ? 'menu-unfold' : 'menu-fold'}
                onClick={this.toggle}
              />
              <div className="header-right">
                <Dropdown overlay={menu}>
                  <Link className="ant-dropdown-link header-right-link">
                    欢迎你，{this.props.admin.username}用户
                  </Link>
                </Dropdown>
              </div>
            </Header>
            <Content>
              {this.props.children}
            </Content>
          </Layout>
        </Layout>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    admin: adminSelector(state),
  };
};

const mapDispatchToProps = {
  onViewInit,
};

export default connect(mapStateToProps, mapDispatchToProps)(Console);
