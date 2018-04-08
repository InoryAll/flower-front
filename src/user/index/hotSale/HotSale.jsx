/**
 * 鲜花销售主页热卖
 * Created by tianrenjie on 2018/4/8
 */
import React, { PropTypes } from 'react';
import { Row, Col } from 'antd';
import { Link } from 'react-router';
import img1 from '../../../../static/img/hotsale/1.jpg';
import img2 from '../../../../static/img/hotsale/1_1.jpg';
import img3 from '../../../../static/img/hotsale/1_2.jpg';
import img4 from '../../../../static/img/hotsale/1_3.jpg';
import img5 from '../../../../static/img/hotsale/1_4.jpg';
import img6 from '../../../../static/img/hotsale/2.jpg';
import img7 from '../../../../static/img/hotsale/2_1.jpg';
import img8 from '../../../../static/img/hotsale/2_2.jpg';
import './HotSale.less';

class HotSale extends React.Component {
  static propTypes = {};
  state = {
    imgArr: [img1, img2, img3, img4, img5, img6, img7, img8],
  };
  render() {
    return (
      <div className="hotsale">
        <Row>
          <Col>
            <h3 className="hotsale-h">正在热卖<span className="hotsale-h-span">精选热销款式</span></h3>
          </Col>
        </Row>
        <Row className="hotsale-detail-row">
          <Col span={4}>
            <Link className="hotsale-special-link" to="#"><img className="hotsale-special-link-img" src={this.state.imgArr[0]} alt="花之韵" /></Link>
          </Col>
          <Col span={11}>
            <ul className="hotsale-ul">
              <li className="hotsale-ul-li">
                <Link className="hotsale-link" to="#" >
                  <p className="hotsale-link-p">携手一生</p>
                  <img className="hotsale-link-img" src={this.state.imgArr[1]} alt="" />
                </Link>
              </li>
              <li className="hotsale-ul-li">
                <Link className="hotsale-link" to="" >
                  <p className="hotsale-link-p">思念是一种病</p>
                  <img className="hotsale-link-img" src={this.state.imgArr[2]} alt="" />
                </Link>
              </li>
              <li className="hotsale-ul-li">
                <Link className="hotsale-link" to="" >
                  <p className="hotsale-link-p">爱的守护神</p>
                  <img className="hotsale-link-img" src={this.state.imgArr[3]} alt="" />
                </Link>
              </li>
              <li className="hotsale-ul-li">
                <Link className="hotsale-link" to="" >
                  <p className="hotsale-link-p">你是我的璀璨星光</p>
                  <img className="hotsale-link-img" src={this.state.imgArr[4]} alt="" />
                </Link>
              </li>
            </ul>
          </Col>
          <Col span={4}>
            <Link className="hotsale-special-link" to="#"><img className="hotsale-special-link-img" src={this.state.imgArr[5]} alt="花之韵" /></Link>
          </Col>
          <Col span={5}>
            <ul className="hotsale-ul hotsale-ul-vertical">
              <li className="hotsale-ul-li">
                <Link className="hotsale-link" to="" >
                  <p className="hotsale-link-p">风的光阴</p>
                  <img className="hotsale-link-img" src={this.state.imgArr[6]} alt="" />
                </Link>
              </li>
              <li className="hotsale-ul-li">
                <Link className="hotsale-link" to="" >
                  <p className="hotsale-link-p">梦中婚礼</p>
                  <img className="hotsale-link-img" src={this.state.imgArr[7]} alt="" />
                </Link>
              </li>
            </ul>
          </Col>
        </Row>
      </div>
    );
  }
}

export default HotSale;
