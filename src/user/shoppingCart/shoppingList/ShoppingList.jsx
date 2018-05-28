/**
 * 鲜花销售购物车页详细
 * Created by tianrenjie on 2018/5/6
 */
import React, { PropTypes } from 'react';
import { Row, Col, Table, InputNumber } from 'antd';
import _ from 'lodash';
import { Link } from 'react-router';
import img from '../../../../static/img/itemList/1.jpg';
import './ShoppingList.less';

class ShoppingList extends React.Component {
  static propTypes = {
    cart: PropTypes.object.isRequired,
    selectCarts: PropTypes.object.isRequired,
    deleteGood: PropTypes.func.isRequired,
    onSelect: PropTypes.func.isRequired,
  };
  state = {
    value: 1,
    selectedRows: [],
  };
  onNumberChange = (value) => {
    console.log(value);
    this.setState({
      value,
    });
  };
  handleDelete = (item) => {
    this.props.deleteGood({ ...item });
  };
  handleNext = () => {

  };
  render() {
    const { cart } = this.props;
    let totalPrice = 0;
    if (!_.isEmpty(this.state.selectedRows)) {
      this.state.selectedRows.map((item, index) => {
        totalPrice += parseFloat(item.itemPrice.split('￥')[1]) * parseInt(item.count);
        return true;
      });
    }
    const columns = [{
      title: '商品',
      dataIndex: 'item',
      key: 'item',
      render: (text, record) => {
        return (
          <div className="shoppinglist-table-item clearfix">
            <img src={record.url} alt="花之韵" className="shoppinglist-table-item-img" />
            <Link to="" className="shoppinglist-table-item-link">{record.itemName}</Link>
          </div>
        );
      },
    }, {
      title: '单价(元)',
      dataIndex: 'itemPrice',
      key: 'itemPrice',
      render: (text) => {
        return parseFloat(text.split('￥')[1]).toFixed(2);
      },
    }, {
      title: '数量',
      dataIndex: 'count',
      key: 'count',
      render: (text, record) => {
        return (<InputNumber min={1} max={10} readOnly={true} defaultValue={record.count} onChange={this.onNumberChange} />);
      },
    }, {
      title: '小计(元)',
      dataIndex: 'itemTotalPrice',
      key: 'itemTotalPrice',
      render: (text) => {
        return parseFloat(text.split('￥')[1]).toFixed(2);
      },
    }, {
      title: '操作',
      key: 'action',
      render: (text, record) => (
        <Link className="shoppinglist-table-delete" onClick={() => { this.handleDelete(record); }}>删除</Link>
      ),
    }];
    const rowSelection = {
      onChange: (selectedRowKeys, selectedRows) => {
        this.setState({
          selectedRows,
        });
        this.props.onSelect([...selectedRows]);
      },
      getCheckboxProps: record => ({
        disabled: record.name === 'Disabled User', // Column configuration not to be checked
        name: record.name,
      }),
    };
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
                dataSource={cart.data || []}
                rowSelection={rowSelection}
                pagination={false}
              />
              <div className="shoppinglist-table-total">
                商品总价（不含运费）<span className="shoppinglist-table-total-price">{totalPrice.toFixed(2)}</span>元
              </div>
            </div>
          </Col>
        </Row>
        <Row>
          <Col>
            <div className="shoppinglist-next clearfix">
              <Link className="shoppinglist-next-btn" onClick={this.handleNext} to="/checkInfo">
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
