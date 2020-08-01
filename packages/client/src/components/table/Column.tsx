import React, { PropsWithChildren, ReactElement } from 'react'

interface Props<T> {
  dataKey: keyof T
  data: T
}

export function Column<T>(
  props: PropsWithChildren<Props<T>>,
): ReactElement<PropsWithChildren<Props<T>>> {
  return <td>{props.data[props.dataKey]}</td>
}
