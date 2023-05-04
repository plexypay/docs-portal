import React from 'react';
import CodeBlock from '@theme/CodeBlock';
import clsx from "clsx";

import styles from "./styles.module.scss";

function EndpointInfo ({ method, children }): JSX.Element {
  return <div className={styles.endpointInfo}>
    <div className={styles.method}>{ method }</div>
    <CodeBlock className={styles.endpoint}>{ children }</CodeBlock>
  </div>
}

export default EndpointInfo