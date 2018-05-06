/**
 * 鲜花销售购物车页步骤条
 * Created by tianrenjie on 2018/5/6
 */
import React, { PropTypes } from 'react';
import { Row, Col, Steps, Icon } from 'antd';
import './ShoppingSteps.less';
import img from '../../../../static/img/logo/logo.jpg';

const Step = Steps.Step;
class ShoppingSteps extends React.Component {
  static propTypes = {
    step: PropTypes.number.isRequired,
  };
  render() {
    const { step } = this.props;
    return (
      <div className="shoppingsteps">
        <Row>
          <Col span={8}>
            <div className="shoppingsteps-logo">
              <img src={img} alt="花之韵" className="shoppingsteps-logo-img" />
            </div>
          </Col>
          <Col span={16}>
            <div className="shoppingsteps-step">
              <Steps current={step}>
                <Step title="我的购物车" icon={<Icon type="shopping-cart" />} />
                <Step title="填写核对购物信息" icon={<Icon type="edit" />} />
                <Step title="支付提交" icon={<Icon type="wallet" />} />
                <Step title="订单完成" icon={<Icon type="like-o" />} />
              </Steps>
            </div>
          </Col>
        </Row>
      </div>
    );
  }
}

export default ShoppingSteps;
