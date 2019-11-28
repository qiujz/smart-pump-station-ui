import { PageHeaderWrapper } from '@ant-design/pro-layout';
import React, { useState, useEffect } from 'react';
import { Button, Card, Col, Divider, Row, Spin } from 'antd';
import styles from './index.less';

export default () => {
  const AccessToken = 'at.4wgolp5380vxj6f6205sunvd3n9qkss5-1sd2nu8tz7-0yj39ao-ixbmc3rdz';
  let autoplay = 0;
  var arr: Array<string> = [
    'D54877405',
    '240209926',
    'D74121766',
    'D02451881',
    'D02451955',
    'D02451907',
    'D02451918',
    'D02451942',
  ];

  return (
    <PageHeaderWrapper>
      <div style={{ background: '#ECECEC', padding: '30px' }}>
        <Row gutter={16}>
          <Col span={12}>
            <Card title="循环水泵站" bordered>
              <iframe
                title="循环水泵站"
                src={
                  'https://open.ys7.com/ezopen/h5/iframe?url=ezopen://open.ys7.com/' +
                  arr[0] +
                  '/1.live&autoplay=' +
                  autoplay +
                  '&audio=1&accessToken=' +
                  AccessToken
                }
                width="600"
                height="400"
                id={arr[0]}
                allowFullScreen
              ></iframe>
            </Card>
            <Button
              type="primary"
              onClick={() => {
                // @ts-ignore

                document.getElementById(arr[0]).src =
                  'https://open.ys7.com/ezopen/h5/iframe?url=ezopen://open.ys7.com/' +
                  arr[0] +
                  '/1.live&autoplay=1' +
                  '&audio=1&accessToken=' +
                  AccessToken;
              }}
            >
              播放
            </Button>
            <Divider type="vertical" />
            <Button
              type="primary"
              onClick={() => {
                // @ts-ignore
                document.getElementById(arr[0]).src =
                  'https://open.ys7.com/ezopen/h5/iframe?url=ezopen://open.ys7.com/' +
                  arr[0] +
                  '/1.live&autoplay=0' +
                  '&audio=1&accessToken=' +
                  AccessToken;
              }}
            >
              暂停
            </Button>
          </Col>
          <Col span={12}>
            <Card title="循环水泵站河岸边" bordered>
              <iframe
                title="循环水泵站河岸边"
                src={
                  'https://open.ys7.com/ezopen/h5/iframe?url=ezopen://open.ys7.com/' +
                  arr[1] +
                  '/1.live&autoplay=' +
                  autoplay +
                  '&audio=1&accessToken=' +
                  AccessToken
                }
                width="600"
                height="400"
                id={arr[1]}
                allowFullScreen
              ></iframe>
            </Card>
            <Button
              type="primary"
              onClick={() => {
                // @ts-ignore
                document.getElementById(arr[1]).src =
                  'https://open.ys7.com/ezopen/h5/iframe?url=ezopen://open.ys7.com/' +
                  arr[1] +
                  '/1.live&autoplay=1' +
                  '&audio=1&accessToken=' +
                  AccessToken;
              }}
            >
              播放
            </Button>
            <Divider type="vertical" />
            <Button
              type="primary"
              onClick={() => {
                // @ts-ignore
                document.getElementById(arr[1]).src =
                  'https://open.ys7.com/ezopen/h5/iframe?url=ezopen://open.ys7.com/' +
                  arr[1] +
                  '/1.live&autoplay=0' +
                  '&audio=1&accessToken=' +
                  AccessToken;
              }}
            >
              暂停
            </Button>
          </Col>
        </Row>
        <Row gutter={16}>
          <Col span={12}>
            <Card title="截留泵站池内" bordered>
              <iframe
                title="截留泵站池内"
                src={
                  'https://open.ys7.com/ezopen/h5/iframe?url=ezopen://open.ys7.com/' +
                  arr[2] +
                  '/1.live&autoplay=' +
                  autoplay +
                  '&audio=1&accessToken=' +
                  AccessToken
                }
                width="600"
                height="400"
                id={arr[2]}
                allowFullScreen
              ></iframe>
            </Card>
            <Button
              type="primary"
              onClick={() => {
                // @ts-ignore

                document.getElementById(arr[2]).src =
                  'https://open.ys7.com/ezopen/h5/iframe?url=ezopen://open.ys7.com/' +
                  arr[2] +
                  '/1.live&autoplay=1' +
                  '&audio=1&accessToken=' +
                  AccessToken;
              }}
            >
              播放
            </Button>
            <Divider type="vertical" />
            <Button
              type="primary"
              onClick={() => {
                // @ts-ignore

                document.getElementById(arr[2]).src =
                  'https://open.ys7.com/ezopen/h5/iframe?url=ezopen://open.ys7.com/' +
                  arr[2] +
                  '/1.live&autoplay=0' +
                  '&audio=1&accessToken=' +
                  AccessToken;
              }}
            >
              暂停
            </Button>
          </Col>
          <Col span={12}>
            <Card title="循环水泵站内" bordered>
              <iframe
                title="循环水泵站内"
                src={
                  'https://open.ys7.com/ezopen/h5/iframe?url=ezopen://open.ys7.com/' +
                  arr[3] +
                  '/1.live&autoplay=' +
                  autoplay +
                  '&audio=1&accessToken=' +
                  AccessToken
                }
                width="600"
                height="400"
                id={arr[3]}
                allowFullScreen
              ></iframe>
            </Card>
            <Button
              type="primary"
              onClick={() => {
                // @ts-ignore

                document.getElementById(arr[3]).src =
                  'https://open.ys7.com/ezopen/h5/iframe?url=ezopen://open.ys7.com/' +
                  arr[3] +
                  '/1.live&autoplay=1' +
                  '&audio=1&accessToken=' +
                  AccessToken;
              }}
            >
              播放
            </Button>
            <Divider type="vertical" />
            <Button
              type="primary"
              onClick={() => {
                // @ts-ignore

                document.getElementById(arr[3]).src =
                  'https://open.ys7.com/ezopen/h5/iframe?url=ezopen://open.ys7.com/' +
                  arr[3] +
                  '/1.live&autoplay=0' +
                  '&audio=1&accessToken=' +
                  AccessToken;
              }}
            >
              暂停
            </Button>
          </Col>
        </Row>
        <Row gutter={16}>
          <Col span={12}>
            <Card title="截留泵站内" bordered>
              <iframe
                title="截留泵站内"
                src={
                  'https://open.ys7.com/ezopen/h5/iframe?url=ezopen://open.ys7.com/' +
                  arr[4] +
                  '/1.live&autoplay=' +
                  autoplay +
                  '&audio=1&accessToken=' +
                  AccessToken
                }
                width="600"
                height="400"
                id={arr[4]}
                allowFullScreen
              ></iframe>
            </Card>
            <Button
              type="primary"
              onClick={() => {
                // @ts-ignore

                document.getElementById(arr[4]).src =
                  'https://open.ys7.com/ezopen/h5/iframe?url=ezopen://open.ys7.com/' +
                  arr[4] +
                  '/1.live&autoplay=1' +
                  '&audio=1&accessToken=' +
                  AccessToken;
              }}
            >
              播放
            </Button>
            <Divider type="vertical" />
            <Button
              type="primary"
              onClick={() => {
                // @ts-ignore

                document.getElementById(arr[4]).src =
                  'https://open.ys7.com/ezopen/h5/iframe?url=ezopen://open.ys7.com/' +
                  arr[4] +
                  '/1.live&autoplay=0' +
                  '&audio=1&accessToken=' +
                  AccessToken;
              }}
            >
              暂停
            </Button>
          </Col>
          <Col span={12}>
            <Card title="截留本站西闸" bordered>
              <iframe
                title="截留本站西闸"
                src={
                  'https://open.ys7.com/ezopen/h5/iframe?url=ezopen://open.ys7.com/' +
                  arr[5] +
                  '/1.live&autoplay=' +
                  autoplay +
                  '&audio=1&accessToken=' +
                  AccessToken
                }
                width="600"
                height="400"
                id={arr[5]}
                allowFullScreen
              ></iframe>
            </Card>
            <Button
              type="primary"
              onClick={() => {
                // @ts-ignore

                document.getElementById(arr[5]).src =
                  'https://open.ys7.com/ezopen/h5/iframe?url=ezopen://open.ys7.com/' +
                  arr[5] +
                  '/1.live&autoplay=1' +
                  '&audio=1&accessToken=' +
                  AccessToken;
              }}
            >
              播放
            </Button>
            <Divider type="vertical" />
            <Button
              type="primary"
              onClick={() => {
                // @ts-ignore

                document.getElementById(arr[5]).src =
                  'https://open.ys7.com/ezopen/h5/iframe?url=ezopen://open.ys7.com/' +
                  arr[5] +
                  '/1.live&autoplay=0' +
                  '&audio=1&accessToken=' +
                  AccessToken;
              }}
            >
              暂停
            </Button>
          </Col>
        </Row>
        <Row gutter={16}>
          <Col span={12}>
            <Card title="人工湿地" bordered>
              <iframe
                title="人工湿地"
                src={
                  'https://open.ys7.com/ezopen/h5/iframe?url=ezopen://open.ys7.com/' +
                  arr[6] +
                  '/1.live&autoplay=' +
                  autoplay +
                  '&audio=1&accessToken=' +
                  AccessToken
                }
                width="600"
                height="400"
                id={arr[6]}
                allowFullScreen
              ></iframe>
            </Card>
            <Button
              type="primary"
              onClick={() => {
                // @ts-ignore

                document.getElementById(arr[6]).src =
                  'https://open.ys7.com/ezopen/h5/iframe?url=ezopen://open.ys7.com/' +
                  arr[6] +
                  '/1.live&autoplay=1' +
                  '&audio=1&accessToken=' +
                  AccessToken;
              }}
            >
              播放
            </Button>
            <Divider type="vertical" />
            <Button
              type="primary"
              onClick={() => {
                // @ts-ignore

                document.getElementById(arr[6]).src =
                  'https://open.ys7.com/ezopen/h5/iframe?url=ezopen://open.ys7.com/' +
                  arr[6] +
                  '/1.live&autoplay=0' +
                  '&audio=1&accessToken=' +
                  AccessToken;
              }}
            >
              暂停
            </Button>
          </Col>
          <Col span={12}>
            <Card title="循环水泵站河岸取水口" bordered>
              <iframe
                title="循环水泵站河岸取水口"
                src={
                  'https://open.ys7.com/ezopen/h5/iframe?url=ezopen://open.ys7.com/' +
                  arr[7] +
                  '/1.live&autoplay=' +
                  autoplay +
                  '&audio=1&accessToken=' +
                  AccessToken
                }
                width="600"
                height="400"
                id={arr[7]}
                allowFullScreen
              ></iframe>
            </Card>
            <Button
              type="primary"
              onClick={() => {
                // @ts-ignore

                document.getElementById(arr[7]).src =
                  'https://open.ys7.com/ezopen/h5/iframe?url=ezopen://open.ys7.com/' +
                  arr[7] +
                  '/1.live&autoplay=1' +
                  '&audio=1&accessToken=' +
                  AccessToken;
              }}
            >
              播放
            </Button>
            <Divider type="vertical" />
            <Button
              type="primary"
              onClick={() => {
                // @ts-ignore

                document.getElementById(arr[7]).src =
                  'https://open.ys7.com/ezopen/h5/iframe?url=ezopen://open.ys7.com/' +
                  arr[7] +
                  '/1.live&autoplay=0' +
                  '&audio=1&accessToken=' +
                  AccessToken;
              }}
            >
              暂停
            </Button>
          </Col>
        </Row>
      </div>
    </PageHeaderWrapper>
  );
};
