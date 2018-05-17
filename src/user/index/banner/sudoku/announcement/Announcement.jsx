/**
 * 鲜花销售主页公告栏
 * Created by tianrenjie on 2018/3/28
 */
import React, { PropTypes } from 'react';
import { Tabs } from 'antd';
import _ from 'lodash';
import { Link } from 'react-router';
import './Announcement.less';

const TabPane = Tabs.TabPane;
class Announcement extends React.Component {
  static propTypes = {
    infos: PropTypes.object.isRequired,
  };
  callback = (key) => {
  };
  render() {
    // 测试数据
    const { infos } = this.props;
    const information = [];
    const says = [];
    const board = [];
    if (!_.isUndefined(infos) && !_.isEmpty(infos.data)) {
      infos.data.map((item, index) => {
        if (item.type === 'news') {
          information.push(item);
        }
        if (item.type === 'flower') {
          says.push(item);
        }
        if (item.type === 'board') {
          board.push(item);
        }
        return true;
      });
    }
    // 遍历数据，生成jsx表达式
    const inforamtionList = _.map(information, (item, index) => {
      return (<li className="announcement-ul-li" key={index}><Link className="announcement-ul-li-a" to={`/info/${item._id}`}>{item.name}</Link></li>);
    });
    const saysList = _.map(says, (item, index) => {
      return (<li className="announcement-ul-li" key={index}><Link className="announcement-ul-li-a" to={`/info/${item._id}`}>{item.name}</Link></li>);
    });
    const boardList = _.map(board, (item, index) => {
      return (<li className="announcement-ul-li" key={index}><Link className="announcement-ul-li-a" to={`/info/${item._id}`}>{item.name}</Link></li>);
    });
    return (
      <div className="announcement">
        <Tabs defaultActiveKey="1" onChange={this.callback} size="small">
          <TabPane tab="资讯" key="1"><ul className="announcement-ul" key="information">{inforamtionList}</ul></TabPane>
          <TabPane tab="花语" key="2"><ul className="announcement-ul" key="says">{saysList}</ul></TabPane>
          <TabPane tab="公告" key="3"><ul className="announcement-ul" key="board">{boardList}</ul></TabPane>
        </Tabs>
      </div>
    );
  }
}

export default Announcement;
