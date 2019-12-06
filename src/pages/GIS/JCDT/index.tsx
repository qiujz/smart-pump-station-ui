
import {
  Map,
  Polygon,
  Base,
  Constants,
  Marker,
  Label,
  Ground,

} from 'rc-bmap';
import styles from './index.less';
import { PageHeaderWrapper } from '@ant-design/pro-layout';
import {Drawer, Table, Button,} from "antd";
import {Dispatch} from "redux";
import {StateType} from "@/pages/GIS/JCDT/model";
import {connect} from "dva";
import {Component} from "react";
import React from 'react';


const { Content } = Label;
const {Point, Path, Size, Events, Bounds} = Base;
const {MAP_TYPE} = Constants;

// const polylinePoints = [
//   { lng: 120.08871, lat: 31.65547 },
//   { lng: 120.089348, lat: 31.655332 },
//   { lng: 120.089743, lat: 31.65524 },
//   { lng: 120.090201, lat: 31.655209 },
//   { lng: 120.090857, lat: 31.655209 },
//   { lng: 120.092366, lat: 31.655286 },
//   { lng: 120.093165, lat: 31.654641 },
//   { lng: 120.09295, lat: 31.65695 },
//   { lng: 120.094028, lat: 31.656911 },
//   { lng: 120.095088, lat: 31.655482 },
// ];
let interval: any = undefined;
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


interface TableListProps {
  dispatch: Dispatch<any>;
  loading: boolean;
  listTableListDt: StateType;

}

interface TableListState {
  drawerVisible: boolean;
  drawerTitle: string;
  drawerContent: string;
  isShow: boolean;
  tableVisible: boolean;
}

//
// /* eslint react/no-multi-comp:0 */
@connect(
  ({
     listTableListDt,
     loading,
   }: {
    listTableListDt: StateType;
    loading: {
      models: {
        [key: string]: boolean;
      };
    };
  }) => ({
    listTableListDt,
    loading: loading.models.rule,
  }),
)

class PumpMap extends Component <TableListProps, TableListState> {

  state: TableListState = {
    drawerVisible: false,
    drawerTitle: '',
    drawerContent: '',
    isShow: false,
    tableVisible: true,
  }



  columns1 = [

    {
      title: '设备名称',
      dataIndex: 'name',
    },
    {
      title: '信号描述',
      dataIndex: 'description',
    },
    {

      title: '数值',
      dataIndex: 'value',
    },
    {

      title: '备注',
      dataIndex: 'comments',
    },
    {
      title: '上报时间',
      dataIndex: 'date'
    }

  ];
  //
  // MP(ak: string) {
  //   return new Promise(function (resolve, reject) {
  //     var script = document.createElement('script')
  //     script.type = 'text/javascript'
  //     script.src = `http://api.map.baidu.com/api?v=3.0&ak=${ak}&callback=init`;
  //     document.head.appendChild(script)
  //     window.init = () => {
  //       resolve(window.BMap)
  //     }
  //   })
  // }

  // componentDidMount(){
  //   // @ts-ignore
  //   let BMap = window.BMap;
  //   var map = new BMap.Map("allmap"); // 创建Map实例
  //   map.centerAndZoom(new BMap.Point(116.404, 39.915), 11); // 初始化地图,设    置中心点坐标和地图级别
  //   map.addControl(new BMap.MapTypeControl()); //添加地图类型控件
  //   map.setCurrentCity("北京"); // 设置地图显示的城市 此项是必须设置的
  //   map.enableScrollWheelZoom(true); //开启鼠标滚轮缩放
  // }


  componentWillUnmount(): void {
    clearInterval(interval);
  }



  showDrawer = (content: string) => {
    // let data1={
    //   key:0,
    //   name:'',
    //   description:'',
    //   value:'',
    //
    // };
    // let data2=[];

    const {dispatch} = this.props;
    let code: any = [];
    switch (content) {

      case "镇北排涝站":
        this.state.drawerTitle = "镇北排涝站";
        this.state.drawerContent = "分割内外河水位。暂未接入平台";
        clearInterval(interval);
        this.setState({
          tableVisible: false,
        });
        break;
      case "截留泵站-泵站内":
        this.state.drawerTitle = "截留泵站-泵站内";
        this.state.drawerContent = "设备面板+2个监控面板，设备面板显示两个泵的运行状态";
        code = ["0000103", "0000108", "0000135", "0000136", "0000146", "0000147"];
        //let code1=JSON.stringify(code);
        // let i=0;
        // for(let ldt in this.props.listTableListDt.data.list){
        //   for (let c of code){
        //     if(ldt["code"]===c){
        //       data1.key=i;
        //       data1.name=ldt["name"];
        //       data1.description=ldt["description"];
        //       data1.value=ldt["value"];
        //       this.props.tableDataPro.push(data1);
        //       data2.push(data1);
        //       i++;
        //     }
        //   }
        // }

        interval = setInterval(() => {
          dispatch({
            type: 'listTableListDt/latestByCodeArray',
            payload: {code: code},
          });
        }, 2000);
        this.setState({
          tableVisible: true,
        });
        break;
      case "截留泵站-河岸边":
        this.state.drawerTitle = "截留泵站-河岸边";
        this.state.drawerContent = "监控面板";
        clearInterval(interval);
        this.setState({
          tableVisible: false,
        });
        break;
      case "截留泵站-西闸":
        this.state.drawerTitle = "截留泵站-西闸";
        this.state.drawerContent = "设备面板+监控面板，设备面板显示闸门的开关状态（通过启闭机的开关信号确定）";
        code = ["0000160", "0000161"];
        interval = setInterval(() => {
          dispatch({
            type: 'listTableListDt/latestByCodeArray',
            payload: {code: code},
          });
        }, 2000);
        this.setState({
          tableVisible: true,
        });
        break;
      case "截留泵站-东闸":
        this.state.drawerTitle = "截留泵站-东闸";
        this.state.drawerContent = "设备面板+监控面板，设备面板显示闸门的开关状态（通过启闭机的开关信号确定）";
        code = ["0000173", "0000174"];
        interval = setInterval(() => {
          dispatch({
            type: 'listTableListDt/latestByCodeArray',
            payload: {code: code},
          });
        }, 2000);
        this.setState({
          tableVisible: true,
        });
        break;
      case "循环水泵站-人工湿地旁":
        this.state.drawerTitle = "循环水泵站-人工湿地旁";
        this.state.drawerContent = "监控面板";
        clearInterval(interval);
        this.setState({
          tableVisible: false,
        });
        break;
      case "循环水泵站-泵站内":
        this.state.drawerTitle = "循环水泵站-泵站内";
        this.state.drawerContent = "设备面板+监控面板，设备面板显示两个泵的运行状态";
        code = ["0000005", "0000010"];
        interval = setInterval(() => {
          dispatch({
            type: 'listTableListDt/latestByCodeArray',
            payload: {code: code},
          });
        }, 2000);
        this.setState({
          tableVisible: true,
        });
        break;
      case "循环水泵站-河岸取水口":
        this.state.drawerTitle = "循环水泵站-河岸取水口";
        this.state.drawerContent = "监控面板";
        clearInterval(interval);
        this.setState({
          tableVisible: false,
        });
        break;
      case "洛阳二号泵站":
        this.state.drawerTitle = "洛阳二号泵站";
        this.state.drawerContent = "提升泵站。暂未接入平台";
        clearInterval(interval);
        this.setState({
          tableVisible: false,
        });
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
    clearInterval(interval);
  };
  handleClick = () => {
    //  console.log('click');

    this.setState({isShow: false});
  }
  handleDbClick = () => {
    // console.log('dbclick');

    this.setState({
      isShow: true
    });
  }
  //
  // render(){
  //
  //
  //   //添加地图类型控件
  //   return(
  //     <div className={styles.main}>
  //       <div id='allmap' className={styles.main} ></div>
  //     </div>
  //   )
  // }


  // render(){
  //   const { pos } = this.state;
  //   return (
  //     <PageHeaderWrapper>
  //
  //       <Bmap value={pos} onChange={(pos: any) => this.setState({pos})}/>
  //
  //     </PageHeaderWrapper>
  //   );
  // }

  render() {
    const {
      listTableListDt: {data},
    } = this.props;
    let {
      isShow,
      tableVisible,
    } = this.state;

    return (

      <PageHeaderWrapper>
      <div className={styles.main}>

        <Button onClick={this.handleDbClick}>开启工程图</Button>
        <Button onClick={this.handleClick}>关闭工程图</Button>

        <Map
          ak="R6nej5fILtmiQ2BUh6EfRmy3"
          zoom={19}
          scrollWheelZoom
          mapType={MAP_TYPE.SATELLITE}
        >
          {/*<Events*/}
          {/*  click={this.handleClick}*/}
          {/*  dblclick={this.handleDbClick}*/}
          {/*/>*/}
          <Point name="center" lng="120.0918750000" lat="31.6560620000"/>

          {isShow && <Ground
              imageURL="http://img.pump.xliyun.com/1.png"
              opacity={isShow}
              displayOnMinLevel={10}
              displayOnMaxLevel={19}
          >
              <Bounds>
                  <Point name="sw" lng={120.0888680000} lat={31.654437}/>
                  <Point name="ne" lng={120.095105} lat={31.657585}/>
              </Bounds>

          </Ground>

          }

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
                <Point lng={item.lng} lat={item.lat}/>
              ))}
            </Path>
          </Polygon>
          {/*<MapType mapTypes={[MAP_TYPE.NORMAL, MAP_TYPE.SATELLITE]} />*/}

          <Marker>
            <Point lng="120.0892470000" lat="31.6554480000"/>
            <Label>
              <Size name="offset" width="20" height="-5"/>
              <Content>镇北排涝站</Content>
            </Label>
            <Events click={() => this.showDrawer("镇北排涝站")}/>
          </Marker>
          <Marker>
            <Point lng="120.0900610000" lat=" 31.6550520000"/>
            <Label>
              <Size name="offset" width="10" height="20"/>
              <Content>截留泵站-泵站内</Content>
            </Label>
            <Events click={() => this.showDrawer("截留泵站-泵站内")}/>
          </Marker>
          <Marker>
            <Point lng="120.0900870000" lat="  31.6551250000"/>
            <Label>
              <Size name="offset" width="20" height="-5"/>
              <Content>截留泵站-河岸边</Content>
            </Label>
            <Events click={() => this.showDrawer("截留泵站-河岸边")}/>
          </Marker>
          <Marker>
            <Point lng="120.0895650000" lat=" 31.6551250000"/>
            <Label>
              <Size name="offset" width="20" height="-5"/>
              <Content>截留泵站-西闸</Content>
            </Label>
            <Events click={() => this.showDrawer("截留泵站-西闸")}/>
          </Marker>
          <Marker>
            <Point lng="120.0919820000" lat=" 31.6549180000"/>
            <Label>
              <Size name="offset" width="20" height="-5"/>
              <Content>截留泵站-东闸</Content>
            </Label>
            <Events click={() => this.showDrawer("截留泵站-东闸")}/>
          </Marker>
          <Marker>
            <Point lng="120.0890400000" lat="31.6556820000"/>
            <Label>
              <Size name="offset" width="0" height="-25"/>
              <Content>循环水泵站-人工湿地旁</Content>
            </Label>
            <Events click={() => this.showDrawer("循环水泵站-人工湿地旁")}/>
          </Marker>
          <Marker>
            <Point lng="120.0947660000" lat="31.6557090000"/>
            <Label>
              <Size name="offset" width="20" height="-5"/>
              <Content>循环水泵站-泵站内</Content>
            </Label>
            <Events click={() => this.showDrawer("循环水泵站-泵站内")}/>
          </Marker>

          <Marker>
            <Point lng="120.0947980000" lat="31.6558210000"/>
            <Label>
              <Size name="offset" width="20" height="-10"/>
              <Content>循环水泵站-河岸取水口</Content>
              <Events click={() => this.showDrawer("循环水泵站-河岸取水口")}/>
            </Label>
          </Marker>

          <Marker>
            <Point lng="120.0895290000" lat="31.6556590000"/>
            <Label>
              <Size name="offset" width="20" height="0"/>
              <Content>洛阳二号泵站</Content>
            </Label>
            <Events click={() => this.showDrawer("洛阳二号泵站")}/>
          </Marker>

          <Drawer
            title={this.state.drawerTitle}
            placement="top"
            closable={true}
            onClose={this.onClose}
            visible={this.state.drawerVisible}
          >
            <p>{this.state.drawerContent}</p>
            {tableVisible &&
            <Table
                dataSource={data.list}
                columns={this.columns1}
                pagination={false}
            />
            }
          </Drawer>

          <Label>
            <Point name="position" lng="120.089475" lat="31.655373"/>
            <Size name="offset" width="550" height="10"/>
            <Content>徐家头浜</Content>
          </Label>
          <Label>
            <Point name="position" lng="120.095233" lat="31.655227"/>
            <Size name="offset" width="10" height="60"/>
            <Content>
              阳<br/>光<br/>路<br/>
            </Content>
          </Label>
          <Label>
            <Point name="position" lng="120.089825" lat="31.654367"/>
            <Size name="offset" width="100" height="10"/>
            <Content>新科路</Content>
          </Label>
          <Label>
            <Point name="position" lng="120.093472" lat="31.651861"/>
            <Size name="offset" width="100" height="10"/>
            <Content>洛阳中学</Content>
          </Label>


        </Map>

      </div>
      </PageHeaderWrapper>
    );
  }
}

export default PumpMap;
