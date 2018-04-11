/**
 * 鲜花销售主页特殊产品模块
 * Created by tianrenjie on 2018/4/8
 */
import React, { PropTypes } from 'react';
import { Row, Col } from 'antd';
import { Link } from 'react-router';
import './FloorSpecific.less';

class FloorSpecific extends React.Component {
  static propTypes = {
    top: PropTypes.object.isRequired,
    middle: PropTypes.object.isRequired,
    bottom: PropTypes.object.isRequired,
  };
  onSearch = (attribute, value) => {
    console.log(attribute, value);
  };
  render() {
    const { top, middle, bottom } = this.props;
    const li = bottom.data.map((item) => {
      return (<li className="floorspecific-ul-li"><Link className="floorspecific-ul-li-a" onClick={() => { this.onSearch(item.attribute, item.value); }} to="#">{item.text}</Link></li>);
    });
    return (
      <div className="floorspecific">
        <Row>
          <Col>
            <img className="floorspecific-img" src={top.img} alt="花之韵" />
          </Col>
        </Row>
        <Row>
          <Col style={{ backgroundColor: `${middle.bg}`, overflow: 'hidden' } }>
            <Link className="text-box" to={middle.url}>{middle.text}</Link>
          </Col>
        </Row>
        <Row>
          <Col style={{ backgroundColor: `${bottom.bg}` }}>
            <ul className="floorspecific-ul">
              {li}
            </ul>
          </Col>
        </Row>
      </div>
    );
  }
}

export default FloorSpecific;
