/**
 * 鲜花销售购物车页详细
 * Created by tianrenjie on 2018/5/6
 */
import React, { PropTypes } from 'react';
import { Row, Col, Table, InputNumber } from 'antd';
import { Link } from 'react-router';
import img from '../../../../static/img/itemList/1.jpg';
import './ShoppingList.less';

class ShoppingList extends React.Component {
  static propTypes = {};
  onNumberChange = (value) => {
    console.log(value);
  };
  handleDelete = () => {
  };
  render() {
    const columns = [{
      title: '商品',
      dataIndex: 'item',
      key: 'item',
      render: (text, record) => {
        return (
          <div className="shoppinglist-table-item clearfix">
            <img src={record.url} alt="花之韵" className="shoppinglist-table-item-img" />
            <Link to="" className="shoppinglist-table-item-link">{record.name}</Link>
          </div>
        );
      },
    }, {
      title: '单价(元)',
      dataIndex: 'price',
      key: 'price',
    }, {
      title: '数量',
      dataIndex: 'count',
      key: 'count',
      render: (text, record) => {
        return (<InputNumber min={1} max={10} defaultValue={record.count} onChange={this.onNumberChange} />);
      },
    }, {
      title: '小计(元)',
      dataIndex: 'singleTotal',
      key: 'singleTotal',
    }, {
      title: '操作',
      key: 'action',
      render: (text, record) => (
        <Link className="shoppinglist-table-delete" onClick={this.handleDelete}>删除</Link>
      ),
    }];

    const data = [{
      key: '1',
      url: img,
      name: '思念是一种病',
      price: '169.00',
      count: 1,
    }];
    return (
      <div className="shoppinglist">
        <Row>
          <Col>
            <div className="shoppinglist-title">
              <h3 className="shoppinglist-title-h3">我的购物车</h3>
              <p className="shoppinglist-title-p">查看购物车商品清单，增加减少商品数量，并勾选想要的商品进入下一步操作。</p>
            </div>
          </Col>
        </Row>
        <Row>
          <Col>
            <div className="shoppinglist-table">
              <Table
                columns={columns}
                dataSource={data}
                pagination={false}
              />
              <div className="shoppinglist-table-total">
                商品总价（不含运费）<span className="shoppinglist-table-total-price">169.00</span>元
              </div>
            </div>
          </Col>
        </Row>
        <Row>
          <Col>
            <div className="shoppinglist-next clearfix">
              <Link className="shoppinglist-next-btn">
                下一步，填写核对购物信息
              </Link>
            </div>
          </Col>
        </Row>
      </div>
    );
  }
}

export default ShoppingList;
