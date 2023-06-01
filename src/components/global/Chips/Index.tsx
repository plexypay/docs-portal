import React, { useMemo } from "react";

import styles from "./styles.module.scss";

interface Props extends React.HTMLAttributes<HTMLDivElement>  {
  bgColor?: string;
  color?: string;
}
function Chips ({ color = '#fff', bgColor = 'var(--ifm-breadcrumb-color-active)', className, children }: Props): JSX.Element {
  const blockStyles = useMemo(() => {
    return {
      color,
      backgroundColor: bgColor
    }
  }, [color, bgColor])

  return <div
    className={[className, styles.chips].join(' ')}
    style={blockStyles}
  >
    <div>{children}</div>
  </div>
}

export default Chips