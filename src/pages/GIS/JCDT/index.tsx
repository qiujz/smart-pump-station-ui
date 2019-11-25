import React from 'react';
// @ts-ignore
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
import { Button } from 'antd';
import { PageHeaderWrapper } from '@ant-design/pro-layout';
import styles from './index.less';

const { Content } = Label;
const { Point, Path, Size } = Base;
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
    editing: false,
  };

  handleEnable = () => {
    this.setState({
      editing: true,
    });
  };

  handleDisable = () => {
    this.setState({
      editing: false,
    });
  };

  render() {
    const { editing } = this.state;

    return (
      <PageHeaderWrapper className={styles.main}>
        <div style={{ height: '100vh' }}>
          <Map ak="R6nej5fILtmiQ2BUh6EfRmy3" zoom={17} scrollWheelZoom autoResize>
            <Point name="center" lng="120.090101" lat="31.655085" />

            <Polyline strokeColor="blue" strokeWeight={20} strokeOpacity={0.8} editing={editing}>
              <Path>
                {polylinePoints.map(item => (
                  <Point lng={item.lng} lat={item.lat} />
                ))}
              </Path>
            </Polyline>
            <Polygon
              strokeColor="black"
              strokeWeight={10}
              strokeOpacity={0.8}
              editing={editing}
              fillColor={0}
            >
              <Path>
                {polygonPoints.map(item => (
                  <Point lng={item.lng} lat={item.lat} />
                ))}
              </Path>
            </Polygon>
            <MapType
              anchor={CONTROL_ANCHOR.TOP_LEFT}
              mapTypes={[MAP_TYPE.HYBRID, MAP_TYPE.NORMAL]}
            />

            <OverviewMap anchor={CONTROL_ANCHOR.BOTTOM_RIGHT} isOpen />

            <Marker animation={ANIMATION.BOUNCE}>
              <Point lng="120.089743" lat=" 31.65524" />
              <Label>
                <Size name="offset" width="20" height="-5" />
                <Content>1</Content>
              </Label>
            </Marker>
            <Marker animation={ANIMATION.BOUNCE}>
              <Point lng="120.090201" lat=" 31.655209" />
              <Label>
                <Size name="offset" width="20" height="-5" />
                <Content>2</Content>
              </Label>
            </Marker>
            <Marker animation={ANIMATION.BOUNCE}>
              <Point lng="120.090857" lat="  31.655209" />
              <Label>
                <Size name="offset" width="20" height="-5" />
                <Content>3</Content>
              </Label>
            </Marker>
            <Marker animation={ANIMATION.BOUNCE}>
              <Point lng="120.092366" lat="  31.655286" />
              <Label>
                <Size name="offset" width="20" height="-5" />
                <Content>4</Content>
              </Label>
            </Marker>
            <Marker animation={ANIMATION.BOUNCE}>
              <Point lng="120.093165" lat=" 31.654641" />
              <Label>
                <Size name="offset" width="20" height="-5" />
                <Content>5</Content>
              </Label>
            </Marker>
            <Marker animation={ANIMATION.BOUNCE}>
              <Point lng="120.09295" lat="  31.65695" />
              <Label>
                <Size name="offset" width="20" height="-5" />
                <Content>6</Content>
              </Label>
            </Marker>
            <Marker animation={ANIMATION.BOUNCE}>
              <Point lng="120.094028" lat=" 31.656911" />
              <Label>
                <Size name="offset" width="20" height="-5" />
                <Content>7</Content>
              </Label>
            </Marker>

            <Marker animation={ANIMATION.BOUNCE}>
              <Point lng="120.089142" lat="31.657075" />
              <Label>
                <Size name="offset" width="0" height="60" />
                <Content>
                  武 <br />进 <br />港<br />
                </Content>
              </Label>
            </Marker>
            <Label>
              <Point name="position" lng="120.089475" lat="31.655373" />
              <Size name="offset" width="100" height="10" />
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
          <Button onClick={this.handleEnable}>开启线、面编辑功能</Button>
          <Button onClick={this.handleDisable}>关闭线、面编辑功能</Button>
        </div>
      </PageHeaderWrapper>
    );
  }
}

export default Example;
