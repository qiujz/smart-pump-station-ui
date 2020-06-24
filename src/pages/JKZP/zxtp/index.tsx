import {PageHeaderWrapper} from '@ant-design/pro-layout';
import React, {Component} from 'react';
import {Anchor, Carousel} from 'antd';
import styles from './index.less';
import request from "@/utils/request";
import Constants from "@/utils/Constants"

const {Link} = Anchor;

class PicLatest extends Component {
  state = {picAddr: []};


  componentDidMount(): void {

    request(Constants.baseUrl + "/pic/fetch",).then((data) => {
      let str = '';
      str = JSON.stringify(data);
      this.setState({picAddr: JSON.parse(str)});
    });

    // console.log("picAddr:" + this.state.picAddr[0]);
  }

  render() {
    const {picAddr} = this.state;

    return (
      <PageHeaderWrapper className={styles.main}>

      <div className={styles.pic2}>
          {/*    /!*<div aria-hidden="true" style={{width: 110, height: 160}}></div>*!/*/}
          <div className={styles.pic} style={{position: "fixed", top: 76, width: 210, height: 260}}>
            {/*<div>*/}
            <Anchor affix={true}>
              {/*<li  title="截留泵河岸边站"><a href={"#1"}>截留泵河岸边站</a></li>*/}
              {/*<li  title="循环水泵站内"><a href={"#2"}>循环水泵站内</a></li>*/}
              {/*<li  title="截留泵站西闸"><a href={"#3"}>截留泵站西闸</a></li>*/}
              {/*<li  title="人工湿地"><a href={"#4"}>人工湿地</a></li>*/}
              {/*<li  title="循环水本站河岸取水口"><a href={"#5"}>循环水本站河岸取水口</a></li>*/}
              {/*<li  title="截留泵站内"><a href={"#6"}>截留泵站内</a></li>*/}
              {/*<li  title="截留泵站东闸"><a href={"#7"}>截留泵站东闸</a></li>*/}
              {/*<li  title="截留泵站池内"><a href={"#8"}>截留泵站池内</a></li>*/}
              <Link href="#1" title="截留泵河岸边站"/>
              <Link href="#2" title="循环水泵站内"/>
              <Link href="#3" title="截留泵站西闸"/>
              <Link href="#4" title="人工湿地"/>
              <Link href="#5" title="循环水本站河岸取水口"/>
              <Link href="#6" title="截留泵站内"/>
              <Link href="#7" title="截留泵站东闸"/>
              <Link href="#8" title="截留泵站池内"/>
            </Anchor>
          </div>
        </div>
        <div>
          <div id={"1"}>
            <div><h2>截留泵河岸边站</h2></div>
            <div>
              <Carousel autoplay>
                <div style={{width: '80vh', height: '60vh'}}>
                  <img src={picAddr[0]}/>
                </div>
                <div style={{width: '80vh', height: '60vh'}}>
                  <img src={picAddr[1]}/>
                </div>
                <div style={{width: '80vh', height: '60vh'}}>
                  <img src={picAddr[2]}/>
                </div>
                <div style={{width: '80vh', height: '60vh'}}>
                  <img src={picAddr[3]}/>
                </div>
              </Carousel>
            </div>
          </div>
          <div id={"2"}>
            <div><h2>循环水泵站内</h2></div>
            <div>
              <Carousel autoplay>
                <div style={{width: '80vh', height: '60vh'}}>
                  <img src={picAddr[4]}/>
                </div>
                <div style={{width: '80vh', height: '60vh'}}>
                  <img src={picAddr[5]}/>
                </div>
                <div style={{width: '80vh', height: '60vh'}}>
                  <img src={picAddr[6]}/>
                </div>
                <div style={{width: '80vh', height: '60vh'}}>
                  <img src={picAddr[7]}/>
                </div>
              </Carousel>
            </div>
          </div>
          <div id={"3"}>
            <div><h2>截留泵站西闸</h2></div>
            <div>
              <Carousel autoplay>
                <div style={{width: '80vh', height: '60vh'}}>
                  <img src={picAddr[8]}/>
                </div>
                <div style={{width: '80vh', height: '60vh'}}>
                  <img src={picAddr[9]}/>
                </div>
                <div style={{width: '80vh', height: '60vh'}}>
                  <img src={picAddr[10]}/>
                </div>
                <div style={{width: '80vh', height: '60vh'}}>
                  <img src={picAddr[11]}/>
                </div>
              </Carousel>
            </div>
          </div>
          <div id={"4"}>
            <div><h2>人工湿地</h2></div>
            <div>
              <Carousel autoplay>
                <div style={{width: '80vh', height: '60vh'}}>
                  <img src={picAddr[12]}/>
                </div>
                <div style={{width: '80vh', height: '60vh'}}>
                  <img src={picAddr[13]}/>
                </div>
                <div style={{width: '80vh', height: '60vh'}}>
                  <img src={picAddr[14]}/>
                </div>
                <div style={{width: '80vh', height: '60vh'}}>
                  <img src={picAddr[15]}/>
                </div>
              </Carousel>
            </div>
          </div>
          <div id={"5"}>
            <div><h2>循环水本站河岸取水口</h2></div>
            <div>
              <Carousel autoplay>
                <div style={{width: '80vh', height: '60vh'}}>
                  <img src={picAddr[16]}/>
                </div>
                <div style={{width: '80vh', height: '60vh'}}>
                  <img src={picAddr[17]}/>
                </div>
                <div style={{width: '80vh', height: '60vh'}}>
                  <img src={picAddr[18]}/>
                </div>
                <div style={{width: '80vh', height: '60vh'}}>
                  <img src={picAddr[19]}/>
                </div>
              </Carousel>
            </div>
          </div>
          <div id={"6"}>
            <div><h2>截留泵站内</h2></div>
            <div>
              <Carousel autoplay>
                <div style={{width: '80vh', height: '60vh'}}>
                  <img src={picAddr[20]}/>
                </div>
                <div style={{width: '80vh', height: '60vh'}}>
                  <img src={picAddr[21]}/>
                </div>
                <div style={{width: '80vh', height: '60vh'}}>
                  <img src={picAddr[22]}/>
                </div>
                <div style={{width: '80vh', height: '60vh'}}>
                  <img src={picAddr[23]}/>
                </div>
              </Carousel>
            </div>
          </div>
          <div id={"7"}>
            <div><h2>截留泵站东闸</h2></div>
            <div>
              <Carousel autoplay>
                <div style={{width: '80vh', height: '60vh'}}>
                  <img src={picAddr[24]}/>
                </div>
                <div style={{width: '80vh', height: '60vh'}}>
                  <img src={picAddr[25]}/>
                </div>
                <div style={{width: '80vh', height: '60vh'}}>
                  <img src={picAddr[26]}/>
                </div>
                <div style={{width: '80vh', height: '60vh'}}>
                  <img src={picAddr[27]}/>
                </div>
              </Carousel>
            </div>
          </div>

          <div id={"8"}>
            <div><h2>截留泵站池内</h2></div>
            <div>
              <Carousel autoplay>
                <div style={{width: '80vh', height: '60vh'}}>
                  <img src={picAddr[28]}/>
                </div>
                <div style={{width: '80vh', height: '60vh'}}>
                  <img src={picAddr[29]}/>
                </div>
                <div style={{width: '80vh', height: '60vh'}}>
                  <img src={picAddr[30]}/>
                </div>
                <div style={{width: '80vh', height: '60vh'}}>
                  <img src={picAddr[31]}/>
                </div>
              </Carousel>
            </div>
          </div>
        </div>
      </PageHeaderWrapper>
    );
  }
};
export default PicLatest;
