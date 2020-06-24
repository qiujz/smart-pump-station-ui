import React, {Component,} from 'react';
import {PageHeaderWrapper} from '@ant-design/pro-layout';
import styles from './style.less';
import moment from 'moment';
import {DatePicker, version} from "antd";


class Watereport extends Component {
  render() {
    // const visitData = [];
    // const beginDay = new Date().getTime();
    // for (let i = 0; i < 20; i += 1) {
    //   visitData.push({
    //     x: moment(new Date(beginDay + 1000 * 60 * 60 * 24 * i)).format('YYYY-MM-DD'),
    //     y: Math.floor(Math.random() * 100) + 10,
    //   });
    // }

    return (
      <PageHeaderWrapper className={styles.main}>
        <div>
          <DatePicker defaultValue={moment()} picker="month"/>
          <div>{version}</div>
        </div>
      </PageHeaderWrapper>
    );
  }
}

export default Watereport;
