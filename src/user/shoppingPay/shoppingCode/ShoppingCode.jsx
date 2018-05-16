/**
 * 鲜花销售订单支付二维码
 * Created by tianrenjie on 2018/5/6
 */
import React, { PropTypes } from 'react';
import { Row, Col } from 'antd';
import _ from 'lodash';
import img from '../../../../static/img/shoppingCode/1.png';
import './ShoppingCode.less';

class ShoppingCode extends React.Component {
  static propTypes = {
    order: PropTypes.object.isRequired,
    updateOrder: PropTypes.func.isRequired,
  };
  handleFinish = () => {
    if (!_.isEmpty(this.props.order) && !_.isEmpty(this.props.order.data)) {
      this.props.updateOrder({ _id: this.props.order.data[0]._id });
    }
  };
  render() {
    return (
      <div className="shoppingcode">
        <div className="shoppingcode-content">
          <Row>
            <Col>
              <div className="shoppingcode-content-code">
                <img className="shoppingcode-content-code-img" src={img} alt="花之韵" />
                <span className="shoppingcode-content-code-span">请扫描二维码完成付款</span>
              </div>
            </Col>
          </Row>
          <Row>
            <Col>
              <div className="shoppingcode-content-next">
                <button className="shoppingcode-content-next-btn" onClick={this.handleFinish}>完成付款</button>
              </div>
            </Col>
          </Row>
        </div>
      </div>
    );
  }
}

export default ShoppingCode;
