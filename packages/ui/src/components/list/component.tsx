import React, { memo, ReactNode } from "react";

interface ListProps<T> {
  items: T[];
  renderItem: (item: T) => ReactNode;
}

const List = <T extends unknown>({ items, renderItem }: ListProps<T>) => {
  return (
    <ul>
      {items.map((item: T, index) => (
        <li key={index}>{renderItem(item)}</li>
      ))}
    </ul>
  );
};

export default memo(List) as typeof List;
