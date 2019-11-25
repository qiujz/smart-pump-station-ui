import React from "react";

declare class GaoDeAMap {
  constructor(container: HTMLElement, option: { center: [number, number]; zoom: number });

  public destroy(): void;
}

// 定义全局的 AMap
declare const AMap: {
  Map: typeof GaoDeAMap;
};


// tslint:disable-next-line:max-classes-per-file
class MapComponent extends React.Component {
  public mapDom: HTMLDivElement;
  public map: GaoDeAMap;

  public componentDidMount() {
    const map = new AMap.Map(this.mapDom, {
      center: [117.000923, 36.675807],
      zoom: 11,
    });
    this.map = map;
  }

  public componentWillUnmount() {
    this.map.destroy();
  }

  public render() {
    return <div ref = {ref
  =>
    (this.mapDom = ref)
  }
    />;
  }
}

export default MapComponent;


let map = new BMap.Map('allmap');
const point1 = new BMap.Point(120.083457, 31.651111);
const point2 = new BMap.Point(116.417854, 39.921988);
map.centerAndZoom(point1, 15);
const opts1 = {
  position: point1, // 指定文本标注所在的地理位置
  offset: new BMap.Size(30, -30), // 设置文本偏移量
}
const opts2 = {
  position: point2, // 指定文本标注所在的地理位置
  offset: new BMap.Size(30, -30), // 设置文本偏移量
}
const label1 = new BMap.Label('欢迎使用百度地图，这是一个简单的文本标注1哦1~', opts1); // 创建文本标注对象
// eslint-disable-next-line no-undef

label1.setStyle({
  color: 'red',
  fontSize: '12px',
  height: '20px',
  lineHeight: '20px',
  fontFamily: '微软雅黑',
});
const label2 = new BMap.Label('欢迎使用百度地图，这是一个简单的文本标注2哦1~', opts2); // 创建文本标注对象
// eslint-disable-next-line no-undef
// @ts-ignore
label2.setStyle({
  color: 'red',
  fontSize: '12px',
  height: '20px',
  lineHeight: '20px',
  fontFamily: '微软雅黑',
});
map.addOverlay(label1);
map.addOverlay(label2);
// // 创建地图实例
// var point = new BMap.Point(116.404, 39.915);
// // 创建点坐标
// map.centerAndZoom(point, 15);
// // 初始化地图，设置中心点坐标和地图级别
// </script>   */}
componentDidMount()
{
  const {BMap, BMAP_STATUS_SUCCESS, BMAP_ANCHOR_TOP_LEFT} = window;
  var map = new BMap.Map("allmap");
  var point = new BMap.Point(116.404, 39.915);
  map.centerAndZoom(point, 14);
  map.enableScrollWheelZoom();
  map.enableInertialDragging();
  map.enableContinuousZoom();
  var size = new BMap.Size(10, 20);
  map.addControl(new BMap.CityListControl({
    anchor: BMAP_ANCHOR_TOP_LEFT,
    offset: size,
  }));
  var geolocation = new BMap.Geolocation();
  geolocation.getCurrentPosition(function (r) {
    if (this.getStatus() == BMAP_STATUS_SUCCESS) {
      var mk = new BMap.Marker(r.point);
      map.addOverlay(mk);
      map.panTo(r.point);
      alert('您的位置：' + r.point.lng + ',' + r.point.lat);
    } else {
      alert('failed' + this.getStatus());
    }
  }, {enableHighAccuracy: true})
}
<NavigationControl / >
<MapTypeControl / >
<ScaleControl / >
<OverviewMapControl / >
{/* <PanoramaControl anchor={BMAP_ANCHOR_TOP_RIGHT} offset={new BMap.Size(10, 40)}/ > */}
< Map
key = "marker-order-tip"
enableScrollWheelZoom
center = {
{
  lng: '120.090101',
    lat
:
  ' 31.655085',
}
}
zoom = "17"
mapStyle = {
{
  style: 'midnight',
}
}
>
<Marker
  position = {
{
  lng: 120.090101,
    lat
:
  31.655085,
}
}
enableClicking
icon = "red1"
events = {
{
  click: () => {
    alert('marker1 click event');
  },
}
}
/>
< Marker
position = {
{
  lng: 120.095101,
    lat
:
  31.658085,
}
}
enableClicking
icon = "red2"
events = {
{
  click: () => {
    console.log('marker click event');
    alert('marker2 click event');
  },
}
}
/>
{/* <InfoWindow position={{ lng: 120.083457, lat: 31.651111 }} width={60} height={80} text="这是一号泵"/> */
}
{/* <InfoWindow position={{ lng: 120.084557, lat: 31.651111 }} width={60} height={80} text="这是二号泵"/> */
}
<NavigationControl / >
<MapTypeControl MapType = "BMAP_SATELLITE_MAP" / >
  <ScaleControl / >
  <OverviewMapControl / >
  </Map>
import {
  Map,
  Marker,
  NavigationControl,
  MapTypeControl,
  ScaleControl,
  OverviewMapControl,
  InfoWindow,
  BMapLib,
  PanoramaControl,
  BMap,
} from 'react-bmap';

const map = new BMap.Map('allmap');
map.centerAndZoom(new BMap.Point(120.090101, 31.655085), 15);
map.enableScrollWheelZoom();

const polyline = new BMap.Polyline([
  new BMap.Point(120.090101, 31.655085),
  new BMap.Point(120.090101, 31.655085),
  new BMap.Point(120.090101, 31.655085),
], {strokeColor: 'blue', strokeWeight: 2, strokeOpacity: 0.5}); // 创建折线
map.addOverlay(polyline); // 增加折线

const polygon = new BMap.Polygon([
  new BMap.Point(120.090101, 31.655085),
  new BMap.Point(120.093101, 31.665085),
  new BMap.Point(120.096101, 31.675085),
  new BMap.Point(120.098101, 31.685085),
  new BMap.Point(120.099101, 31.695085),
], {strokeColor: 'blue', strokeWeight: 2, strokeOpacity: 0.5}); // 创建多边形
map.addOverlay(polygon); // 增加多边形

<div
  style = {
{
  paddingTop: 0,
    textAlign
:
  'center',
}
}
>
<Spin spinning = {loading}
size = "large" > </Spin>
  < /div>


import {PageHeaderWrapper} from '@ant-design/pro-layout';
import React from 'react';


import styles from './index.less';

export default class Jcdt extends React.Component {
  componentDidMount() {
    const map = new BMap.Map('allmap');
    map.centerAndZoom(new BMap.Point(120.090101, 31.655085), 15);
    map.enableScrollWheelZoom();

    const polyline = new BMap.Polyline([
      new BMap.Point(120.090101, 31.655085),
      new BMap.Point(120.090101, 31.655085),
      new BMap.Point(120.090101, 31.655085),
    ], {strokeColor: 'blue', strokeWeight: 2, strokeOpacity: 0.5}); // 创建折线
    map.addOverlay(polyline); // 增加折线

    const polygon = new BMap.Polygon([
      new BMap.Point(120.090101, 31.655085),
      new BMap.Point(120.093101, 31.665085),
      new BMap.Point(120.096101, 31.675085),
      new BMap.Point(120.098101, 31.685085),
      new BMap.Point(120.099101, 31.695085),
    ], {strokeColor: 'blue', strokeWeight: 2, strokeOpacity: 0.5}); // 创建多边形
    map.addOverlay(polygon); // 增加多边形
  }

  render() {
    return (<PageHeaderWrapper content = "这是一个新页面，从这里进行开发！"
    className = {styles.main} >


    <div id = "allmap" >

      </div>
      < /PageHeaderWrapper>)
  }
}
<script type = "text/javascript"
src = "http://api.map.baidu.com/api?v=3.0&ak=R6nej5fILtmiQ2BUh6EfRmy3" >
//v3.0版本的引用方式：src="http://api.map.baidu.com/api?v=3.0&ak=您的密钥"
</script>
< script >
window.BMap = BMap
< /script>


< Marker >
<Point name = "position"
lng = "120.089142"
lat = "31.657075" / >
<Label>
  <Size name = "offset"
width = "10"
height = "60" / >
  <Content>
    武 < br / > 进 < br / > 港 < br / >
  </Content>
  < /Label>
  < /Marker>
