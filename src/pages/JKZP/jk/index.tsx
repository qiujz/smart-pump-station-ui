import {PageHeaderWrapper} from '@ant-design/pro-layout';
import React, {Component} from 'react';
import {Button, Card, Col, Divider, Row} from 'antd';
import request from '@/utils/request';
import Constants from '@/utils/Constants';

class Jk extends Component {
  // let AccessToken = 'at.con2lhmv6jm3hp366jxd77tl6fwbblit-51c78joybk-0m64vb6-pdseb3gwb';
  state = {
    AccessToken: '',

  };

  componentDidMount(): void {
    request(Constants.baseUrl + '/camera/token').then((data) => {
      this.setState({AccessToken: data});
    });
  }


  // request('https://open.ys7.com/api/lapp/token/get', {
  //   headers: {
  //     'Content-Type': 'application/x-www-form-urlencoded'
  //   },
  //   method: 'POST',
  //   params: {
  //     appKey: '9912e827691b4388bee44f6e11547d6f',
  //     appSecret: '43001952c9770cc2f4d315dc3254dfca',
  //   },
  // })
  //   .then(function (response) {
  //     //let str=JSON.parse(response);
  //     console.log(response);
  //
  //
  //   })
  //   .catch(function (error) {
  //     console.log(error);
  //   });
  render() {
    let autoplay = 0;
    let arr: Array<string> = [
      'D54877405',//循环水泵站
      '240209926',//循环水泵站河岸边
      'D74121766',//截留泵站池内
      'D02451881',//循环水泵站内
      'D02451955',//截留泵站内
      'D02451907',//截留本站西闸
      'D02451918',//人工湿地
      'D02451942',//循环水泵站河岸取水口
    ];
    const {AccessToken} = this.state;
    return (
      <PageHeaderWrapper>
        <div style={{background: '#ECECEC', padding: '30px'}}>
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
                />
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
              <Divider type="vertical"/>
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
                />
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
              <Divider type="vertical"/>
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
                />
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
              <Divider type="vertical"/>
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
                />
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
              <Divider type="vertical"/>
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
                />
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
              <Divider type="vertical"/>
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
                />
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
              <Divider type="vertical"/>
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
                />
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
              <Divider type="vertical"/>
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
                />
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
              <Divider type="vertical"/>
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
  }


};
export default Jk;
