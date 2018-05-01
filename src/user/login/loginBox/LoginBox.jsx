/**
 * 鲜花销售登录页主要部分
 * Created by tianrenjie on 2018/4/27
 */
import React, { PropTypes } from 'react';
import { Row, Col } from 'antd';
import bg from '.././../../../static/img/loginbox/bg.jpg';
import './LoginBox.less';

class LoginBox extends React.Component {
  render() {
    return (
      <div className="loginbox">
        <Row>
          <Col span={10} offset={2}>
            <div className="loginbox-box">
              <img className="loginbox-box-img" src={bg} alt="" />
            </div>
          </Col>
          <Col span={10}>
            111
          </Col>
        </Row>
      </div>
    );
  }
}

export default LoginBox;
