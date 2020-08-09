import React, { PropsWithChildren, ReactElement } from 'react'

interface Props<T> {}

export function Body<T>(
  props: PropsWithChildren<Props<T>>,
): ReactElement<PropsWithChildren<Props<T>>> {
  return <tbody>{props.children}</tbody>
}
