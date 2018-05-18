/**
 * 鲜花销售系统后台控制台操作记录页
 * Created by tianrenjie on 2018/5/17
 */
import React, { PropTypes } from 'react';
import { Timeline, Card, Pagination } from 'antd';
import './Action.less';

class Action extends React.Component {
  static propTypes = {};
  render() {
    return (
      <div className="console-action">
        <Card className="console-action-card" title="操作记录列表">
          <Timeline>
            <Timeline.Item>Create a services site 2015-09-01</Timeline.Item>
            <Timeline.Item>Solve initial network problems 2015-09-01</Timeline.Item>
            <Timeline.Item>Technical testing 2015-09-01</Timeline.Item>
            <Timeline.Item>Network problems being solved 2015-09-01</Timeline.Item>
            <Timeline.Item>Create a services site 2015-09-01</Timeline.Item>
            <Timeline.Item>Solve initial network problems 2015-09-01</Timeline.Item>
            <Timeline.Item>Technical testing 2015-09-01</Timeline.Item>
            <Timeline.Item>Network problems being solved 2015-09-01</Timeline.Item>
            <Timeline.Item>Create a services site 2015-09-01</Timeline.Item>
            <Timeline.Item>Solve initial network problems 2015-09-01</Timeline.Item>
            <Timeline.Item>Technical testing 2015-09-01</Timeline.Item>
            <Timeline.Item>Network problems being solved 2015-09-01</Timeline.Item>
          </Timeline>
          <div className="console-action-pagination">
            <Pagination defaultCurrent={1} total={50} />
          </div>
        </Card>
      </div>
    );
  }
}

export default Action;
