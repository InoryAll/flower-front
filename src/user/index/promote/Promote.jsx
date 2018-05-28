/**
 * 鲜花销售主页推广
 * Created by tianrenjie on 2018/4/4
 */
import React, { PropTypes } from 'react';
import { Row, Col } from 'antd';
import { Link } from 'react-router';
import img1 from '../../../../static/img/promote/1.jpg';
import img2 from '../../../../static/img/promote/2.jpg';
import img3 from '../../../../static/img/promote/3.jpg';
import img4 from '../../../../static/img/promote/4.jpg';
import './Promote.less';

class Promote extends React.Component {
  static propTypes = {};
  state = {
    imgArr: [img1, img2, img3, img4],
  };
  render() {
    return (
      <div className="promote">
        <ul className="promote-ul">
          <li className="promote-ul-li"><Link className="promote-a" to=""><img className="promote-a-img" src={this.state.imgArr[0]} alt="花之韵" /></Link></li>
          <li className="promote-ul-li"><Link className="promote-a" to=""><img className="promote-a-img" src={this.state.imgArr[1]} alt="花之韵" /></Link></li>
          <li className="promote-ul-li"><Link className="promote-a" to=""><img className="promote-a-img" src={this.state.imgArr[2]} alt="花之韵" /></Link></li>
          <li className="promote-ul-li"><Link className="promote-a" to=""><img className="promote-a-img" src={this.state.imgArr[3]} alt="花之韵" /></Link></li>
        </ul>
      </div>
    );
  }
}

export default Promote;
