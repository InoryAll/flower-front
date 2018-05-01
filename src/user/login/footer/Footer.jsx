/**
 * 鲜花销售登录页底部
 * Created by tianrenjie on 2018/4/27
 */
import React, { PropTypes } from 'react';
import { Row, Col } from 'antd';
import { Link } from 'react-router';
import img1 from '../../../../static/img/loginFooter/1.gif';
import img2 from '../../../../static/img/loginFooter/2.gif';
import img3 from '../../../../static/img/loginFooter/3.gif';
import img4 from '../../../../static/img/loginFooter/4.jpg';
import img5 from '../../../../static/img/loginFooter/5.jpg';
import img6 from '../../../../static/img/loginFooter/6.jpg';
import './Footer.less';

class Footer extends React.Component {
  render() {
    return (
      <div className="login-footer">
        <Row>
          <Col>
            <ul className="login-footer-ul">
              <li className="login-footer-ul-li">
                <Link className="login-footer-link" to="">
                  <img src={img1} alt="" className="login-footer-img" />
                </Link>
              </li>
              <li className="login-footer-ul-li">
                <Link className="login-footer-link" to="">
                  <img src={img2} alt="" className="login-footer-img" />
                </Link>
              </li>
              <li className="login-footer-ul-li">
                <Link className="login-footer-link" to="">
                  <img src={img3} alt="" className="login-footer-img" />
                </Link>
              </li>
              <li className="login-footer-ul-li">
                <Link className="login-footer-link" to="">
                  <img src={img4} alt="" className="login-footer-img" />
                </Link>
              </li>
              <li className="login-footer-ul-li">
                <Link className="login-footer-link" to="">
                  <img src={img5} alt="" className="login-footer-img" />
                </Link>
              </li>
              <li className="login-footer-ul-li">
                <Link className="login-footer-link" to="">
                  <img src={img6} alt="" className="login-footer-img" />
                </Link>
              </li>
            </ul>
          </Col>
        </Row>
        <Row>
          <Col>
            <p className="login-footer-p">花之韵- 网上花店领先品牌，鲜花速递专家!</p>
            <p className="login-footer-p">All rights reserved</p>
          </Col>
        </Row>
      </div>
    );
  }
}

export default Footer;
