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
  static propTypes = {
    hotSale: PropTypes.object.isRequired,
  };
  state = {
    imgArr: [img1, img2, img3, img4, img5, img6, img7, img8],
  };
  render() {
    const { hotSale } = this.props;
    return (
      <div className="hotsale">
        <Row>
          <Col>
            <h3 className="hotsale-h">正在热卖<span className="hotsale-h-span">精选热销款式</span></h3>
          </Col>
        </Row>
        <Row className="hotsale-detail-row">
          <Col span={4}>
            <Link className="hotsale-special-link"><img className="hotsale-special-link-img" src={this.state.imgArr[0]} alt="花之韵" /></Link>
          </Col>
          <Col span={11}>
            <ul className="hotsale-ul">
              <li className="hotsale-ul-li">
                <Link className="hotsale-link" to={`/itemDetail?id=${hotSale.data && hotSale.data[0] && hotSale.data[0]._id}`} >
                  <p className="hotsale-link-p">{hotSale.data && hotSale.data[0] && hotSale.data[0].name}</p>
                  <img className="hotsale-link-img" src={hotSale.data && hotSale.data[0] && hotSale.data[0].url} alt="花之韵" />
                </Link>
              </li>
              <li className="hotsale-ul-li">
                <Link className="hotsale-link" to={`/itemDetail?id=${hotSale.data && hotSale.data[1] && hotSale.data[1]._id}`} >
                  <p className="hotsale-link-p">{hotSale.data && hotSale.data[1] && hotSale.data[1].name}</p>
                  <img className="hotsale-link-img" src={hotSale.data && hotSale.data[1] && hotSale.data[1].url} alt="花之韵" />
                </Link>
              </li>
              <li className="hotsale-ul-li">
                <Link className="hotsale-link" to={`/itemDetail?id=${hotSale.data && hotSale.data[2] && hotSale.data[2]._id}`} >
                  <p className="hotsale-link-p">{hotSale.data && hotSale.data[2] && hotSale.data[2].name}</p>
                  <img className="hotsale-link-img" src={hotSale.data && hotSale.data[2] && hotSale.data[2].url} alt="花之韵" />
                </Link>
              </li>
              <li className="hotsale-ul-li">
                <Link className="hotsale-link" to={`/itemDetail?id=${hotSale.data && hotSale.data[3] && hotSale.data[3]._id}`} >
                  <p className="hotsale-link-p">{hotSale.data && hotSale.data[3] && hotSale.data[3].name}</p>
                  <img className="hotsale-link-img" src={hotSale.data && hotSale.data[3] && hotSale.data[3].url} alt="花之韵" />
                </Link>
              </li>
            </ul>
          </Col>
          <Col span={4}>
            <Link className="hotsale-special-link"><img className="hotsale-special-link-img" src={this.state.imgArr[5]} alt="花之韵" /></Link>
          </Col>
          <Col span={5}>
            <ul className="hotsale-ul hotsale-ul-vertical">
              <li className="hotsale-ul-li">
                <Link className="hotsale-link" to={`/itemDetail?id=${hotSale.data && hotSale.data[4] && hotSale.data[4]._id}`} >
                  <p className="hotsale-link-p">{hotSale.data && hotSale.data[4] && hotSale.data[4].name}</p>
                  <img className="hotsale-link-img" src={hotSale.data && hotSale.data[4] && hotSale.data[4].url} alt="花之韵" />
                </Link>
              </li>
              <li className="hotsale-ul-li">
                <Link className="hotsale-link" to={`/itemDetail?id=${hotSale.data && hotSale.data[5] && hotSale.data[5]._id}`} >
                  <p className="hotsale-link-p">{hotSale.data && hotSale.data[5] && hotSale.data[5].name}</p>
                  <img className="hotsale-link-img" src={hotSale.data && hotSale.data[5] && hotSale.data[5].url} alt="花之韵" />
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
