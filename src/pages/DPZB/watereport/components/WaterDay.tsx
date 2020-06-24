import {Bar} from './Charts';
import React from 'react';
import {DatePicker, Select, Tag, Table, Button} from 'antd';
import moment from 'moment';

const {Option} = Select;

const children: any = [];
for (let i = 10; i < 36; i++) {
  children.push(<Option key={i.toString(36) + i}>{i.toString(36) + i}</Option>);
}

function handleChange(value: any) {
  console.log(`selected ${value}`);
}

const columns = [
  {
    title: '站点',
    dataIndex: 'station',
    key: 'station',
  },
  {
    title: '年龄',
    dataIndex: 'age',
    key: 'age',
  },
  {
    title: '住址',
    dataIndex: 'address',
    key: 'address',
  },
];
const WaterDay = ({waterDayValue}: { waterDayValue: any }) => (
  <div>
    <Tag color="purple">站点</Tag>{' '}
    <Select
      mode="multiple"
      style={{width: '10%'}}
      placeholder="Please select"
      defaultValue={['a10', 'c12']}
      onChange={handleChange}
    >
      {children}
    </Select>{' '}
    <Button>{moment().add(-2, 'days').format('MM-DD')}</Button><Button>{moment().add(-1, 'days').format('MM-DD')}</Button><DatePicker
    defaultValue={moment()} format={'YYYY-MM-DD'}/>
    <Bar height={200} title={'水量趋势'} data={waterDayValue}/>
    <div>
      <Table columns={columns}/>
    </div>
  </div>
);

export default WaterDay;
