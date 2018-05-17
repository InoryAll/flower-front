/**
 * 鲜花销售系统后台控制台主页
 * Created by tianrenjie on 2018/5/17
 */
import React, { PropTypes } from 'react';
import { Row, Col, Card, Table, Icon } from 'antd';
import { Link } from 'react-router';
import './Index.less';

class Index extends React.Component {
  static propTypes = {};
  render() {
    const columns = [{
      title: 'Name',
      dataIndex: 'name',
      key: 'name',
      render: text => <Link>{text}</Link>,
    }, {
      title: 'Age',
      dataIndex: 'age',
      key: 'age',
    }, {
      title: 'Address',
      dataIndex: 'address',
      key: 'address',
    }, {
      title: 'Action',
      key: 'action',
      render: (text, record) => (
        <span>
          <Link>Action 一 {record.name}</Link>
        </span>
      ),
    }];
    const data = [{
      key: '1',
      name: 'John Brown',
      age: 32,
      address: 'New York No. 1 Lake Park',
    }, {
      key: '2',
      name: 'Jim Green',
      age: 42,
      address: 'London No. 1 Lake Park',
    }, {
      key: '3',
      name: 'Joe Black',
      age: 32,
      address: 'Sidney No. 1 Lake Park',
    }];
    return (
      <div className="console-index">
        <Row>
          <Col span={12}>
            <div className="console-index-user-card">
              <Card className="console-index-card" title="用户列表" extra={<Link href="#">更多</Link>}>
                <Table
                  columns={columns}
                  dataSource={data}
                />
              </Card>
            </div>
          </Col>
          <Col span={12}>
            <div className="console-index-order-card">
              <Card className="console-index-card" title="订单列表" extra={<Link href="#">更多</Link>}>
                <Table
                  columns={columns}
                  dataSource={data}
                />
              </Card>
            </div>
          </Col>
        </Row>
        <Row>
          <Col span={24}>
            <div className="console-index-item-card">
              <Card className="console-index-card" title="商品列表" extra={<Link href="#">更多</Link>}>
                <Table
                  columns={columns}
                  dataSource={data}
                />
              </Card>
            </div>
          </Col>
        </Row>
      </div>
    );
  }
}

export default Index;
