import React, { useEffect, useRef } from 'react';

type ColumnWrapper = {
  tag: string,
  attrs: Record<string, string | Function>
}

type DocsTableColumnDesc = {
  wrappers: ColumnWrapper[]
}

type Props = {
  columns?: DocsTableColumnDesc[],
  children: React.ReactNode
}

function DocsTable({ columns = [], children }: Props): JSX.Element {
  const wrapper = useRef(null)

  useEffect(() => {
    if(columns.length && wrapper.current.children.length) {
      wrapColumns(columns, wrapper.current.children[0])
    }
  }, []);
  
  return (
    <div className='docs-table'>
      <div ref={wrapper} className='docs-table__wrapper'>{children}</div>
    </div>
  );
}

/**
 * Wrap table body columns (td tags) by configuration data
 * @param columns 
 * @param tableEl 
 */
function wrapColumns (columns: DocsTableColumnDesc[], tableEl: HTMLTableElement) {
  columns.forEach((col, index) => {
    const tdsList = tableEl.querySelectorAll(`tbody tr td:nth-child(${index + 1})`)
    if(!col.wrappers) {
      return
    }
    tdsList.forEach((td) => {
      [...col.wrappers].reverse().forEach(wrp => {
        const elOrTextNode = td.children.length ? td.children[0] : td.innerHTML
        const wrapperEl = genWrapper(wrp, elOrTextNode)
        const wrapped = wrapEl(elOrTextNode, wrapperEl)
        if(typeof elOrTextNode === 'string') {
          td.replaceChildren(wrapped)
        }
      })
    })
  })
}

/**
 * Generate wrappee element by wrapper configs
 * @param wrapper 
 * @returns {HTMLElement}
 */
function genWrapper (wrapper: ColumnWrapper, content: Element | string) {
  const wrp = document.createElement(wrapper.tag)
  Object.entries(wrapper.attrs || {}).forEach(([name, val]) => {
    if(typeof val === 'function') {
      wrp.setAttribute(name, val(content))
    } else {
      wrp.setAttribute(name, val)
    }
    
  })
  return wrp
}

/**
 * Wrap HTML element or string value with a wrapper element
 * @param toWrap 
 * @param wrapper 
 * @returns 
 */
function wrapEl(toWrap: Element | string, wrapper: Element) {  
  if(typeof toWrap === 'string') {    
    wrapper.innerHTML = toWrap;
    return wrapper
  } else {
    toWrap.parentNode.insertBefore(wrapper, toWrap);
    return wrapper.appendChild(toWrap);
  }
}

export default DocsTable;
