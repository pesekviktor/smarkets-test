import * as React from 'react';

import Ul from './Ul';
import Wrapper from './Wrapper';

interface Props<T> {
  listComponent: React.ComponentType<any>;
  items?: T[];
}

function List<T extends { id: string }>(props: Props<T>) {
  const ComponentToRender = props.listComponent;
  let content = (<div/>) as JSX.Element | JSX.Element[];

  // If we have items, render them
  if (props.items) {
    content = props.items.map(item => (
      <ComponentToRender key={`item-${item.id}`} item={item}/>
    ));
  } else {
    // Otherwise render a single component
    content = <ComponentToRender/>;
  }

  return (
    <Wrapper>
      <Ul>{content}</Ul>
    </Wrapper>
  );
}

export default List;
