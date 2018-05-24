/**
 * 鲜花销售系统后台控制台操作记录页
 * Created by tianrenjie on 2018/5/17
 */
import React, { PropTypes } from 'react';
import { Timeline, Card, Pagination } from 'antd';
import { connect } from 'react-redux';
import _ from 'lodash';
import moment from 'moment';
import { onViewInit, getActions } from './action/action';
import { actionSelector } from './selector/selector';
import './Action.less';

class Action extends React.Component {
  static propTypes = {
    actions: PropTypes.object.isRequired,
    onViewInit: PropTypes.func.isRequired,
    getActions: PropTypes.func.isRequired,
  };
  componentWillMount() {
    this.props.onViewInit();
    this.props.getActions();
  }
  render() {
    const { actions } = this.props;
    let actionData = [];
    const timelines = [];
    if (!_.isEmpty(actions) && !_.isEmpty(actions.data)) {
      actionData = actions.data;
    }
    actionData.map((item, index) => {
      timelines.push(<Timeline.Item>&emsp;{item.content}&emsp;{!_.isUndefined(item.timestamp) &&
      moment(parseInt(item.timestamp)).format('YYYY-MM-DD HH:mm:ss')}</Timeline.Item>);
      return true;
    });
    return (
      <div className="console-action">
        <Card className="console-action-card" title="操作记录列表">
          <Timeline>
            {timelines}
          </Timeline>
          <div className="console-action-pagination">
            <Pagination defaultCurrent={1} total={50} />
          </div>
        </Card>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    actions: actionSelector(state),
  };
};

const mapDispatchToProps = {
  onViewInit,
  getActions,
};

export default connect(mapStateToProps, mapDispatchToProps)(Action);
