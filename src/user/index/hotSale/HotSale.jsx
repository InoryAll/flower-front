/**
 * 鲜花销售主页热卖
 * Created by tianrenjie on 2018/4/8
 */
import React, { PropTypes } from 'react';
import { Row, Col } from 'antd';
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
        <Row>
          <Col></Col>
        </Row>
      </div>
    );
  }
}

export default HotSale;
