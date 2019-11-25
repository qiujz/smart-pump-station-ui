import { PageHeaderWrapper } from '@ant-design/pro-layout';
import React, { useState, useEffect } from 'react';
import { Spin, Tabs, Icon, Table, Button  } from 'antd';
import styles from './index.less';


export default () => {
  const [loading, setLoading] = useState<boolean>(true);
  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 3000);
  }, []);
  const ButtonGroup = Button.Group;
  const { TabPane } = Tabs;
  const columns = [
    {
      title: '等级',
      dataIndex: 'grade',
    },
    {
      title: '告警名称',
      dataIndex: 'name',
    },
    {
      title: '告警对象',
      dataIndex: 'item',
    },
    {
      title: '最近发生时间',
      dataIndex: 'time',
    },
    {
      title: '告警次数',
      dataIndex: 'number',
    },
    {
      title: '操作',
      dataIndex: 'operate',
    },
  ];

  const data1 = [
    {
      key: '1',
      grade: '紧急',
      name: '设备故障',
      item: '泵站名>安装地点>设备名称',
      time: '2019-11-11 23:21:56',
    number: '2',
    operate: <ButtonGroup>
    <Button type="primary">处理</Button>
    <Button type="primary">忽略</Button>
  </ButtonGroup>,
    },
  ];
  const data2 = [
    {
      key: '1',
      grade: '紧急',
      name: '设备故障',
      item: '泵站名>安装地点>设备名称',
      time: '2019-11-11 23:21:56',
      number: '2',
      operate: 'admin 用户在 2019-11-11 23:21:56 执行了处理操作\n处理结果是：处理',
    },
  ];
  return (
    <PageHeaderWrapper content="这是一个新页面，从这里进行开发！" className={styles.main}>
      <div style={{ paddingTop: 0, textAlign: 'center' }}>
        <Spin spinning={loading} size="large"></Spin>
      </div>
      <div style={{ background: 'white' }}>
        <Tabs defaultActiveKey="2">
          <TabPane
            tab={
              <span>
          <Icon type="apple" />
          待处理信息
        </span>
            }
            key="1"
          >
            <Table bordered columns={columns} dataSource={data1} pagination={false}/>
          </TabPane>
          <TabPane
            tab={
              <span>
          <Icon type="android" />
         操作记录
        </span>
            }
            key="2"
          >
            <Table bordered columns={columns} dataSource={data2} pagination={false}/>
          </TabPane>
        </Tabs>

      </div>
    </PageHeaderWrapper>
  );
};
