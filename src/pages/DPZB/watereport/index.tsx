import {Tabs} from 'antd';
import React, {Component, Suspense} from 'react';
import {PageHeaderWrapper} from '@ant-design/pro-layout';
import styles from './style.less';
import moment from 'moment';
import PageLoading from './components/PageLoading';

const {TabPane} = Tabs;
const WaterDay = React.lazy(() => import('./components/WaterDay'));

class Watereport extends Component {
  render() {
    const visitData = [];
    const beginDay = new Date().getTime();
    for (let i = 0; i < 20; i += 1) {
      visitData.push({
        x: moment(new Date(beginDay + 1000 * 60 * 60 * 24 * i)).format('YYYY-MM-DD'),
        y: Math.floor(Math.random() * 100) + 10,
      });
    }

    return (
      <PageHeaderWrapper className={styles.main}>
        <div>

          <Tabs defaultActiveKey="1">
            <TabPane tab="水量日报" key="1">
              <Suspense fallback={<PageLoading/>}>
                <WaterDay waterDayValue={visitData}/>
              </Suspense>
            </TabPane>
            <TabPane tab="水量月报" key="2">
              {' '}
              <Suspense fallback={<PageLoading/>}>
                <WaterDay waterDayValue={visitData}/>
              </Suspense>
            </TabPane>
            <TabPane tab="水量年报" key="3">
              {' '}
              <Suspense fallback={<PageLoading/>}>
                <WaterDay waterDayValue={visitData}/>
              </Suspense>
            </TabPane>
          </Tabs>
        </div>
      </PageHeaderWrapper>
    );
  }
}

export default Watereport;
