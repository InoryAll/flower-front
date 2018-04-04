/**
 * 鲜花销售主页“九宫格”筛选卡
 * Created by tianrenjie on 2018/4/4
 */
import React, { PropTypes } from 'react';
import { Row, Col } from 'antd';
import { Link } from 'react-router';
import './Choice.less';

class Choice extends React.Component {
  static propTypes = {};
  onSearch = (attribute, value) => {
    console.log(attribute, value);
  };
  render() {
    return (
      <div className="choice">
        <ul className="choice-ul">
          <li className="choice-ul-li"><div className="choice-ul-li-container"><span className="choice-img" /><Link onClick={ () => { this.onSearch('specific', 'love'); } } className="choice-a" to="#" >表白/求婚</Link></div></li>
          <li className="choice-ul-li"><div className="choice-ul-li-container"><span className="choice-img" /><Link onClick={ () => { this.onSearch('specific', 'girlFriend'); } } className="choice-a" to="#" >送女友</Link></div></li>
          <li className="choice-ul-li"><div className="choice-ul-li-container"><span className="choice-img" /><Link onClick={ () => { this.onSearch('specific', 'wife'); } } className="choice-a" to="#" >送老婆</Link></div></li>
          <li className="choice-ul-li"><div className="choice-ul-li-container"><span className="choice-img" /><Link onClick={ () => { this.onSearch('specific', 'parent'); } } className="choice-a" to="#" >送父母</Link></div></li>
          <li className="choice-ul-li"><div className="choice-ul-li-container"><span className="choice-img" /><Link onClick={ () => { this.onSearch('specific', 'birthday'); } } className="choice-a" to="#" >生日鲜花</Link></div></li>
          <li className="choice-ul-li"><div className="choice-ul-li-container"><span className="choice-img" /><Link onClick={ () => { this.onSearch('specific', 'handsome'); } } className="choice-a" to="#" >送男神</Link></div></li>
          <li className="choice-ul-li"><div className="choice-ul-li-container"><span className="choice-img" /><Link onClick={ () => { this.onSearch('specific', 'friend'); } } className="choice-a" to="#" >送闺蜜</Link></div></li>
          <li className="choice-ul-li"><div className="choice-ul-li-container"><span className="choice-img" /><Link onClick={ () => { this.onSearch('specific', 'apologize'); } } className="choice-a" to="#" >道歉鲜花</Link></div></li>
          <li className="choice-ul-li"><div className="choice-ul-li-container"><span className="choice-img" /><Link onClick={ () => { this.onSearch('specific', 'remember'); } } className="choice-a" to="#" >纪念日</Link></div></li>
        </ul>
      </div>
    );
  }
}

export default Choice;
