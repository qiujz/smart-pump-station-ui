import {Col, Dropdown, Icon, Menu, Row, Table, Tabs, Tooltip} from 'antd';
import React, {Component} from 'react';
import {Dispatch} from 'redux';
import {PageHeaderWrapper} from '@ant-design/pro-layout';
import {RadioChangeEvent} from 'antd/es/radio';
import {RangePickerValue} from 'antd/es/date-picker/interface';
import {connect} from 'dva';
import {ChartCard, Field, MiniBar} from './components/Charts';
import {AnalysisData} from './data.d';
import styles from './style.less';
import moment from 'moment';
import numeral from 'numeral';

const {TabPane} = Tabs;

interface WateranalysisProps {
  dpzbAndwateranalysis: AnalysisData;
  dispatch: Dispatch<any>;
  loading: boolean;
}

interface WateranalysisState {
  salesType: 'all' | 'online' | 'stores';
  currentTabKey: string;
  rangePickerValue: RangePickerValue;
}

class Wateranalysis extends Component<WateranalysisProps, WateranalysisState> {
  state: WateranalysisState = {
    salesType: 'all',
    currentTabKey: '',
    //  rangePickerValue: getTimeDistance('year'),
  };

  columns = [
    {
      title: '时段',
      dataIndex: 'time',
    },
    {
      title: '抄表时间',
      dataIndex: 'actTime',
    },
    {
      title: '抄表状态',
      dataIndex: 'actStat',
    },
    {
      title: '水量',
      dataIndex: 'amount',
    },
    {
      title: '操作',
      dataIndex: 'date',
    },
  ];

  componentDidMount() {
    const {dispatch} = this.props;
    this.reqRef = requestAnimationFrame(() => {
      dispatch({
        type: 'dpzbAndwateranalysis/fetch',
      });
    });
  }

  componentWillUnmount() {
    const {dispatch} = this.props;
    dispatch({
      type: 'dpzbAndwateranalysis/clear',
    });
    cancelAnimationFrame(this.reqRef);
    clearTimeout(this.timeoutId);
  }

  handleChangeSalesType = (e: RadioChangeEvent) => {
    this.setState({
      salesType: e.target.value,
    });
  };

  handleTabChange = (key: string) => {
    this.setState({
      currentTabKey: key,
    });
  };

  handleRangePickerChange = (rangePickerValue: RangePickerValue) => {
    const {dispatch} = this.props;
    this.setState({
      rangePickerValue,
    });

    dispatch({
      type: 'dpzbAndwateranalysis/fetchSalesData',
    });
  };

  selectDate = (type: 'today' | 'week' | 'month' | 'year') => {
    const {dispatch} = this.props;
    this.setState({
      //   rangePickerValue: getTimeDistance(type),
    });

    dispatch({
      type: 'dpzbAndwateranalysis/fetchSalesData',
    });
  };

  // isActive = (type: 'today' | 'week' | 'month' | 'year') => {
  //   const { rangePickerValue } = this.state;
  // //  const value = getTimeDistance(type);
  //   if (!rangePickerValue[0] || !rangePickerValue[1]) {
  //     return '';
  //   }
  //   if (
  //     rangePickerValue[0].isSame(value[0], 'day') &&
  //     rangePickerValue[1].isSame(value[1], 'day')
  //   ) {
  //     return styles.currentDate;
  //   }
  //   return '';
  // };
  callback = (key: string) => {
    console.log(key);
  };

  render() {
    const {salesType} = this.state;
    const {dpzbAndwateranalysis} = this.props;
    const menu = (
      <Menu>
        <Menu.Item>截流泵站</Menu.Item>
        <Menu.Item>循环水泵站</Menu.Item>
      </Menu>
    );
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
          <Dropdown overlay={menu}>
            <a>
              站点 <Icon type="down"/>
            </a>
          </Dropdown>
        </div>
        <div className={styles.exp}>
          AI Bot： 本次抄表时间 xx:xx:xx xx:xx 下次抄表时间 xx:xx:xx xx:xx
        </div>
        <div>
          <Row>
            <Col span={6}>
              {' '}
              <ChartCard
                title="今日水量"
                action={
                  <Tooltip title="指标说明">
                    <Icon type="info-circle-o"/>
                  </Tooltip>
                }
                total={numeral(8846).format('0,0')}
                footer={<Field label="今日水量" value={numeral(1234).format('0,0')}/>}
                contentHeight={46}
              >
                <MiniBar height={46} data={visitData}/>
              </ChartCard>
            </Col>
            <Col span={6}>
              <ChartCard
                title="本月水量"
                action={
                  <Tooltip title="指标说明">
                    <Icon type="info-circle-o"/>
                  </Tooltip>
                }
                total={numeral(8846).format('0,0')}
                footer={<Field label="本月水量" value={numeral(1234).format('0,0')}/>}
                contentHeight={46}
              >
                <MiniBar height={46} data={visitData}/>
              </ChartCard>
            </Col>
            <Col span={6}>
              <ChartCard
                title="本年水量"
                action={
                  <Tooltip title="指标说明">
                    <Icon type="info-circle-o"/>
                  </Tooltip>
                }
                total={numeral(8846).format('0,0')}
                footer={<Field label="本年水量" value={numeral(1234).format('0,0')}/>}
                contentHeight={46}
              >
                <MiniBar height={46} data={visitData}/>
              </ChartCard>
            </Col>
          </Row>
        </div>
        <div>
          <Tabs defaultActiveKey="1" onChange={this.callback}>
            <TabPane tab="今日水量" key="1">
              <Table columns={this.columns}/>
            </TabPane>
            <TabPane tab="昨日水量" key="2">
              <Table columns={this.columns}/>
            </TabPane>
            <TabPane tab="前日水量" key="3">
              <Table columns={this.columns}/>
            </TabPane>
          </Tabs>
        </div>
      </PageHeaderWrapper>
    );
  }
}

export default connect(
  ({
     dpzbAndwateranalysis,
     loading,
   }: {
    dpzbAndwateranalysis: any;
    loading: {
      effects: { [key: string]: boolean };
    };
  }) => ({
    dpzbAndwateranalysis,
    loading: loading.effects['dpzbAndwateranalysis/fetch'],
  }),
)(Wateranalysis);
