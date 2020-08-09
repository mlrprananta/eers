import React, { PropsWithChildren, ReactElement } from 'react'

interface Props<T> {
  title: string
  dataKey: keyof T
  sortData: (dataKey: keyof T) => void
}

export function HeaderColumn<T>(
  props: PropsWithChildren<Props<T>>,
): ReactElement<PropsWithChildren<Props<T>>> {
  return (
    <th onClick={() => props.sortData(props.dataKey)}>
      <tr>{props.title}</tr>
    </th>
  )
}
