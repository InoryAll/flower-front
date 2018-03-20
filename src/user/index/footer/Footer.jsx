/**
 * 鲜花销售主页的底部
 * Created by tianrenjie on 2018/3/19
 */
import React, { PropTypes } from 'react';
import { Row, Col } from 'antd';
import { Link } from 'react-router';
import './Footer.less';

class Footer extends React.Component {
  static propTypes = {};
  render() {
    return (
      <footer className="footer">
        <Row className="info-row">
          <Col span={16} offset={4}>
            <ul className="info-row-ul">
              <li className="info-row-ul-li">
                <dl className="info-row-ul-li-dl">
                  <dt className="info-row-ul-li-dl-dt">购物指南</dt>
                  <dd className="info-row-ul-li-dl-dd"><Link to="">品牌服务</Link></dd>
                  <dd className="info-row-ul-li-dl-dd"><Link to="">购物流程</Link></dd>
                  <dd className="info-row-ul-li-dl-dd"><Link to="">订购必读</Link></dd>
                  <dd className="info-row-ul-li-dl-dd"><Link to="">VIP会员</Link></dd>
                </dl>
              </li>
              <li className="info-row-ul-li">
                <dl className="info-row-ul-li-dl">
                  <dt className="info-row-ul-li-dl-dt">支付方式</dt>
                  <dd className="info-row-ul-li-dl-dd"><Link to="">在线支付</Link></dd>
                  <dd className="info-row-ul-li-dl-dd"><Link to="">发票说明</Link></dd>
                  <dd className="info-row-ul-li-dl-dd"><Link to="">银行转账说明</Link></dd>
                  <dd className="info-row-ul-li-dl-dd"><Link to="">货到付款查询及要求</Link></dd>
                </dl>
              </li>
              <li className="info-row-ul-li">
                <dl className="info-row-ul-li-dl">
                  <dt className="info-row-ul-li-dl-dt">配送方式</dt>
                  <dd className="info-row-ul-li-dl-dd"><Link to="">配送范围</Link></dd>
                  <dd className="info-row-ul-li-dl-dd"><Link to="">鲜花定时配送</Link></dd>
                  <dd className="info-row-ul-li-dl-dd"><Link to="">配送说明</Link></dd>
                  <dd className="info-row-ul-li-dl-dd"><Link to="">配送费用收取标准</Link></dd>
                </dl>
              </li>
              <li className="info-row-ul-li">
                <dl className="info-row-ul-li-dl">
                  <dt className="info-row-ul-li-dl-dt">售后服务</dt>
                  <dd className="info-row-ul-li-dl-dd"><Link to="">订单处理</Link></dd>
                  <dd className="info-row-ul-li-dl-dd"><Link to="">在线支付</Link></dd>
                  <dd className="info-row-ul-li-dl-dd"><Link to="">投诉处理规范</Link></dd>
                  <dd className="info-row-ul-li-dl-dd"><Link to="">订单查询及撤销</Link></dd>
                  <dd className="info-row-ul-li-dl-dd"><Link to="">修改订单信息说明</Link></dd>
                </dl>
              </li>
              <li className="info-row-ul-li">
                <dl className="info-row-ul-li-dl">
                  <dt className="info-row-ul-li-dl-dt">相关知识</dt>
                  <dd className="info-row-ul-li-dl-dd"><Link to="">鲜花支数寓意</Link></dd>
                  <dd className="info-row-ul-li-dl-dd"><Link to="">浪漫花语</Link></dd>
                  <dd className="info-row-ul-li-dl-dd"><Link to="">节日送花寓意</Link></dd>
                  <dd className="info-row-ul-li-dl-dd"><Link to="">蛋糕尺寸</Link></dd>
                </dl>
              </li>
              <li className="info-row-ul-li">
                <dl className="info-row-ul-li-dl">
                  <dt className="info-row-ul-li-dl-dt">帮助中心</dt>
                  <dd className="info-row-ul-li-dl-dd"><Link to="">关于我们</Link></dd>
                  <dd className="info-row-ul-li-dl-dd"><Link to="">联系我们</Link></dd>
                  <dd className="info-row-ul-li-dl-dd"><Link to="">安全条款</Link></dd>
                  <dd className="info-row-ul-li-dl-dd"><Link to="">隐私保护</Link></dd>
                  <dd className="info-row-ul-li-dl-dd"><Link to="">常见问题</Link></dd>
                </dl>
              </li>
            </ul>
          </Col>
        </Row>
        <Row className="copy-row">
          <Col span={24}>
            <p className="copy-row-title">花之韵，懂你的网上花店，您的不二选择！</p>
            <p className="copy-row-des">copyright&copy; 2018 由个人开发</p>
          </Col>
        </Row>
      </footer>
    );
  }
}

export default Footer;
