import React, { useMemo } from 'react';
import TOC from '@theme-original/TOC';
import styles from "./styles.module.scss";

export default function TOCWrapper(props) {
  const hasContent = useMemo(() => {
    return props.toc.some(t => t.level < 4)
  }, [props.toc])

  return (
    <>
      {hasContent && <div className={styles.tocHeader}>On this page</div>}
      <TOC {...props} />
    </>
  );
}
