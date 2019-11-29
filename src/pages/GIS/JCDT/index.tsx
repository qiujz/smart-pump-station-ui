import React from 'react';
import {
  Map,
  Polygon,
  Polyline,
  Base,
  MapType,
  OverviewMap,
  Constants,
  Marker,
  Label,
} from 'rc-bmap';
import styles from './index.less';
import { PageHeaderWrapper } from '@ant-design/pro-layout';
import {Drawer} from "antd";

const { Content } = Label;
const {Point, Path, Size, Events} = Base;
const { CONTROL_ANCHOR, MAP_TYPE, ANIMATION } = Constants;

const polylinePoints = [
  { lng: 120.08871, lat: 31.65547 },
  { lng: 120.089348, lat: 31.655332 },
  { lng: 120.089743, lat: 31.65524 },
  { lng: 120.090201, lat: 31.655209 },
  { lng: 120.090857, lat: 31.655209 },
  { lng: 120.092366, lat: 31.655286 },
  { lng: 120.093165, lat: 31.654641 },
  { lng: 120.09295, lat: 31.65695 },
  { lng: 120.094028, lat: 31.656911 },
  { lng: 120.095088, lat: 31.655482 },
];

const polygonPoints = [
  { lng: 120.085543, lat: 31.65089 },
  { lng: 120.087987, lat: 31.654717 },
  { lng: 120.088711, lat: 31.661052 },
  { lng: 120.090921, lat: 31.660975 },
  { lng: 120.092349, lat: 31.658236 },
  { lng: 120.095116, lat: 31.657068 },
  { lng: 120.095134, lat: 31.652718 },
  { lng: 120.09005, lat: 31.649721 },
  { lng: 120.09005, lat: 31.649721 },
  { lng: 120.087526, lat: 31.650067 },
];

class Example extends React.Component {
  state = {

    drawerVisible: false,
    drawerTitle: {},
    drawerContent: {},
  };

  showDrawer = (content: string) => {
    switch (content) {
      case "镇北排涝站":
        this.state.drawerTitle = "镇北排涝站";
        this.state.drawerContent = "分割内外河水位。暂未接入平台";
        break;
      case "截留泵站-泵站内":
        this.state.drawerTitle = "截留泵站-泵站内";
        this.state.drawerContent = "设备面板+2个监控面板，设备面板显示两个泵的运行状态";
        break;
      case "镇北排涝站":
        this.state.drawerTitle = "截留泵站-河岸边";
        this.state.drawerContent = "监控面板";
        break;
      case "截留泵站-西闸":
        this.state.drawerTitle = "截留泵站-西闸";
        this.state.drawerContent = "设备面板+监控面板，设备面板显示闸门的开关状态（通过启闭机的开关信号确定）";
        break;
      case "截留泵站-东闸":
        this.state.drawerTitle = "截留泵站-东闸";
        this.state.drawerContent = "设备面板+监控面板，设备面板显示闸门的开关状态（通过启闭机的开关信号确定）";
        break;
      case "循环水泵站-人工湿地旁":
        this.state.drawerTitle = "循环水泵站-人工湿地旁";
        this.state.drawerContent = "监控面板";
        break;
      case "循环水泵站-泵站内":
        this.state.drawerTitle = "循环水泵站-泵站内";
        this.state.drawerContent = "设备面板+监控面板，设备面板显示两个泵的运行状态";
        break;
      case "循环水泵站-河岸取水口":
        this.state.drawerTitle = "循环水泵站-河岸取水口";
        this.state.drawerContent = "监控面板";
        break;
      case "洛阳二号泵站":
        this.state.drawerTitle = "洛阳二号泵站";
        this.state.drawerContent = "提升泵站。暂未接入平台";
        break;

    }
    this.setState({
      drawerVisible: true,
    });
  };

  onClose = () => {
    this.setState({
      drawerVisible: false,
    });
  };


  render() {


    return (
      <PageHeaderWrapper>
        <div className={styles.main}>
          <Map
            ak="R6nej5fILtmiQ2BUh6EfRmy3"
            zoom={19}
            scrollWheelZoom
            autoResize
            mapType={MAP_TYPE.SATELLITE}
          >
            <Point name="center" lng="120.0918750000" lat="31.6560620000" />

            {/*<Polyline strokeColor="#B3D8FF" strokeWeight={20} strokeOpacity={0.8} editing={editing}>*/}
            {/*  <Path>*/}
            {/*    {polylinePoints.map(item => (*/}
            {/*      <Point lng={item.lng} lat={item.lat} />*/}
            {/*    ))}*/}
            {/*  </Path>*/}
            {/*</Polyline>*/}
            <Polygon
              strokeColor="black"
              strokeWeight={5}
              strokeOpacity={0.8}
              editing={false}
              fillColor={0}
              strokeStyle={'dashed'}
            >
              <Path>
                {polygonPoints.map(item => (
                  <Point lng={item.lng} lat={item.lat} />
                ))}
              </Path>
            </Polygon>
            <MapType mapTypes={[MAP_TYPE.NORMAL, MAP_TYPE.SATELLITE]} />

            <Marker>
              <Point lng="120.0892470000" lat=" 31.6554480000" />
              <Label>
                <Size name="offset" width="20" height="-5" />
                <Content>镇北排涝站</Content>
              </Label>
              <Events click={() => this.showDrawer("镇北排涝站")}/>
            </Marker>
            <Marker>
              <Point lng="120.0892470000" lat=" 31.6550670000" />
              <Label>
                <Size name="offset" width="10" height="20" />
                <Content>截留泵站-泵站内</Content>
              </Label>
              <Events click={() => this.showDrawer("截留泵站-泵站内")}/>
            </Marker>
            <Marker>
              <Point lng="120.0900870000" lat="  31.6551250000" />
              <Label>
                <Size name="offset" width="20" height="-5" />
                <Content>截留泵站-河岸边</Content>
              </Label>
              <Events click={() => this.showDrawer("截留泵站-河岸边")}/>
            </Marker>
            <Marker>
              <Point lng="120.0895650000" lat=" 31.6551250000" />
              <Label>
                <Size name="offset" width="20" height="-5" />
                <Content>截留泵站-西闸</Content>
              </Label>
              <Events click={() => this.showDrawer("截留泵站-西闸")}/>
            </Marker>
            <Marker>
              <Point lng="120.0919820000" lat=" 31.6549180000" />
              <Label>
                <Size name="offset" width="20" height="-5" />
                <Content>截留泵站-东闸</Content>
              </Label>
              <Events click={() => this.showDrawer("截留泵站-东闸")}/>
            </Marker>
            <Marker>
              <Point lng="120.0890400000" lat="31.6556820000" />
              <Label>
                <Size name="offset" width="0" height="-25" />
                <Content>循环水泵站-人工湿地旁</Content>
              </Label>
              <Events click={() => this.showDrawer("循环水泵站-人工湿地旁")}/>
            </Marker>
            <Marker>
              <Point lng="120.0947660000" lat="31.6557090000" />
              <Label>
                <Size name="offset" width="20" height="-5" />
                <Content>循环水泵站-泵站内</Content>
              </Label>
              <Events click={() => this.showDrawer("循环水泵站-泵站内")}/>
            </Marker>

            <Marker>
              <Point lng="120.0947980000" lat="31.6558210000" />
              <Label>
                <Size name="offset" width="20" height="-10"/>
                <Content>循环水泵站-河岸取水口</Content>
                <Events click={() => this.showDrawer("循环水泵站-河岸取水口")}/>
              </Label>
            </Marker>

            <Marker>
              <Point lng="120.0895290000" lat="31.6556590000" />
              <Label>
                <Size name="offset" width="20" height="0"/>
                <Content>洛阳二号泵站</Content>
              </Label>
              <Events click={() => this.showDrawer("洛阳二号泵站")}/>
            </Marker>

            <Drawer
              title={this.state.drawerTitle}
              placement="top"
              closable={false}
              onClose={this.onClose}
              visible={this.state.drawerVisible}

            >
              <p>{this.state.drawerContent}</p>

            </Drawer>

            <Label>
              <Point name="position" lng="120.089475" lat="31.655373" />
              <Size name="offset" width="550" height="10" />
              <Content>徐家头浜</Content>
            </Label>
            <Label>
              <Point name="position" lng="120.095233" lat="31.655227" />
              <Size name="offset" width="10" height="60" />
              <Content>
                阳<br />光<br />路<br />
              </Content>
            </Label>
            <Label>
              <Point name="position" lng="120.089825" lat="31.654367" />
              <Size name="offset" width="100" height="10" />
              <Content>新科路</Content>
            </Label>
            <Label>
              <Point name="position" lng="120.093472" lat="31.651861" />
              <Size name="offset" width="100" height="10" />
              <Content>洛阳中学</Content>
            </Label>
          </Map>
          {/*<Button onClick={this.handleEnable}>开启线、面编辑功能</Button>*/}
          {/*<Button onClick={this.handleDisable}>关闭线、面编辑功能</Button>*/}
        </div>
      </PageHeaderWrapper>
    );
  }
}

export default Example;
