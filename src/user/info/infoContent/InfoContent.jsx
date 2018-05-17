/**
 * 鲜花销售资讯详情页
 * Created by tianrenjie on 2018/5/6
 */
import React, { PropTypes } from 'react';
import moment from 'moment';
import $ from 'jquery';
import { Row, Col } from 'antd';
import './InfoContent.less';

class InfoContent extends React.Component {
  static propTypes = {
    info: PropTypes.object.isRequired,
  };
  render() {
    const { info } = this.props;
    const infoContent = info.data && info.data[0] && decodeURIComponent(info.data[0].content);
    $('.infocontent-content').append($('+infoContent+'));
    return (
      <div className="infocontent">
        <Row>
          <Col>
            <h1 className="infocontent-h1">{info.data && info.data[0] && info.data[0].name}</h1>
          </Col>
        </Row>
        <Row>
          <Col>
            <p className="infocontent-date">{info.data && info.data[0] && moment(parseInt(info.data[0].timestamp)).format('YYYY-MM-DD')}</p>
          </Col>
        </Row>
        <Row>
          <Col>
            <div className="infocontent-content" dangerouslySetInnerHTML={{ __html: infoContent }} />
          </Col>
        </Row>
      </div>
    );
  }
}

export default InfoContent;
