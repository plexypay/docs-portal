import React from 'react';
import TOC from '@theme-original/TOC';
import styles from "./styles.module.scss";

export default function TOCWrapper(props) {
  return (
    <>
      <div className={styles.tocHeader}>On this page</div>
      <TOC {...props} />
    </>
  );
}
