import React from 'react';
import { Anchor } from 'antd';
import styles from './index.less';

const { Link } = Anchor;

export default () => (
  <div className={styles.container}>
    <div id="components-anchor-demo-basic">
      <Anchor >
        <Link href="#1hao" title="循环水泵站" />
        <Link href="#2hao" title="截留泵站"/>

      </Anchor>
    </div>
  </div>
);
