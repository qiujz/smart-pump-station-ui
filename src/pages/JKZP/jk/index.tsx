import { PageHeaderWrapper } from '@ant-design/pro-layout';
import React, { useState, useEffect } from 'react';
import { Button, Card, Col, Row, Spin } from 'antd';
import styles from './index.less';

export default () => {
  const [loading, setLoading] = useState<boolean>(true);
  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 3000);
  }, []);
  const i = 0;
  return (
    <PageHeaderWrapper content="这是一个新页面，从这里进行开发！" className={styles.main}>
      <div style={{ paddingTop: 100, textAlign: 'center' }}>
        <Spin spinning={loading} size="large"></Spin>
      </div>

      <div style={{ background: '#ECECEC', padding: '30px' }}>

        <Row >
          <Col >
            <Card title="循环水泵站" bordered>

              <iframe title="循环水泵站"
                src="https://open.ys7.com/ezopen/h5/iframe?url=ezopen://open.ys7.com/D02451881/1.live&autoplay=0&audio=1&accessToken=at.absqr4p3b1emq72a8d1dx1097dfu8j3p-8z4jmfaado-169qctg-3xcq9cj1h"
                width="600"
                height="400"
                id="ysOpenDevice"
                allowFullScreen
              >

              </iframe>
            </Card>
            <div> <Button type="primary" onClick={() => {
              // @ts-ignore
              document.getElementById('ysOpenDevice').src = 'https://open.ys7.com/ezopen/h5/iframe?url=ezopen://open.ys7.com/D02451881/1.live&autoplay=1&audio=1&accessToken=at.absqr4p3b1emq72a8d1dx1097dfu8j3p-8z4jmfaado-169qctg-3xcq9cj1h' }}>播放</Button>
              <Button type="primary" onClick={() => {
                // @ts-ignore
                document.getElementById('ysOpenDevice').src = 'https://open.ys7.com/ezopen/h5/iframe?url=ezopen://open.ys7.com/D02451881/1.live&autoplay=0&audio=1&accessToken=at.absqr4p3b1emq72a8d1dx1097dfu8j3p-8z4jmfaado-169qctg-3xcq9cj1h'
              }}>暂停</Button></div>
          </Col>

        </Row>
        <Row >
          <Col >
            <Card title="循环水泵站河岸取水口" bordered>

              <iframe title="循环水泵站河岸取水口"
                      src="https://open.ys7.com/ezopen/h5/iframe?url=ezopen://open.ys7.com/D02451942/1.live&autoplay=0&audio=1&accessToken=at.4yfppr479a9n4fuq8f0f12zd7z56h4tx-2h6bt8dnr7-1finu64-y8yluphhp"
                      width="600"
                      height="400"
                      id="ysOpenDevice1"
                      allowFullScreen
              >

              </iframe>
            </Card>
            <div> <Button type="primary" onClick={() => {
              // @ts-ignore
              document.getElementById('ysOpenDevice1').src = 'https://open.ys7.com/ezopen/h5/iframe?url=ezopen://open.ys7.com/D02451942/1.live&autoplay=1&audio=1&accessToken=at.4yfppr479a9n4fuq8f0f12zd7z56h4tx-2h6bt8dnr7-1finu64-y8yluphhp' }}>播放</Button>
              <Button type="primary" onClick={() => {
                // @ts-ignore
                document.getElementById('ysOpenDevice1').src = 'https://open.ys7.com/ezopen/h5/iframe?url=ezopen://open.ys7.com/D02451942/1.live&autoplay=0&audio=0&accessToken=at.4yfppr479a9n4fuq8f0f12zd7z56h4tx-2h6bt8dnr7-1finu64-y8yluphhp'
              }}>暂停</Button></div>
          </Col>
          {/* <Col span={8}> */}
          {/*  <Card title="Card title" bordered={false}> */}
          {/*    Card content */}
          {/*  </Card> */}
          {/* </Col> */}
          {/* <Col span={8}> */}
          {/*  <Card title="Card title" bordered={false}> */}
          {/*    Card content */}
          {/*  </Card> */}
          {/* </Col> */}
        </Row>
      </div>
    </PageHeaderWrapper>
  );
};
