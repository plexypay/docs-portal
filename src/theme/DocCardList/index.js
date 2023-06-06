import React from 'react';
import clsx from 'clsx';
import {
  useCurrentSidebarCategory,
  filterDocCardListItems,
} from '@docusaurus/theme-common';
import DocsCard from '/src/components/global/DocsCard';
import DocsCards from '/src/components/global/DocsCards';

function DocCardListForCurrentSidebarCategory({className}) {
  const category = useCurrentSidebarCategory();
  return <DocCardList items={category.items} className={className} />;
}
export default function DocCardList(props) {
  const {items, className} = props;
  if (!items) {
    return <DocCardListForCurrentSidebarCategory {...props} />;
  }
  const filteredItems = filterDocCardListItems(items);
  return (
    <DocsCards className={clsx('two-columns', className)}>
        {filteredItems.map((item, index) => (
          <DocsCard key={index} header={item.label} href={item.href} className="full-width-card" >
            {item.customProps?.description && <p>{item.customProps.description}</p>}
          </DocsCard>
        ))}
    </DocsCards>
  );
}
