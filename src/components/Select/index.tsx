import React from 'react';

interface Props {
  items: Array<{ key: string; value: React.ReactNode }>;
  onSelectChange: (key: string) => any;
  selectedKey: string;
}

function Select({items, selectedKey, onSelectChange}: Props) {
  return (
    <select
      onChange={event => {
        onSelectChange(event.target.value);
      }}
      defaultValue={selectedKey}
    >
      {items.map(item => (
        <option
          key={`select_${item.key}`}
          value={item.key}
        >
          {item.value}
        </option>
      ))}
    </select>
  );
}

export default Select;
