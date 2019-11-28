import { PageHeaderWrapper } from '@ant-design/pro-layout';
import React, { useState, useEffect } from 'react';
import {Card, Spin} from 'antd';
import styles from './index.less';

export default () => {
  const [loading, setLoading] = useState<boolean>(true);
  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 3000);
  }, []);
  const { Meta } = Card;
  return (
    <PageHeaderWrapper content="这是一个新页面，从这里进行开发！" className={styles.main}>
      <div style={{ paddingTop: 1, textAlign: 'center' }}>
        <Spin spinning={loading} size="large"></Spin>
      </div>
      <div>
        <Card
          hoverable
          cover={
            <img
              alt="example"
              src="http://47.100.2.229/D02451881/2019_11_14-2019_11_14/172.16.10.6_01_20191114160348831_MOTION_DETECTION.jpg"
            />
          }
        >
          <Meta title="最新图片" description="最新图片" />
        </Card>
        ,
      </div>
    </PageHeaderWrapper>
  );
};
