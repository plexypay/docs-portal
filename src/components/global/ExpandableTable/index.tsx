import React, { useEffect, useMemo, useRef, useState } from 'react';
import { useCallback } from 'react';


type Props = {
  children: React.ReactNode
}

function ExpandableTable({ children }: Props): JSX.Element {
  const block = useRef(null)

  const [isExpanded, setIsExpanded] = useState(false)

  const [childrensList]: any[] = React.Children.toArray(children)

  const expandBtnText = useMemo(() => isExpanded ? 'Collapse' : 'Expand', [isExpanded])

  const blockClasses = useMemo(() => {
    let classes = ['expandable-table']
    if(isExpanded) {
      classes.push('expandable-table--expanded')
    }
    return classes.join(' ')
  }, [isExpanded])

  const toggleIsExpanded = useCallback(() => {
    setIsExpanded(!isExpanded)
    if(isExpanded) {
      setTimeout(() => {
        block.current.scrollIntoView(true)
      }, 200)
    }
  }, [isExpanded])

  return (
    <div ref={block} className={blockClasses}>
      <table>
        { childrensList.props.children.map((child, idx) => React.cloneElement(child, { key: idx})) }
        <tfoot>
          <tr>
            <td colSpan={999}>
              <div className='expandable-table__expand-btn' onClick={toggleIsExpanded}>
                <span>{ expandBtnText }</span>
              </div>
            </td>
          </tr>
        </tfoot>
      </table>
    </div>
  );
}

export default ExpandableTable